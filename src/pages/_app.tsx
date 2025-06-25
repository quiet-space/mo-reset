import type { AppProps } from 'next/app';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '@/theme/theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    min-height: 100vh;
  }
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </StyledThemeProvider>
  );
} 