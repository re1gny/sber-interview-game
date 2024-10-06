import styled from "@emotion/styled";
import {scalePx} from "../../utils/scalePx";
import {useSizeRatio} from "../../hooks/useSizeRatio";
import MaleStudent from "../../assets/images/selector-male-student.png";
import MaleGraduate from "../../assets/images/selector-male-graduate.png";
import Male from "../../assets/images/selector-male.png";
import FemaleStudent from "../../assets/images/selector-female-student.png";
import FemaleGraduate from "../../assets/images/selector-female-graduate.png";
import Female from "../../assets/images/selector-female-2.png";
import {AnimatePresence, motion} from "framer-motion";
import {useProgress} from "../../hooks/useProgress";
import {Image} from "../shared/Image";

const PersonWrapperStyled = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: ${({sizeRatio}) => scalePx(321, sizeRatio)};
    width: 100%;
`;

const MaleStyled = styled(Image)`
    height: ${({sizeRatio, height}) => scalePx(height, sizeRatio)};
`

const FemaleStyled = styled(Image)`
    height: ${({sizeRatio}) => scalePx(314, sizeRatio)};
`

export const EducationPersonSelector = (props) => {
    const sizeRatio = useSizeRatio();
    const {gender, education} = useProgress();

    const getPerson = (props) => {
        if (gender === 'male') {
            if (education === 'student') {
                return (
                    <MaleStyled
                        key="student-male"
                        src={MaleStudent}
                        sizeRatio={sizeRatio}
                        height={301}
                        {...props}
                    />
                )
            }

            if (education === 'graduate') {
                return (
                    <MaleStyled
                        key="graduate-male"
                        src={MaleGraduate}
                        sizeRatio={sizeRatio}
                        height={321}
                        {...props}
                    />
                )
            }

            return (
                <MaleStyled
                    key="male"
                    src={Male}
                    sizeRatio={sizeRatio}
                    height={301}
                    {...props}
                />
            )
        }

        if (gender === 'female') {
            if (education === 'student') {
                return (
                    <FemaleStyled
                        key="student-female"
                        src={FemaleStudent}
                        sizeRatio={sizeRatio}
                        {...props}
                    />
                )
            }

            if (education === 'graduate') {
                return (
                    <FemaleStyled
                        key="graduate-female"
                        src={FemaleGraduate}
                        sizeRatio={sizeRatio}
                        {...props}
                    />
                )
            }

            return (
                <FemaleStyled
                    key="female"
                    src={Female}
                    sizeRatio={sizeRatio}
                    {...props}
                />
            )
        }
    }

    return (
        <PersonWrapperStyled sizeRatio={sizeRatio} {...props}>
            <AnimatePresence mode="wait">
                {getPerson({
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 }
                })}
            </AnimatePresence>
        </PersonWrapperStyled>
    )
}
