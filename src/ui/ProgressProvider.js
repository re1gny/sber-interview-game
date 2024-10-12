import {ProgressContext, INITIAL_STATE} from "../contexts/ProgressContext";
import {useState} from "react";
import {NEXT_SCREEN} from "../constants/screens";

export function ProgressProvider(props) {
    const {children} = props;
    const urlParams = new URLSearchParams(window?.location?.search);
    const [screen, setScreen] = useState(urlParams.get('screen') || INITIAL_STATE.screen);
    const [gender, setGender] = useState(INITIAL_STATE.gender);
    const [education, setEducation] = useState(INITIAL_STATE.education);
    const [format, setFormat] = useState(INITIAL_STATE.format);
    const [skills, setSkills] = useState(INITIAL_STATE.skills);
    const [track, setTrack] = useState(INITIAL_STATE.track);
    const [points, setPoints] = useState(INITIAL_STATE.points);

    const next = () => {
        const nextScreen = NEXT_SCREEN[screen];

        if (nextScreen) {
            setScreen(nextScreen);
        }
    }

    const addPoints = () => {
        setPoints(prev => prev + 1);
    }

    const value = {
        screen,
        next,
        gender,
        setGender,
        education,
        setEducation,
        format,
        setFormat,
        skills,
        setSkills,
        track,
        setTrack,
        points,
        addPoints,
    };

    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    )
}