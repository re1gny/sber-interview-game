import {AnimatePresence, motion} from "framer-motion";
import {Intro} from "./screens/Intro";
import {GenderSelector} from "./screens/GenderSelector";
import {EducationSelector} from "./screens/EducationSelector";
import {FormatSelector} from "./screens/FormatSelector";
import {SCREEN_BACKGROUND, SCREEN_NAME} from "../constants/screens";
import {useProgress} from "../hooks/useProgress";
import styled from "@emotion/styled";
import {scalePx} from "../utils/scalePx";
import Logo from "../assets/images/logo.svg";
import {useSizeRatio} from "../hooks/useSizeRatio";

const SCREENS = {
    [SCREEN_NAME.Intro]: Intro,
    [SCREEN_NAME.GenderSelector]: GenderSelector,
    [SCREEN_NAME.EducationSelector]: EducationSelector,
    [SCREEN_NAME.FormatSelector]: FormatSelector,
};

const WrapperStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const BackgroundStyled = styled(motion.img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const LogoStyled = styled.img`
    position: absolute;
    top: ${({sizeRatio}) => scalePx(26, sizeRatio)};
    left: ${({sizeRatio}) => scalePx(20, sizeRatio)};
    width: ${({sizeRatio}) => scalePx(96, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(27, sizeRatio)};
    z-index: 10;
`

export function ContentRouter() {
    const sizeRatio = useSizeRatio();
    const {screen} = useProgress();

    const Component = SCREENS[screen];

    return (
        <WrapperStyled sizeRatio={sizeRatio} screen={screen}>
            <AnimatePresence initial={false}>
                <BackgroundStyled
                    key={SCREEN_BACKGROUND[screen]}
                    src={SCREEN_BACKGROUND[screen]}
                    sizeRatio={sizeRatio}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            </AnimatePresence>
            <LogoStyled src={Logo} sizeRatio={sizeRatio} />
            <AnimatePresence initial={false} mode="wait">
                {!!Component && <Component key={screen} />}
            </AnimatePresence>
        </WrapperStyled>
    )
}