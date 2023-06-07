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
    scroll-behavior: smooth;
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  }
  
   body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #111;
    border-radius: 4px;
  }

  body::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 4px;
  }
`;

export default GlobalStyles;
