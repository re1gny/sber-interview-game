import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {useProgress} from "../../hooks/useProgress";
import {QuestionLayout} from "../shared/QuestionLayout";
import {PersonConstructor} from "../PersonConstructor";

const PersonConstructorWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: ${({sizeRatio}) => `${scalePx(68, sizeRatio)} ${scalePx(27, sizeRatio)} ${scalePx(14, sizeRatio)}`};
`;

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
            title="Какой формат работы ищешь?"
            center
            value={format}
            options={[
                {value: 'office', label: 'Хочу работать в офисе!'},
                {value: 'remote', label: 'Хочу на удаленку!'},
                {value: 'hybrid', label: 'Хочу гибридный график!'},
            ]}
            onChange={setFormat}
            onSubmit={handleNext}
        >
            <PersonConstructorWrapper sizeRatio={sizeRatio}>
                <PersonConstructor />
            </PersonConstructorWrapper>
        </QuestionLayout>
    )
}