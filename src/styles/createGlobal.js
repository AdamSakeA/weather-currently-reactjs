import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body, html {
        padding: 0;
        margin: 0;
        font-family: ${(props) => props.theme.font.title}
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
        color: white;
    } 
`;
