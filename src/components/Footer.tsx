import styled from 'styled-components';
import brandLogo from '../assets/brand_logo.png';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const LogoImage = styled.img`
  height: 60px;
  width: auto;
  object-fit: contain;
`;

const FooterTextContainer = styled.div`
  flex: 1;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.8;
  text-align: left;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoImage src={brandLogo} alt="모리셋 브랜드 로고" />
        <FooterTextContainer>
          <FooterText>
          모리셋두피재생센터 | 책임자: 이숙 | 사업자등록번호: 661-27-01494 
          </FooterText>
          <FooterText>        
              전화번호: 02)-535-2033 | 주소: 서울특별시 서초구 서초중앙로 230 동화반포프라자 304호
          </FooterText>
        </FooterTextContainer>
      </FooterContent>
    </FooterContainer>
  );
}; 