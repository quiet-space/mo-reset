import styled from 'styled-components';

// Props를 받는 styled component 예제
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-family: ${({ theme }) => theme.fonts.body};
  transition: all 0.2s ease;

  ${({ variant = 'primary', theme }) =>
    variant === 'primary'
      ? `
        background-color: ${theme.colors.primary};
        color: white;
        &:hover {
          background-color: ${theme.colors.primaryHover};
        }
      `
      : `
        background-color: transparent;
        color: ${theme.colors.primary};
        border: 2px solid ${theme.colors.primary};
        &:hover {
          background-color: ${theme.colors.primary};
          color: white;
        }
      `}

  ${({ size = 'medium', theme }) => {
    switch (size) {
      case 'small':
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.fontSizes.sm};
        `;
      case 'large':
        return `
          padding: ${theme.spacing.md} ${theme.spacing.xl};
          font-size: ${theme.fontSizes.lg};
        `;
      default:
        return `
          padding: ${theme.spacing.md} ${theme.spacing.xl};
          font-size: ${theme.fontSizes.md};
        `;
    }
  }}
`;

const Card = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  color: white;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

const Title = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const Description = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  opacity: 0.9;
  line-height: 1.6;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

const StyledExample = () => {
  return (
    <Card>
      <Title>Styled Components 예제</Title>
      <Description>
        이 컴포넌트는 styled-components를 사용하여 스타일링되었습니다. Props를
        통해 다양한 variant와 size를 지원하며, 테마 시스템을 활용합니다.
      </Description>
      <ButtonGroup>
        <StyledButton variant='primary' size='small'>
          작은 버튼
        </StyledButton>
        <StyledButton variant='primary' size='medium'>
          기본 버튼
        </StyledButton>
        <StyledButton variant='primary' size='large'>
          큰 버튼
        </StyledButton>
        <StyledButton variant='secondary' size='medium'>
          보조 버튼
        </StyledButton>
      </ButtonGroup>
    </Card>
  );
};

export default StyledExample;
