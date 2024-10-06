import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import SubBackground from "../../assets/images/default-sub-background.png";
import {useProgress} from "../../hooks/useProgress";
import {Image} from "../shared/Image";
import {Text} from "../shared/Text";
import {SelectionBoxList} from "../shared/SelectionBoxList";
import {QuestionLayout} from "../shared/QuestionLayout";
import {EducationPersonSelector} from "../persons/EducationPersonSelector";

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

const QuestionOptionsStyled = styled(SelectionBoxList)`
    margin-top: ${({sizeRatio}) => scalePx(24, sizeRatio)};
`

const PersonStyled = styled(EducationPersonSelector)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
`;

export function EducationSelector() {
    const sizeRatio = useSizeRatio();
    const {education, setEducation, next} = useProgress();

    const handleNext = () => {
        if (education) {
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
                <>
                    <SubBackgroundStyled src={SubBackground} sizeRatio={sizeRatio} />
                    <PersonStyled />
                </>
            )}
            questionContent={(
                <>
                    <QuestionTextStyled sizeRatio={sizeRatio} bold>Ты уже окончил(а) вуз?</QuestionTextStyled>
                    <QuestionOptionsStyled
                        sizeRatio={sizeRatio}
                        value={education}
                        options={[
                            {value: 'student', label: 'Нет, я ещё студент'},
                            {value: 'graduate', label: 'Да, я уже выпускник'},
                        ]}
                        onChange={setEducation}
                    />
                </>
            )}
        />
    )
}