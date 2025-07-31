import { createGlobalStyle } from "styled-components";
import Pointer from "../images/pointer2.svg";

const GlobalStyle = createGlobalStyle`
  * {
    cursor: url(${Pointer}) 0 0, pointer;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
`;

export default GlobalStyle;
