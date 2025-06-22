import { useEffect } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  padding-top: 60px;
`;

const Content = styled.div`
  max-width: 60vw;
  margin: 0 auto;
  padding: 60px 20px;
`;

const Section = styled.section`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #333;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const FlexContainer = styled.div`
display: flex;
align-items: center;
gap: 40px;
margin: 40px 0;

@media (max-width: 768px) {
  flex-direction: column;
}
`;

const ImageContainer = styled.div`
flex: 1;
max-width: 60%;

img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
`;

const TextContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

h3 {
  font-size: 24px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
}

p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 24px;
}
`;


export const Member = () => {
  useEffect(() => {
    // 페이지 진입 시 최상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Section>
          <FlexContainer>
            <ImageContainer>
              <img src="/src/assets/room.jpg" alt="모리셋 치료실" />
            </ImageContainer>
            <TextContainer>
              <h3>모리셋은 25년 간의 연구개발을 통해 
                <br />
                두피탈모 관리를 선도하는 브랜드입니다. </h3>

              <p>
              모리셋은 유럽의 역사 깊은 기초과학 연구를 기반으로 약물이나 두피케어에 의존하지 않는 혁신적 대체 시스템을 설계하였으며, 
              <br />
              모리셋의 특허기술은 쉽게 모방할 수 없는 독보적인 경쟁력을 가졌습니다. 
              <br />
              <br />
          두피시장의 성장세에 따라 수많은 두피 센터들이 생겨나고 있습니다. 
          
          <br />
          그러나 타 탈모관리와는 차원이 다르게 모리셋은 모든 결과를 오직 임상으로 증명합니다. 
          <br />
          <br />
          그렇기에 모리셋 창업은 고객들의 신뢰와 그로 인한 매출 보장을 장담하며, 
          <br />
          안정적인 사업을 위한 수익 창출 솔루션 및 지속적인 사후관리를 약속합니다.
              </p>
            </TextContainer>
          </FlexContainer>
        </Section>



        <Section>
          <SectionTitle>창업 세미나</SectionTitle>

           <ImageContainer>
              <img src="/src/assets/edu.png" alt="창업 세미나" />
            </ImageContainer>
        </Section>

        <Section>
          <SectionTitle>창업 절차</SectionTitle>

           <ImageContainer>
              <img src="/src/assets/step.png" alt="창업 절차" />
            </ImageContainer>
        </Section>

      </Content>
      <Footer />
    </Container>
  );
}; 