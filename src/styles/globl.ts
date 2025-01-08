import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  :root {
    --color-white-medium: #F0F0F5;
    --color-green-light: #04D361;
    --color-white: #FFFFFF;
    --color-black-medium: #3A3A3A;
    --color-gray-medium: #A8A8B3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: var(--color-white-medium);
  }
`;