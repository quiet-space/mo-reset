import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App.tsx';
import { theme } from './theme/theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: 1.5;
    font-weight: ${({ theme }) => theme.fontWeights.normal};

    color-scheme: light;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: inherit;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }

  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    min-height: 100vh;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    line-height: 1.1;
    margin: 0;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    line-height: 1.2;
    margin: 0;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    line-height: 1.3;
    margin: 0;
  }

  p {
    margin: 0;
  }

  button {
    border-radius: ${({ theme }) => theme.borderRadius.md};
    border: 1px solid transparent;
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-family: inherit;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    cursor: pointer;
    transition: all 0.25s ease;
  }
  button:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
