import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import Star from "../../assets/images/star.png";
import Male from "../../assets/images/selector-male.png";
import Female from "../../assets/images/selector-female.png";
import {AnimatePresence, motion} from "framer-motion";
import {useProgress} from "../../hooks/useProgress";
import {Image} from "../shared/Image";
import {QuestionLayout} from "../shared/QuestionLayout";

const PersonsWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    padding-top: ${({sizeRatio}) => scalePx(40, sizeRatio)};
`

const MalePersonWrapperStyled = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: ${({sizeRatio}) => scalePx(183, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(323, sizeRatio)};
    cursor: pointer;
`

const FemalePersonWrapperStyled = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: ${({sizeRatio}) => scalePx(183, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(329, sizeRatio)};
    cursor: pointer;
`

const PersonImageWrapperStyled = styled(motion.div)`
    position: relative;
    height: 100%;
    transform-origin: bottom;
    pointer-events: none;
`

const PersonImageStyled = styled(Image)`
    position: relative;
    height: 100%;
    width: auto;
    object-fit: contain;
    z-index: 2;
`

const MaleStarStyled = styled(Image)`
    position: absolute;
    top: ${({sizeRatio}) => scalePx(-106, sizeRatio)};
    right: ${({sizeRatio}) => scalePx(12, sizeRatio)};
    width: ${({sizeRatio}) => scalePx(252, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(256, sizeRatio)};
`

const FemaleStarStyled = styled(Image)`
    position: absolute;
    top: ${({sizeRatio}) => scalePx(-70, sizeRatio)};
    right: ${({sizeRatio}) => scalePx(-32, sizeRatio)};
    width: ${({sizeRatio}) => scalePx(252, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(256, sizeRatio)};
`

export function GenderSelector() {
    const sizeRatio = useSizeRatio();
    const {gender, setGender, next} = useProgress();

    const handleNext = () => {
        if (gender) {
            next();
        }
    };

    return (
        <QuestionLayout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            title='КТО ТЫ?'
            center
            onSubmit={handleNext}
        >
            <PersonsWrapperStyled sizeRatio={sizeRatio}>
                <MalePersonWrapperStyled sizeRatio={sizeRatio} onClick={() => setGender('male')}>
                    <PersonImageWrapperStyled
                        sizeRatio={sizeRatio}
                        animate={{ scale: gender === 'male' ? 1.08 : 1 }}
                    >
                        <AnimatePresence>
                            {gender === 'male' && (
                                <MaleStarStyled
                                    src={Star}
                                    sizeRatio={sizeRatio}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />
                            )}
                        </AnimatePresence>
                        <PersonImageStyled src={Male} sizeRatio={sizeRatio} />
                    </PersonImageWrapperStyled>
                </MalePersonWrapperStyled>
                <FemalePersonWrapperStyled sizeRatio={sizeRatio} onClick={() => setGender('female')}>
                    <PersonImageWrapperStyled
                        sizeRatio={sizeRatio}
                        animate={{ scale: gender === 'female' ? 1.1 : 1 }}
                    >
                        <AnimatePresence>
                            {gender === 'female' && (
                                <FemaleStarStyled
                                    src={Star}
                                    sizeRatio={sizeRatio}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />
                            )}
                        </AnimatePresence>
                        <PersonImageStyled src={Female} sizeRatio={sizeRatio} />
                    </PersonImageWrapperStyled>
                </FemalePersonWrapperStyled>
            </PersonsWrapperStyled>
        </QuestionLayout>
    )
}