import { createGlobalStyle } from "styled-components";

import githubBackground from "../assets/github-background.svg"

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-white-medium: #F0F0F5;
    --color-green-light: #04D361;
    --color-white: #FFFFFF;
    --color-black-medium: #3A3A3A;
    --color-gray-medium: #A8A8B3;
  }

  * {
    padding: 0;
    margin: 0 auto;
    max-width: 80rem;
    padding: 2.5rem 1.2rem;
    
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  body {
    background: var(--color-white-medium) url(${githubBackground}) no-repeat 70% top;
  }

  button {
    cursor: pointer;
  }
`;