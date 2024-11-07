import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import IntroImage from "../../assets/images/intro-image.png";
import {Image} from "../shared/Image";
import {Button} from "../shared/Button";
import {Text} from "../shared/Text";
import {useProgress} from "../../hooks/useProgress";
import {motion} from "framer-motion";
import {reachMetrikaGoal} from "../../utils/reachMetrikaGoal";

const WrapperStyled = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
`;

const ImageWrapperStyled = styled.div`
    flex-grow: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ImageStyled = styled(Image)`
    width: 100%;
    height: auto;
`

const TextsWrapperStyled = styled.div`
    padding: ${({sizeRatio}) => `0 ${scalePx(24, sizeRatio)}`};
`

const TitleStyled = styled(Text)`
    text-transform: uppercase;
`

const TextStyled = styled(Text)`
    margin-top: ${({sizeRatio}) => scalePx(15, sizeRatio)};
`

const ButtonWrapperStyled = styled.div`
    margin-top: ${({sizeRatio}) => scalePx(20, sizeRatio)};
    padding: ${({sizeRatio}) => `0 ${scalePx(20, sizeRatio)} ${scalePx(32, sizeRatio)}`};
`

export function Intro() {
    const sizeRatio = useSizeRatio();
    const {next} = useProgress();

    const handleNext = () => {
        reachMetrikaGoal('start');
        next();
    }

    return (
        <WrapperStyled
            sizeRatio={sizeRatio}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ImageWrapperStyled sizeRatio={sizeRatio}>
                <ImageStyled src={IntroImage} sizeRatio={sizeRatio} />
            </ImageWrapperStyled>
            <TextsWrapperStyled sizeRatio={sizeRatio}>
                <TitleStyled sizeRatio={sizeRatio} size="l" bold>Сегодня ты проходишь техническое интервью в&nbsp;Сбер</TitleStyled>
                <TextStyled sizeRatio={sizeRatio}>Каким сотрудником увидит тебя интервьюер? Зависит только от&nbsp;твоих ответов! Проходи собеседование и&nbsp;наблюдай, как трансформируется твой персонаж в&nbsp;зависимости от&nbsp;твоего выбора.</TextStyled>
            </TextsWrapperStyled>
            <ButtonWrapperStyled sizeRatio={sizeRatio}>
                <Button onClick={handleNext}>К интервью!</Button>
            </ButtonWrapperStyled>
        </WrapperStyled>
    )
}