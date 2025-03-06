import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #0a0a0a;
    --text-primary: #ffffff;
    --text-secondary: #a0a0a0;
    --accent: #3b82f6;
    --accent-hover: #2563eb;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: var(--text-primary);
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: var(--accent);
    transition: color 0.3s ease;

    &:hover {
      color: var(--accent-hover);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
  }
`;

export default GlobalStyles; 