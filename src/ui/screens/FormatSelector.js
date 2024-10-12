import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {useProgress} from "../../hooks/useProgress";
import {QuestionLayout} from "../shared/QuestionLayout";

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
        />
    )
}