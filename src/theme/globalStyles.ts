import { createGlobalStyle } from 'styled-components';
import { fonts } from '../fonts/fonts';

export const GlobalStyles = createGlobalStyle`
  ${fonts};

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
	  font-family: Montserrat, Verdana, Geneva, Tahoma, sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;
