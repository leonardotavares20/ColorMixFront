import { createGlobalStyle } from "styled-components";
import Unineue from "../Fonts/UNINEUEREGULAR.OTF";
import UnineueBold from "../Fonts/UNINEUEBOLD.OTF";
import UnineueLight from "../Fonts/UNINEUELIGHT.OTF";
import UnineueBlack from "../Fonts/UNINEUEBLACK.OTF";
import UnineueItalic from "../Fonts/UNINEUEBOLD-ITALIC.OTF";

const FontGlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Unineue';
    src: url(${Unineue}) format('truetype'),
    url(${UnineueBold}) format('truetype');
  }

  @font-face {
    font-family: 'Unineue Light';
    src: url(${UnineueLight}) format('truetype');
  }

  @font-face {
    font-family: 'Unineue Black';
    src: url(${UnineueBlack}) format('truetype'),
    url(${UnineueBlack}) format('truetype');
  }

  @font-face {
    font-family: 'Unineue Bold';
    src: url(${UnineueBold}) format('truetype');
  }

  @font-face {
    font-family: 'Unineue Italic';
    src: url(${UnineueItalic}) format('opentype'),
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }

  body {
    background-color: #fff1f1eb;
    font-size: 14px;
    font-family: 'Roboto';   
    position: relative; 
    overflow-x: hidden;
  }

   a {
    text-decoration: none;
    cursor: pointer;
   }
`;

export default FontGlobalStyles;
