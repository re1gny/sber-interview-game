import SBSansTextBold from "../assets/fonts/SB-Sans-Text-Bold.ttf";
import SBSansTextRegular from "../assets/fonts/SB-Sans-Text-Regular.ttf";
import InterRegular from "../assets/fonts/Inter-Regular.ttf";

export const GLOBAL_STYLE = {
    html: {
        height: '100%',
        overflow: 'hidden',
    },
    body: {
        height: '100%',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        backgroundColor: '#EDF2F5',
        overflow: 'hidden',
    },
    '#root': {
        height: '100%',
        overflow: 'hidden',
    },
    '*': {
        'box-sizing': 'border-box',
        'padding': 0,
        'margin': 0,
        fontFamily: `'SB Sans Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
    },
}

export const FONT_STYLES = [
    {
        "@font-face": {
            fontFamily: 'SB Sans Text',
            src: `url(${SBSansTextBold}) format('truetype')`,
            fontWeight: 700,
            fontStyle: 'normal',
        }
    },
    {
        "@font-face": {
            fontFamily: 'SB Sans Text',
            src: `url(${SBSansTextRegular}) format('truetype')`,
            fontWeight: 400,
            fontStyle: 'normal',
        }
    },
    {
        "@font-face": {
            fontFamily: 'Inter',
            src: `url(${InterRegular}) format('truetype')`,
            fontWeight: 400,
            fontStyle: 'normal',
        }
    },
];