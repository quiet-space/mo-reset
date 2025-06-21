import styled from 'styled-components';


const BrandCardContainer = styled.div`
width: 100%;
height: 100%;
`;

const BrandLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px;
  
  @media (min-width: 768px) {
    max-width: 90%;
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
  gap: 12px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: 0;
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

const PointText = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  margin: 40px 0;


  h1 {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    margin-right: 8px;
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
            <PointText>
                <h1>    
                모리셋
                </h1>
                <br />
                모낭플란트의 미래를 만들어갑니다
            </PointText>


            <BrandLayout>
                <ImageContainer>
                    <BrandImage src="/path/to/your/image.jpg" alt="Brand" />
                </ImageContainer>
                <ContentContainer>
                    <Title>스위스에서 시작된 탈모 재생의 표준</Title>
                    <Description>
                        모낭플란트는 오늘날 스위스를 대표하는 
                        <h3>
                        전문 탈모 재생 기술
                        </h3>
                        로 자리매김하고 있습니다. 
                        <br />
                        <br />
                        스위스에서는 탈모 전문 클리닉에 방문하면 
                        <h3>
                        최소 한 명 이상의 모낭플란트 전문가
                        </h3>
                        를 만날 수 있을 만큼 보편화된 직업군이며, 
                        이는 해당 분야의 기술력, 안전성, 효과성이 이미 국가적으로 검증되었음을 보여줍니다.
                        <br />
                        <br />
                        특히 스위스는 모낭 건강과 두피 재생 분야의 기술을 꾸준히 발전시키며, 
                        현재는 
                        <h3>
                        전 세계 탈모 재생 산업의 선두주자
                        </h3>
                        로서 확고한 위치를 차지하고 있습니다.
                    </Description>
                </ContentContainer>
            </BrandLayout>


            <BrandLayout>
                <ImageContainer>
                    <BrandImage src="/path/to/your/image.jpg" alt="Brand" />
                </ImageContainer>
                <ContentContainer>
                    <Title>한국, 새로운 모낭플란트 인재 양성의 시작점</Title>
                    <Description>
                    최근 대한민국에서도 탈모 인구의 증가와 함께, 탈모 개선의 중요성에 대한 사회적 인식이 빠르게 높아지고 있습니다. 
                    <br />
                    단순 미용 목적을 넘어 
                    <h3>
                    건강 관리와 삶의 질 향상을 위한 필수 분야
                    </h3>
                    로 자리잡고 있는 탈모 케어.  
                    이에 따라 전문적인 교육과 실습을 갖춘 모낭플란트 전문가의 양성이 더욱 절실한 시점입니다.
                    <br />
                    <br />
                    모리셋은 그 중심에서 
                    <h3>
                    모낭플란트 교육과 시스템 보급을 선도
                    </h3>하고 있습니다. 
                    이론 교육뿐 아니라 실무 중심의 커리큘럼을 바탕으로, 
                    현장에서 바로 적용 가능한 실질적인 전문 인력을 양성하여, 국내 두피·탈모 시장에 질적인 변화를 이끌고 있습니다.   
                    </Description>
                </ContentContainer>
            </BrandLayout>

            <BrandLayout>
                <ImageContainer>
                    <BrandImage src="/path/to/your/image.jpg" alt="Brand" />
                </ImageContainer>
                <ContentContainer>
                    <Title> 전 세대를 위한 두피 전문 프로그램</Title>
                    <Description>
                        모리셋의 모낭플란트는 
                        <h3>
                        학생부터 노년층까지, 
                        </h3>
                        두피 건강이 필요한 모든 이들을 위한 프로그램입니다. 
                        <br />
                        각기 다른 두피 상태, 연령, 생활습관에 맞춰 개인별 맞춤 솔루션을 제공하며, 
                        단순 관리가 아닌 
                        <h3>
                        과학적이고 체계적인 두피 재생 프로그램
                        </h3>
                        으로 발전하고 있습니다.

                        <br />
                        <br />

                        우리의 목표는, 단지 머리카락을 되살리는 것을 넘어, 
                        <h3>
                        자신감을 회복하고 건강한 삶을 회복하는 것
                        </h3>
                        입니다.
                    </Description>
                </ContentContainer>
            </BrandLayout>

            <BrandLayout>
                <ImageContainer>
                    <BrandImage src="/path/to/your/image.jpg" alt="Brand" />
                </ImageContainer>
                <ContentContainer>
                    <Title>탈모는 질병입니다, 모낭플란트는 해결책입니다</Title>
                    <Description>
                        현대 사회에서 탈모는 이제 단순한 외모 고민을 넘어, 
                        <h3>
                        정신적 스트레스와 사회적 위축을 유발하는 심각한 질환
                        </h3>
                        으로 다뤄지고 있습니다. 
                        그렇기 때문에, 
                        안전하고 효과적인 탈모 솔루션의 필요성
                        은 더욱 강조되고 있습니다.

                        <br />

                        모리셋의 모낭플란트 시스템은 모든 사람에게 
                        <h3>
                        아름답고 건강한 두피를 회복시켜주는 해결책
                        </h3>
                        이자, 
                        <h3>
                        탈모를 질병으로 인식하는 현대 사회에 반드시 필요한 대안
                        </h3>
                        입니다.
                        우리는 탈모로부터 자유로운 삶을 꿈꾸는 모든 이들에게, 신뢰와 과학, 그리고 확실한 결과를 약속드립니다.
                    </Description>
                </ContentContainer>
            </BrandLayout>


            <DescText>
                <h1>
                모리셋, 당신의 두피를 스위스과학으로 되살리다 
                </h1>
                <br />
                스위스 기술과 함께하는 탈모 재생 솔루션의 기준.
                <br />
                이제, 모리셋이 만들어갑니다.
            </DescText>
        </BrandCardContainer>
    );
};


