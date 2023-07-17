import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;    
    font-family: 'Spoqa Han Sans', 'Sans-serif';
    letter-spacing: -0.018em;
  }

  #root {
    background-color: var(--background_blue);
  }

  ul, li {
    list-style: none;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: var(--main_blue);
  }

  :root {
    --main_blue: rgba(0, 123, 233, 1);
    --background_blue: rgba(202, 233, 255, 1);
    --white: rgba(255, 255, 255, 1);
    --black: rgba(0, 0, 0, 1);
    --gray_700: rgba(147, 155, 146, 1);
    --gray: rgba(167, 175, 183, 1);
    --shadow: rgba(167, 175, 183, 0.3);
    --skyblue: rgba(238, 248, 255, 1);
    --text_blue: rgba(0, 123, 233, 0.8);
  }
`;

export default GlobalStyle;
