import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
  /* dark theme */
  &[data-theme='dark'] {
    --background-color: #0A0A11;
    --button-color: #F3F3F3;
    --button-hover-color: #161F37;
  }

  /* light theme */
  &[data-theme='light'] {
    --background-color: #F3F3F3;
    --button-color: #161F37;
    --button-hover-color: #F3F3F3;
  }
}
@font-face {
  font-family: 'Manrope';
  src:
    local('Manrope-Bold'),
    url('./src/assets/fonts/Manrope-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}


@font-face {
  font-family: 'Manrope';
  src: local('Manrope-SemiBold'), url('./src/assets/fonts/Manrope-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: local('Manrope-Regular'), url('./src/assets/fonts/Manrope-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: local('Manrope-Medium'), url('./src/assets/fonts/Manrope-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}


*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Manrope';
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: #111111;
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  cursor: pointer;
  color: inherit;
}

.error-message {
  font-size: 14px;
  color: red;
}
`;