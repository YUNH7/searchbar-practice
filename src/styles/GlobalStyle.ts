import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;    
  }

  ul, li {
    list-style: none;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: #007BE9;
  }
`;

export default GlobalStyle;
