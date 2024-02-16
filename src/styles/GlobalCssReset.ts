import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin and padding */
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

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul [role="list"],
ol [role="list"] {
  list-style: none;
}

/* Reset anchor styles */
a {
  text-decoration: none;
  color: inherit;
}

/* Remove blue highlight in iOS */
a:focus,
button:focus {
  outline: none;
}
`;
