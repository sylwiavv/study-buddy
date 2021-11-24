import './fonts.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body,
  a, button {
    font-family: 'Montserrat', sans-serif;  
  }
`;
