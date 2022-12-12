import './fonts.css';
import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body,
  a, button {
    font-family: 'Montserrat', sans-serif;  
  }

  body {
    position: relative;
    padding: 0;
    margin: 0;
    ${(props) => props.isModalOpen && after}
  }
`;

const after = css`
  &:before {
    content: '';
    position: absolute;
    background-color: #04050d6b;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 100;
  }
`;
