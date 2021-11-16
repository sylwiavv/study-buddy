import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  
  html,
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body,
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
