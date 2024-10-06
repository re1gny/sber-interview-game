import {createContext} from "react";
import {SCREEN_NAME} from "../constants/screens";

export const INITIAL_STATE = {
    screen: SCREEN_NAME.Intro,
    gender: null,
    education: null,
    format: null,
    skills: [],
    track: null,
};

export const ProgressContext = createContext(INITIAL_STATE);