import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}



body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
figure,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

ul [role="list"],
ol [role="list"] {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

a:focus,
button:focus {
  outline: none;
}
`;
