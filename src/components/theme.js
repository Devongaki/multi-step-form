import { createGlobalStyle } from "styled-components";


// Layout styles
export const container = createGlobalStyle`
    body {
        max-width:1440px; //Desktop width
        margin: 0 auto;
        padding: 0 20px;
        width: 100%;
    }
`;


// Colors 
export const Colors = {
    primaryMarineBlue: 'hsl(213, 96%, 18%)',
    primaryPurplishBlue: 'hsl(243, 100%, 62%)',
    primaryPastelBlue: 'hsl(228, 100%, 84%)',
    primaryLightBlue: 'hsl(206, 94%, 87%)',
    primaryStrawberryRed: 'hsl(354, 84%, 57%)',
    neutralCoolGray: 'hsl(231, 11%, 63%)',
    neutralLightGray: 'hsl(229, 24%, 87%)',
    neutralMagnolia: 'hsl(217, 100%, 97%)',
    neutralAlabaster: 'hsl(231, 100%, 99%)',
    neutralWhite: 'hsl(0, 0%, 100%)',
};