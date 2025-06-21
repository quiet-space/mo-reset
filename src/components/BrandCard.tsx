import styled from 'styled-components';


const BrandCardContainer = styled.div`
width: 100%;
height: 100%;

padding: 40px 0;

`;

const BrandLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding-bottom: 50px;

  
  @media (min-width: 768px) {
    max-width: 60%;
    margin: 0 auto;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 40%;
`;

const BrandImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: 0;

  h2 {
    margin-left:8px;
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    position: relative;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 60%;
      background-color: ${({ theme }) => `${theme.colors.primary}80`};
      z-index: -1;
    }
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};
  margin: 0;
  text-align: left;

  h3 {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin: 0;
  }
`;


const DescText = styled.p`
   font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  margin: 40px 0;


  h1 {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    margin-bottom: 8px;
  }
`;


export const BrandCard = () => { 
    return (
        <BrandCardContainer>

            <DescText>
                <h1>
                모리셋, 당신의 두피를 스위스과학으로 되살리다 
                </h1>
                <br />
                스위스 기술과 함께하는 탈모 재생 솔루션의 기준.
                <br />
                이제, 모리셋이 만들어갑니다.
            </DescText>


            <BrandLayout>
                <ImageContainer>
                    <BrandImage src="/src/assets/doc.jpg" alt="Brand" />
                </ImageContainer>
                <ContentContainer>
                    <Title>이보영 대표원장</Title>
                    <Description>
                    모리셋을 시작했을 당시 한국은 두피 관리 불모지였습니다. 
                    <br />
                    <br />
                    암 환자들이 사용할 수 있는 안전한 제품만을 고집 해왔던 모리셋은 
                    엄격한 심사 과정 끝에 고품격 안전 국가인 덴마크에 본사를 둔 메조스킨라인을 선택하였습니다. 
                    <br />
                    <br />
                    모리셋의 집념이 메조스킨라인을 만나 아시아 총판을 통해 프리미엄 제품과 특허 기술을 국내에 런칭하였으며, 탈모 불모지였던 한국에 오아시스와 같은 브랜드가 되었습니다. 
                    <br />
                    <br />

                      · 모낭플란트 개발자 및 기술 보유자
                      <br />
                      · 스위스컬러 아시아 총판
                      <br />
                      · 메조스킨라인 아시아 총판
                      <br />
                      · 국내 최초 스위스컬러 국제강사
                    </Description>
                </ContentContainer>
            </BrandLayout>


            <BrandLayout>
                <ImageContainer>
                    <BrandImage src="/src/assets/lab1.jpg" alt="Brand" />
                </ImageContainer>
                <ContentContainer>
                    <Title>오직, 
                      <h2>
                      모리셋 모낭플란트
                      </h2>
                      </Title>
                    <Description>
                    
                    모리셋은 25년간 누적된 메조스킨라인의 연구와 두피 개선 단계를 기반으로 '모낭플란트'를 개발하였으며, 
                    <br />
                    필요한 모든 관리기간 및 단계 또한 과학적으로 설계되었습니다. 
                    <br />
                    <br />
                    모리셋의 혁신적 기술력과 메조스킨라인의 제품이 만나 탄생한 모낭플란트는 두피 계의 완전한 솔루션임을 자부합니다. 
                    </Description>
                </ContentContainer>
            </BrandLayout>

            <BrandLayout>
                <ImageContainer>
                    <BrandImage src="/src/assets/cell.jpg" alt="Brand" />
                </ImageContainer>
                <ContentContainer>
                    <Title>모리셋 특허기술의 핵심,
                      <h2>
                    쏘팔메토 줄기세포
                      </h2>
                    </Title>
                    <Description>
                    모리셋의 핵심성분은 쏘팔메토 줄기세포입니다. 
                    <br />    
                    <br />
                    대서양 해안에서 자생하는 쏘팔메토는 탈모에 효과적인 식물성 줄기세포입니다. 모리셋은 유럽과 미국에서 보편화되어 있는 방식 그대로 쏘팔메토를 농축하여 국소 부위에 투여해 탈모의 원인이 되는 DHT 호르몬을 표적관리 및 생성억제합니다.    
                    <br />
                    <br />
                    모리셋의 모낭플란트는 두피 건강을 위한 완전한 솔루션입니다. 
                    <br />
                    <br />
                    모리셋의 모낭플란트는 두피 건강을 위한 완전한 솔루션입니다. 
                    </Description>
                </ContentContainer>
            </BrandLayout>

           
        </BrandCardContainer>
    );
};


