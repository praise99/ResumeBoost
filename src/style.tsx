import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    margin:0;
    background-color: #1C1C1C;
    height:100vh;
    overflow-x:hidden ;
    scroll-behavior: smooth;
    font-family:"Athletics";
 
  }
  html{
  scroll-behavior: smooth;
}
/* Athletics */
@font-face {
  font-family: "Athletics";
  font-weight: 700;
  src: url("./assets/fonts/Athletics\ Bold.otf");
}
@font-face {
  font-family: "Athletics";
  font-weight: 600;
  src: url("./assets/fonts/Athletics\ Medium.otf");
}
@font-face {
  font-family: "Athletics";
  src: url("./assets/fonts/Athletics\ Regular.otf");
  font-weight: 400;
  font-style: normal;
}
`;
