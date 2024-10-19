import {AnimatePresence, motion} from "framer-motion";
import styled from "@emotion/styled";
import {useProgress} from "../hooks/useProgress";
import {useSizeRatio} from "../hooks/useSizeRatio";
import {scalePx} from "../utils/scalePx";

import Image1 from "../assets/images/constructor/пол (до выбора места выбора работы).png";
import Image2 from "../assets/images/constructor/дев  начальная.png";
import Image3 from "../assets/images/constructor/дев студент 0.png";
import Image4 from "../assets/images/constructor/дев выпуск 0.png";
import Image5 from "../assets/images/constructor/пар начальный.png";
import Image6 from "../assets/images/constructor/пар студент 0.png";
import Image7 from "../assets/images/constructor/пар выпуск 0.png";
import Image8 from "../assets/images/constructor/пол (начиная с места выбора работы).png";
import Image9 from "../assets/images/constructor/стол (работа из офиса и гибрид).png";
import Image10 from "../assets/images/constructor/диван (работа из дома).png";
import Image11 from "../assets/images/constructor/диплом (для выпускника).png";
import Image12 from "../assets/images/constructor/книги (для студента).png";
import Image13 from "../assets/images/constructor/кошка (работа из дома и гибрид).png";
import Image14 from "../assets/images/constructor/дев студент 1.png";
import Image15 from "../assets/images/constructor/дев студент 2.png";
import Image16 from "../assets/images/constructor/дев студент 3.png";
import Image17 from "../assets/images/constructor/дев студент 4.png";
import Image18 from "../assets/images/constructor/дев студент 5.png";
import Image19 from "../assets/images/constructor/дев выпуск 1.png";
import Image20 from "../assets/images/constructor/дев выпуск 2.png";
import Image21 from "../assets/images/constructor/дев выпуск 3.png";
import Image22 from "../assets/images/constructor/дев выпуск 4.png";
import Image23 from "../assets/images/constructor/дев выпуск 5.png";
import Image24 from "../assets/images/constructor/пар студент 1.png";
import Image25 from "../assets/images/constructor/пар студент 2.png";
import Image26 from "../assets/images/constructor/пар студент 3.png";
import Image27 from "../assets/images/constructor/пар студент 4.png";
import Image28 from "../assets/images/constructor/пар студент 5.png";
import Image29 from "../assets/images/constructor/пар выпуск 1.png";
import Image30 from "../assets/images/constructor/пар выпуск 2.png";
import Image31 from "../assets/images/constructor/пар выпуск 3.png";
import Image32 from "../assets/images/constructor/пар выпуск 4.png";
import Image33 from "../assets/images/constructor/пар выпуск 5.png";
import Image34 from "../assets/images/constructor/командная работа софт скилл.png";
import Image35 from "../assets/images/constructor/1 софт скилл.png";
import Image36 from "../assets/images/constructor/2 софт скилла.png";
import Image37 from "../assets/images/constructor/3 софт скилла.png";
import Image38 from "../assets/images/constructor/4 софт скилла.png";
import Image39 from "../assets/images/skills/Mask group.png";
import Image40 from "../assets/images/skills/Mask group-1.png";
import Image41 from "../assets/images/skills/Mask group-2.png";
import Image42 from "../assets/images/skills/Mask group-3.png";
import Image43 from "../assets/images/backgrounds/Frame 29.png";
import Image44 from "../assets/images/backgrounds/Frame 29-2.png";
import Image45 from "../assets/images/backgrounds/Frame 29-3.png";
import Image46 from "../assets/images/backgrounds/Frame 29-4.png";
import Image47 from "../assets/images/backgrounds/Frame 29-5.png";
import Image48 from "../assets/images/backgrounds/Frame 29-6.png";
import Image49 from "../assets/images/backgrounds/Frame 65.png";

const WrapperStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 100%;
`;

const PersonWrapperStyled = styled.div`
    position: relative;
    display: flex;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
`;

const PersonImageStyled = styled(motion.img)`
    position: relative;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    
    & + & {
        position: absolute;
        top: 0;
        left: 0;
    }
`

const SKILLS_AMOUNT_TO_WIDTH = {
    1: 27.6,
    2: 27.6,
    3: 38,
    4: 48.3,
};

const SkillsWrapper = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    bottom: 25%;
    left: 17.3%;
    width: ${({totalAmount}) => `${SKILLS_AMOUNT_TO_WIDTH[totalAmount]}%`};
    height: 15.8%;
`;

