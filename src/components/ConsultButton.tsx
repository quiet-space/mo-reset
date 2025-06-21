import styled from 'styled-components';

const ConsultButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const ConsultButton = styled.button`
  background: linear-gradient(135deg, #FEE500 0%, #FFD700 100%);
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: #3C1E1E;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    background: linear-gradient(135deg, #FFD700 0%, #FEE500 100%);
  }

  &:active {
    transform: translateY(-1px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const ButtonIcon = styled.span`
  margin-right: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

interface ConsultButtonProps {
  className?: string;
}

export const ConsultButtonComponent: React.FC<ConsultButtonProps> = ({ className }) => {
  const handleConsultClick = () => {
    window.open('https://pf.kakao.com/_bNapxj', '_blank', 'noopener,noreferrer');
  };

  return (
    <ConsultButtonContainer className={className}>
      <ConsultButton onClick={handleConsultClick}>
        <ButtonIcon>💬</ButtonIcon>
        상담하기
      </ConsultButton>
    </ConsultButtonContainer>
  );
};

export default ConsultButtonComponent; 