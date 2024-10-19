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

export function SkillsSelector() {
    const sizeRatio = useSizeRatio();
    const {skills, setSkills, next} = useProgress();

    const handleNext = () => {
        if (skills?.length) {
            next();
        }
    };

    const title = 'Сбор общей информации подходит к\xa0концу — дальше мы проверим твои навыки. Но\xa0софт-скиллы не\xa0менее важны, не\xa0правда\xa0ли? :) Сначала выбери качества, которыми ты обладаешь.';

    return (
        <QuestionLayout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            title={title}
            size="s"
            value={skills}
            options={[
                {value: 'communication', label: 'Коммуникабельность'},
                {value: 'teamwork', label: 'Командная работа'},
                {value: 'time-management', label: 'Тайм-менеджмент'},
                {value: 'self-organization', label: 'Самоорганизация'},
                {value: 'attentiveness', label: 'Внимательность'},
            ]}
            multi
            onChange={setSkills}
            onSubmit={handleNext}
        >
            <PersonConstructorWrapper sizeRatio={sizeRatio}>
                <PersonConstructor />
            </PersonConstructorWrapper>
        </QuestionLayout>
    )
}