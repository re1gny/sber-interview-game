import IntroBackground from "../assets/images/intro-background.png";
import DefaultBackground from "../assets/images/default-background.png";

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
