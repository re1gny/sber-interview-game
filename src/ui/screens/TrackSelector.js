import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {useProgress} from "../../hooks/useProgress";
import {QuestionLayout} from "../shared/QuestionLayout";
import {PersonConstructor} from "../PersonConstructor";

const PersonConstructorWrapper = styled.div`
    display: flex;
    width: 100%;
    max-height: 100%;
    padding: ${({sizeRatio}) => `${scalePx(68, sizeRatio)} ${scalePx(27, sizeRatio)} ${scalePx(14, sizeRatio)}`};
`;

export function TrackSelector() {
    const sizeRatio = useSizeRatio();
    const {track, setTrack, next} = useProgress();

    const handleNext = () => {
        if (track) {
            next();
        }
    };

    return (
        <QuestionLayout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            title="А теперь расскажи, чем ты хочешь заниматься!"
            value={track}
            options={[
                {value: 'development', label: 'Разработка'},
                {value: 'analytics', label: 'Аналитика'},
                {value: 'cybersecurity', label: 'Кибербезопасность'},
                {value: 'testing', label: 'Тестирование'},
                {value: 'data', label: 'Работа с данными'},
            ]}
            onChange={setTrack}
            onSubmit={handleNext}
        >
            <PersonConstructorWrapper sizeRatio={sizeRatio}>
                <PersonConstructor />
            </PersonConstructorWrapper>
        </QuestionLayout>
    )
}