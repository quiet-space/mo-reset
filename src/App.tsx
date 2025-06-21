import { useState } from 'react';
import styled from 'styled-components';

import StyledExample from './components/StyledExample';
import { Header } from './components/Header';
import { MainTopCard } from './components/MainTopCard';
  
const AppContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  line-height: 1.1;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const Card = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
`;

const Button = styled.button`
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-2px);
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

const Code = styled.code`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const ReadTheDocs = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppContainer>
      <Header />
      <MainTopCard />

      <MainContent>
        <Title>Vite + React + Styled Components</Title>
        <Card>
          <Button onClick={() => setCount(count => count + 1)}>
            count is {count}
          </Button>
          <p>
            Edit <Code>src/App.tsx</Code> and save to test HMR
          </p>
        </Card>
        <StyledExample />
        <ReadTheDocs>
          Click on the Vite and React logos to learn more
        </ReadTheDocs>
      </MainContent>
    </AppContainer>
  );
}

export default App;
