import { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto:300,400,500,700,900'],
  },
});

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    position: relative;
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  }
`;

export default GlobalStyles;
