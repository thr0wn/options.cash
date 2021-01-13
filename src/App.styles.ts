import styled, { createGlobalStyle } from "styled-components";

export const GlobalAppStyles = createGlobalStyle`
    @use "~inter-ui/default" with (
        $inter-font-display: swap,
        $inter-font-path: '~inter-ui/Inter (web)'
    );
    @use "~inter-ui/variable" with (
        $inter-font-display: swap,
        $inter-font-path: '~inter-ui/Inter (web)'
    );
    @include default.all;
    @include variable.all;
    
    html { font-family: "Inter", "system-ui"; }
    
    @supports (font-variation-settings: normal) {
        html { font-family: "Inter var", "system-ui"; }
    }

    body,html {
        background: black;
        margin: 0;
        padding: 0;
        color: white;
        max-width: 100vw;
        overflow-x: hidden;
    }
    * {
        box-sizing: border-box;
    }
`;

export const StyledApp = styled.div``;
