import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {useProgress} from "../../hooks/useProgress";
import {QuestionLayout} from "../shared/QuestionLayout";
import {
    DEVELOPMENT_QUESTIONS,
    ANALYTICS_QUESTIONS,
    TESTING_QUESTIONS,
    CYBERSECURITY_QUESTIONS,
    DATA_QUESTIONS,
} from "../../constants/questions";
import {useState} from "react";
import {Modal} from "../shared/Modal";
import {AnimatePresence, motion} from "framer-motion";
import {Progress} from "../shared/Progress";
import {POINTS_TOTAL} from "../../constants/rules";
import {PersonConstructor} from "../PersonConstructor";

const QUESTIONS_BY_TRACK = {
    development: DEVELOPMENT_QUESTIONS,
    analytics: ANALYTICS_QUESTIONS,
    cybersecurity: CYBERSECURITY_QUESTIONS,
    testing: TESTING_QUESTIONS,
    data: DATA_QUESTIONS,
};

const WrapperStyled = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const ProgressStyled = styled(Progress)`
    position: absolute;
    top: ${({sizeRatio}) => scalePx(73, sizeRatio)};
    left: 50%;
    transform: translateX(-50%);
`;

const PersonConstructorWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: ${({sizeRatio}) => `${scalePx(80, sizeRatio)} ${scalePx(27, sizeRatio)} ${scalePx(10, sizeRatio)}`};
`;

export function Interview() {
    const sizeRatio = useSizeRatio();
    const {track, points, next, addPoints} = useProgress();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentValue, setCurrentValue] = useState(null);
    const [resultOpened, setResultOpened] = useState(false);

    const questions = QUESTIONS_BY_TRACK[track];
    const currentQuestion = questions[currentIndex];
    const currentAnswer = currentQuestion?.answers?.find(({id}) => currentValue === id);

    const handleAnswer = () => {
        if (currentAnswer) {
            setResultOpened(true);
        }
    };

    const handleNext = () => {
        setResultOpened(false);

        if (currentAnswer?.correct) {
            addPoints();
        }

        if (currentIndex < questions.length - 1) {
            setCurrentValue(null);
            setCurrentIndex(prev => prev + 1);
        } else {
            next();
        }
    };

    return (
        <WrapperStyled
            sizeRatio={sizeRatio}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <AnimatePresence initial={false} mode="wait">
                <QuestionLayout
                    key={currentQuestion.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    title={currentQuestion.question}
                    size={currentQuestion.size}
                    value={currentValue}
                    options={currentQuestion.answers.map(({id, label}) => ({value: id, label}))}
                    onChange={setCurrentValue}
                    onSubmit={handleAnswer}
                >
                    <PersonConstructorWrapper sizeRatio={sizeRatio}>
                        <PersonConstructor variant={currentIndex} />
                    </PersonConstructorWrapper>
                </QuestionLayout>
            </AnimatePresence>
            <ProgressStyled sizeRatio={sizeRatio} value={points} total={POINTS_TOTAL} />
            <Modal
                opened={resultOpened}
                title={currentAnswer?.correct ? 'Верно!' : 'Что-то не так!'}
                description={currentQuestion?.description}
                onNext={handleNext}
            />
        </WrapperStyled>
    )
}