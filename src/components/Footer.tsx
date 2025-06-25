import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: auto;
  padding-bottom: 50px;
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
        <LogoImage src={'https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/brand_logo-3bgUmN7TKd2f0DzcDCf5vIfBKO1K9y.png'} alt="모리셋 브랜드 로고" />
        <FooterTextContainer>
          <FooterText>
          모리셋두피재생센터 | 책임자: 이숙 | 사업자등록번호: 661-27-01494 
          </FooterText>
          <FooterText>        
              전화번호: 02)-535-2033 | 주소: 서울특별시 서초구 서초중앙로 230 동화반포프라자 304호
          </FooterText>
        </FooterTextContainer>


        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <a href="https://pf.kakao.com/_bNapxj" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/kakao-TzmZd59xWdDvuUSl6YZ5rwy74QJp5S.png"
              alt="카카오톡 채널"
              style={{ width: '30px', height: '30px', objectFit: 'contain' }}
            />
          </a>
          <a href="https://www.instagram.com/mo_reset/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/insta-01XRiX9TX21xIwKBUpzQENckH2ZeZZ.png"
              alt="인스타그램"
              style={{ width: '30px', height: '30px', objectFit: 'contain' }}
            />
          </a>
          <a href="https://naver.me/xoH8tl8W" target="_blank" rel="noopener noreferrer">
            <img
              src="https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/naver-gil8IjE2cl6HB7CeOchn43IuyeEJLS.png"
              alt="네이버 플레이스"
              style={{ width: '30px', height: '30px', objectFit: 'contain' }}
            />
          </a>
        </div>
      </FooterContent>
    </FooterContainer>
  );
}; 