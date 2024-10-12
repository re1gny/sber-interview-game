import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {useProgress} from "../../hooks/useProgress";
import {QuestionLayout} from "../shared/QuestionLayout";

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
            title="Ты уже окончил(а) вуз?"
            center
            view="box"
            value={education}
            options={[
                {value: 'student', label: 'Нет, я ещё студент'},
                {value: 'graduate', label: 'Да, я уже выпускник'},
            ]}
            onChange={setEducation}
            onSubmit={handleNext}
        />
    )
}