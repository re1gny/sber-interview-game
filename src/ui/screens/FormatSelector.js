import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import SubBackground from "../../assets/images/default-sub-background.png";
import MaleStudent from "../../assets/images/selector-male-student.png";
import MaleGraduate from "../../assets/images/selector-male-graduate.png";
import Male from "../../assets/images/selector-male.png";
import FemaleStudent from "../../assets/images/selector-female-student.png";
import FemaleGraduate from "../../assets/images/selector-female-graduate.png";
import Female from "../../assets/images/selector-female-2.png";
import {AnimatePresence} from "framer-motion";
import {useProgress} from "../../hooks/useProgress";
import {Image} from "../shared/Image";
import {Text} from "../shared/Text";
import {QuestionLayout} from "../shared/QuestionLayout";
import {SelectionTextList} from "../shared/SelectionTextList";

const SubBackgroundStyled = styled(Image)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${({sizeRatio}) => scalePx(321, sizeRatio)};
`

const QuestionTextStyled = styled(Text)`
    text-align: center;
    text-transform: uppercase;
`

const QuestionOptionsStyled = styled(SelectionTextList)`
    margin-top: ${({sizeRatio}) => scalePx(24, sizeRatio)};
`

const PersonWrapperStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: ${({sizeRatio}) => scalePx(321, sizeRatio)};
    width: 100%;
    z-index: 2;
`;

const StudentMaleStyled = styled(Image)`
    height: ${({sizeRatio}) => scalePx(301, sizeRatio)};
`

const GraduateMaleStyled = styled(Image)`
    height: ${({sizeRatio}) => scalePx(321, sizeRatio)};
`

const MaleStyled = styled(Image)`
    height: ${({sizeRatio}) => scalePx(301, sizeRatio)};
`

const FemaleStyled = styled(Image)`
    height: ${({sizeRatio}) => scalePx(314, sizeRatio)};
`

function Person(props) {
    const sizeRatio = useSizeRatio();
    const {gender, education} = useProgress();

    if (gender === 'male') {
        if (education === 'student') {
            return (
                <StudentMaleStyled
                    key="student-male"
                    src={MaleStudent}
                    sizeRatio={sizeRatio}
                    {...props}
                />
            )
        }

        if (education === 'graduate') {
            return (
                <GraduateMaleStyled
                    key="graduate-male"
                    src={MaleGraduate}
                    sizeRatio={sizeRatio}
                    {...props}
                />
            )
        }

        return (
            <MaleStyled
                key="male"
                src={Male}
                sizeRatio={sizeRatio}
                {...props}
            />
        )
    }

    if (gender === 'female') {
        if (education === 'student') {
            return (
                <FemaleStyled
                    key="student-female"
                    src={FemaleStudent}
                    sizeRatio={sizeRatio}
                    {...props}
                />
            )
        }

        if (education === 'graduate') {
            return (
                <FemaleStyled
                    key="graduate-female"
                    src={FemaleGraduate}
                    sizeRatio={sizeRatio}
                    {...props}
                />
            )
        }

        return (
            <FemaleStyled
                key="female"
                src={Female}
                sizeRatio={sizeRatio}
                {...props}
            />
        )
    }
}

export function FormatSelector() {
    const sizeRatio = useSizeRatio();
    const {format, setFormat, next} = useProgress();

    const handleNext = () => {
        if (format) {
            next();
        }
    };

    return (
        <QuestionLayout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSelect={handleNext}
            content={(
                <AnimatePresence mode="sync">
                    <SubBackgroundStyled src={SubBackground} sizeRatio={sizeRatio} />
                    <PersonWrapperStyled sizeRatio={sizeRatio}>
                        <Person
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                    </PersonWrapperStyled>
                </AnimatePresence>
            )}
            questionContent={(
                <>
                    <QuestionTextStyled sizeRatio={sizeRatio} bold>Какой формат работы ищешь?</QuestionTextStyled>
                    <QuestionOptionsStyled
                        sizeRatio={sizeRatio}
                        value={format}
                        options={[
                            {value: 'office', label: 'Хочу работать в офисе!'},
                            {value: 'remote', label: 'Хочу на удаленку!'},
                            {value: 'hybrid', label: 'Хочу гибридный график!'},
                        ]}
                        onChange={setFormat}
                    />
                </>
            )}
        />
    )
}