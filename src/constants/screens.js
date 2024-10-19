import IntroBackground from "../assets/images/intro-background.png";
import DefaultBackground from "../assets/images/default-background.png";
import IntroImage from "../assets/images/intro-image.png";
import Logo from "../assets/images/logo.svg";
import SelectorFemale from "../assets/images/selector-female.png";
import SelectorMale from "../assets/images/selector-male.png";
import Star from "../assets/images/star.png";
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

export const SCREEN_NAME = {
    Intro: 'INTRO',
    GenderSelector: 'GENDER_SELECTOR',
    EducationSelector: 'EDUCATION_SELECTOR',
    FormatSelector: 'FORMAT_SELECTOR',
    SkillsSelector: 'SKILLS_SELECTOR',
    TrackSelector: 'TRACK_SELECTOR',
    Interview: 'INTERVIEW',
    Final: 'FINAL',
};

export const SCREEN_BACKGROUND = {
    [SCREEN_NAME.Intro]: IntroBackground,
    [SCREEN_NAME.GenderSelector]: DefaultBackground,
    [SCREEN_NAME.EducationSelector]: DefaultBackground,
    [SCREEN_NAME.FormatSelector]: DefaultBackground,
    [SCREEN_NAME.SkillsSelector]: DefaultBackground,
    [SCREEN_NAME.TrackSelector]: DefaultBackground,
    [SCREEN_NAME.Interview]: DefaultBackground,
    [SCREEN_NAME.Final]: DefaultBackground,
};

export const NEXT_SCREEN = {
    [SCREEN_NAME.Intro]: SCREEN_NAME.GenderSelector,
    [SCREEN_NAME.GenderSelector]: SCREEN_NAME.EducationSelector,
    [SCREEN_NAME.EducationSelector]: SCREEN_NAME.FormatSelector,
    [SCREEN_NAME.FormatSelector]: SCREEN_NAME.SkillsSelector,
    [SCREEN_NAME.SkillsSelector]: SCREEN_NAME.TrackSelector,
    [SCREEN_NAME.TrackSelector]: SCREEN_NAME.Interview,
    [SCREEN_NAME.Interview]: SCREEN_NAME.Final,
    [SCREEN_NAME.Final]: null,
};

export const SCREEN_IMAGES = {
    [SCREEN_NAME.Intro]: [
        IntroBackground,
        IntroImage,
        Logo,
    ],
    [SCREEN_NAME.GenderSelector]: [
        Logo,
        DefaultBackground,
        SelectorFemale,
        SelectorMale,
        Star,
    ],
    [SCREEN_NAME.EducationSelector]: [
        Logo,
        DefaultBackground,
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image43,
    ],
    [SCREEN_NAME.FormatSelector]: [
        Logo,
        DefaultBackground,
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image43,
        Image8,
        Image9,
        Image10,
        Image11,
        Image12,
        Image13,
        Image14,
        Image15,
        Image16,
        Image17,
        Image18,
        Image19,
        Image20,
        Image21,
        Image22,
        Image23,
        Image24,
        Image25,
        Image26,
        Image27,
        Image28,
        Image29,
        Image30,
        Image31,
        Image32,
        Image33,
    ],
    [SCREEN_NAME.SkillsSelector]: [
        Logo,
        DefaultBackground,
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image43,
        Image8,
        Image9,
        Image10,
        Image11,
        Image12,
        Image13,
        Image14,
        Image15,
        Image16,
        Image17,
        Image18,
        Image19,
        Image20,
        Image21,
        Image22,
        Image23,
        Image24,
        Image25,
        Image26,
        Image27,
        Image28,
        Image29,
        Image30,
        Image31,
        Image32,
        Image33,
        Image34,
        Image35,
        Image36,
        Image37,
        Image38,
        Image39,
        Image40,
        Image41,
        Image42,
    ],
    [SCREEN_NAME.TrackSelector]: [
        Logo,
        DefaultBackground,
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image43,
        Image8,
        Image9,
        Image10,
        Image11,
        Image12,
        Image13,
        Image14,
        Image15,
        Image16,
        Image17,
        Image18,
        Image19,
        Image20,
        Image21,
        Image22,
        Image23,
        Image24,
        Image25,
        Image26,
        Image27,
        Image28,
        Image29,
        Image30,
        Image31,
        Image32,
        Image33,
        Image34,
        Image35,
        Image36,
        Image37,
        Image38,
        Image39,
        Image40,
        Image41,
        Image42,
        Image44,
        Image45,
        Image46,
        Image47,
        Image48,
    ],
    [SCREEN_NAME.Interview]: [
        Logo,
        DefaultBackground,
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image43,
        Image8,
        Image9,
        Image10,
        Image11,
        Image12,
        Image13,
        Image14,
        Image15,
        Image16,
        Image17,
        Image18,
        Image19,
        Image20,
        Image21,
        Image22,
        Image23,
        Image24,
        Image25,
        Image26,
        Image27,
        Image28,
        Image29,
        Image30,
        Image31,
        Image32,
        Image33,
        Image34,
        Image35,
        Image36,
        Image37,
        Image38,
        Image39,
        Image40,
        Image41,
        Image42,
        Image44,
        Image45,
        Image46,
        Image47,
        Image48,
    ],
    [SCREEN_NAME.Final]: [
        Logo,
        DefaultBackground,
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image43,
        Image8,
        Image9,
        Image10,
        Image11,
        Image12,
        Image13,
        Image14,
        Image15,
        Image16,
        Image17,
        Image18,
        Image19,
        Image20,
        Image21,
        Image22,
        Image23,
        Image24,
        Image25,
        Image26,
        Image27,
        Image28,
        Image29,
        Image30,
        Image31,
        Image32,
        Image33,
        Image34,
        Image35,
        Image36,
        Image37,
        Image38,
        Image39,
        Image40,
        Image41,
        Image42,
        Image44,
        Image45,
        Image46,
        Image47,
        Image48,
        Image49,
    ],
};