import { createGlobalStyle } from "styled-components";
import SatoshiVariableWOFF2 from "src/assets/fonts/Satoshi-Variable.woff2";
import SatoshiVariableWOFF from "src/assets/fonts/Satoshi-Variable.woff";
import SatoshiVariableTTF from "src/assets/fonts/Satoshi-Variable.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Satoshi';
    src: url(${SatoshiVariableWOFF2}) format('woff2'),
    url(${SatoshiVariableWOFF}) format('woff'),
    url(${SatoshiVariableTTF}) format('truetype');
    font-weight: 300 900;
    font-display: swap;
    font-style: normal;
  }
  
  html, body, #root {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: Satoshi, Helvetica, sans-serif;
    font-weight: 400;
    line-height: 24px;
    font-size: 16px;
  }
  
  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;
