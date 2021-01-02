import { createGlobalStyle } from 'styled-components';

import SofiaProBlack from './../assets/fonts/SofiaProBlack.woff';
import SofiaProMedium from './../assets/fonts/SofiaProMedium.woff';
import SofiaProMediumItalic from './../assets/fonts/SofiaProMedium-Italic.woff';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Sofia Pro';
        src: url(${SofiaProBlack}) format('woff');
        font-weight: bold;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Sofia Pro';
        src: url(${SofiaProMedium}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Sofia Pro';
        src: url(${SofiaProMediumItalic}) format('woff');
        font-weight: normal;
        font-style: italic;
    }

    body {
        text-align: center;
        background-color: ${(props) => props.theme.color.backgroundPrimary};
    }

    a {
        text-decoration: none;
    }
`