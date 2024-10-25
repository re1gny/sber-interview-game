import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {Button} from "../shared/Button";
import {Text} from "../shared/Text";
import {Panel} from "../shared/Panel";
import {useProgress} from "../../hooks/useProgress";
import {motion} from "framer-motion";
import {POINTS_TO_WIN, POINTS_TOTAL} from "../../constants/rules";
import {Progress} from "../shared/Progress";
import {PersonConstructor} from "../PersonConstructor";

const WrapperStyled = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
`;

const ContentWrapperStyled = styled.div`
    flex-grow: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 0;
`

const PersonConstructorWrapper = styled.div`
    display: flex;
    width: 100%;
    max-height: 100%;
    padding: ${({sizeRatio}) => `${scalePx(80, sizeRatio)} ${scalePx(11, sizeRatio)} ${scalePx(14, sizeRatio)}`};
`;

const PanelWrapperStyled = styled.div`
    width: 100%;
    padding: ${({sizeRatio}) => `0 ${scalePx(20, sizeRatio)}`};
`

const PanelStyled = styled(Panel)`
    padding: ${({sizeRatio}) => `${scalePx(20, sizeRatio)} ${scalePx(23.5, sizeRatio)}`};
`

const PanelTextStyled = styled(Text)`
    text-align: center;
    white-space: pre-wrap;
`

const ButtonWrapperStyled = styled.div`
    width: 100%;
    margin-top: ${({sizeRatio}) => scalePx(12, sizeRatio)};
    padding: ${({sizeRatio}) => `0 ${scalePx(20, sizeRatio)} ${scalePx(32, sizeRatio)}`};
`

const ProgressStyled = styled(Progress)`
    position: absolute;
    top: ${({sizeRatio}) => scalePx(73, sizeRatio)};
    left: 50%;
    transform: translateX(-50%);
`;

export function Final() {
    const sizeRatio = useSizeRatio();
    const {points} = useProgress();

    const isWin = points >= POINTS_TO_WIN;

    const text = isWin ?
        'Таким тебя увидел интервьюер — настоящий кандидат мечты! \n\nА если ты мечтаешь попасть на\xa0стажировку в\xa0Сбер, то скорее переходи по\xa0ссылке и\xa0оставляй заявку!'
        : 'Таким кандидатом тебя увидел интервьюер — классным специалистом, которому пока немного не\xa0хватает знаний. Попробуй пройти тренажёр собеседования снова, учитывая свои ошибки. \n\nТеперь ты готов к\xa0прохождению технических интервью! А\xa0если мечтаешь попасть на\xa0стажировку в\xa0Сбер, то скорее переходи по\xa0ссылке и\xa0оставляй заявку!';

    const handleGoToInternship = () => {
        window.open('https://sbergraduate.ru/sberseasons-2025?utm_source=fut&utm_medium=it-site&utm_campaign=game', '_blank');
    };

    return (
        <WrapperStyled
            sizeRatio={sizeRatio}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ContentWrapperStyled sizeRatio={sizeRatio}>
                <ProgressStyled sizeRatio={sizeRatio} value={points} total={POINTS_TOTAL} />
                <PersonConstructorWrapper sizeRatio={sizeRatio}>
                    <PersonConstructor final />
                </PersonConstructorWrapper>
            </ContentWrapperStyled>
            <PanelWrapperStyled sizeRatio={sizeRatio}>
                <PanelStyled sizeRatio={sizeRatio}>
                    <PanelTextStyled sizeRatio={sizeRatio}>
                        {text}
                    </PanelTextStyled>
                </PanelStyled>
            </PanelWrapperStyled>
            <ButtonWrapperStyled sizeRatio={sizeRatio}>
                <Button onClick={handleGoToInternship}>К стажировке!</Button>
            </ButtonWrapperStyled>
        </WrapperStyled>
    )
}