const SkillImageStyled = styled(motion.img)`
    flex-shrink: 0;
    position: relative;
    height: 54.3%;
    object-fit: contain;
`

const BackgroundImageStyled = styled(motion.img)`
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: auto;
    transform: translateY(-50%);
`

function getBackgroundImage(track, final) {
    if (final) {
        return Image49;
    }

    if (track === 'development') {
        return Image44;
    }

    if (track === 'analytics') {
        return Image45;
    }

    if (track === 'cybersecurity') {
        return Image46;
    }

    if (track === 'testing') {
        return Image47;
    }

    if (track === 'data') {
        return Image48;
    }

    return Image43;
}

function getSkillsImages(skills) {
    const result = [];

    const preparedSkills = skills?.filter(skill => skill !== 'teamwork');

    if (preparedSkills?.includes('communication')) {
        result.push(Image39);
    }

    if (preparedSkills?.includes('time-management')) {
        result.push(Image40);
    }

    if (preparedSkills?.includes('self-organization')) {
        result.push(Image41);
    }

    if (preparedSkills?.includes('attentiveness')) {
        result.push(Image42);
    }

    return result;
}

function getPersonImages(gender, education, format, skills, variant = 0) {
    const result = [];

    if (format) {
        result.push(Image8)

        const maleStudentImages = [Image24, Image25, Image26, Image27, Image28];
        const femaleStudentImages = [Image14, Image15, Image16, Image17, Image18];
        const maleGraduateImages = [Image29, Image30, Image31, Image32, Image33];
        const femaleGraduateImages = [Image19, Image20, Image21, Image22, Image23];

        const currentMaleImages = education === "graduate" ? maleGraduateImages : maleStudentImages;
        const currentFemaleImages = education === "graduate" ? femaleGraduateImages : femaleStudentImages;

        const currentImages = gender === 'male' ? currentMaleImages : currentFemaleImages;

        if (skills?.includes('teamwork')) {
            result.push(Image34)
        }

        if (format === "office") {
            result.push(Image9)
        } else if (format === "remote") {
            result.push(Image10, Image13)
        } else if (format === "hybrid") {
            result.push(Image9, Image13)
        }

        if (education === "graduate") {
            result.push(Image11)
        } else if (education === "student") {
            result.push(Image12)
        }

        result.push(currentImages[variant]);

        const preparedSkills = skills?.filter(skill => skill !== 'teamwork');

        if (preparedSkills?.length === 1) {
            result.push(Image35)
        } else if (preparedSkills?.length === 2) {
            result.push(Image36)
        } else if (preparedSkills?.length === 3) {
            result.push(Image37)
        } else if (preparedSkills?.length === 4) {
            result.push(Image38)
        }
    } else {
        result.push(Image1)

        const maleImages = [Image5, Image6, Image7];
        const femaleImages = [Image2, Image3, Image4];

        const currentImages = gender === 'male' ? maleImages : femaleImages;

        if (education === "graduate") {
            result.push(currentImages[2])
        } else if (education === "student") {
            result.push(currentImages[1])
        } else {
            result.push(currentImages[0])
        }
    }

    return result;
}

export function PersonConstructor(props) {
    const {variant = 0, final} = props;
    const sizeRatio = useSizeRatio();
    const {gender, education, format, skills, track} = useProgress();

    const personImages = getPersonImages(gender, education, format, skills, variant);
    const skillsImages = getSkillsImages(skills);
    const backgroundImage = getBackgroundImage(track, final);

    return (
        <WrapperStyled sizeRatio={sizeRatio}>
            <AnimatePresence>
                <BackgroundImageStyled
                    key={backgroundImage}
                    src={backgroundImage}
                    sizeRatio={sizeRatio}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            </AnimatePresence>
            <PersonWrapperStyled sizeRatio={sizeRatio}>
                <AnimatePresence>
                    {personImages.map(image => (
                        <PersonImageStyled
                            key={image}
                            src={image}
                            sizeRatio={sizeRatio}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                    ))}
                </AnimatePresence>
                <AnimatePresence>
                    {skillsImages.length > 0 && (
                        <SkillsWrapper sizeRatio={sizeRatio} totalAmount={skillsImages.length}>
                            {skillsImages.map(image => (
                                <SkillImageStyled
                                    key={image}
                                    src={image}
                                    sizeRatio={sizeRatio}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />
                            ))}
                        </SkillsWrapper>
                    )}
                </AnimatePresence>
            </PersonWrapperStyled>
        </WrapperStyled>
    )
}