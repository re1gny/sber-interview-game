import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import {Button} from "./Button";
import {GlassPanel} from "./GlassPanel";
import {motion} from "framer-motion";

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
`

const PanelWrapperStyled = styled.div`
    padding: ${({sizeRatio}) => `0 ${scalePx(20, sizeRatio)}`};
`

const PanelStyled = styled(GlassPanel)`
    padding: ${({sizeRatio}) => `${scalePx(20, sizeRatio)} ${scalePx(18, sizeRatio)}`};
`

const ButtonWrapperStyled = styled.div`
    margin-top: ${({sizeRatio}) => scalePx(12, sizeRatio)};
    padding: ${({sizeRatio}) => `0 ${scalePx(20, sizeRatio)} ${scalePx(32, sizeRatio)}`};
`

export function QuestionLayout(props) {
    const {content, questionContent, onSelect, ...rest} = props;
    const sizeRatio = useSizeRatio();

    return (
        <WrapperStyled sizeRatio={sizeRatio} {...rest}>
            <ContentWrapperStyled sizeRatio={sizeRatio}>{content}</ContentWrapperStyled>
            <PanelWrapperStyled sizeRatio={sizeRatio}>
                <PanelStyled sizeRatio={sizeRatio}>{questionContent}</PanelStyled>
            </PanelWrapperStyled>
            <ButtonWrapperStyled sizeRatio={sizeRatio}>
                <Button onClick={onSelect}>Выбрать</Button>
            </ButtonWrapperStyled>
        </WrapperStyled>
    )
}