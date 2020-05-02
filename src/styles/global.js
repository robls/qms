import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    color: #444;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 0px 20px;
  }

`;
