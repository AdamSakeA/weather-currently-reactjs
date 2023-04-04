import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body, html {
        padding: 0;
        margin: 0;
        font-family: ${(props) => props.theme.font.inter}
    }

    body {
        background-color: ${(props) => props.theme.colors.primary};
        color: white;
    } 
`;
