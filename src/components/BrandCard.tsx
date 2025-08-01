'use client'

import styled from 'styled-components';
import { useState, useEffect } from 'react';


const BrandCardContainer = styled.div`
width: 100%;
height: 100%;

padding: 40px 0 120px;
`;

const BrandLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  padding-bottom: 200px;
  
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
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: 0;

  h2 {
    margin-left:8px;
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
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
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  text-align: left;

  h3 {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
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
    const [activeSection, setActiveSection] = useState('brand-info-1');

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 150, behavior: 'smooth' });
        }
    };

    return (
        <BrandCardContainer
        style={{
          position: 'relative',
        }}
        >
            <DescText
            id="brand-card-container"
            >
                <h1>
                모리셋, 당신의 두피를 스위스과학으로 되살리다 
                </h1>
                <br />
                스위스 기술과 함께하는 탈모 재생 솔루션의 기준.
                <br />
                이제, 모리셋이 만들어갑니다.
            </DescText>

                 <div 
                  style={{
                    position: 'sticky',
                    top: '60px',
                    zIndex: '100',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    padding: '20px 0',
                    backgroundColor: '#f1f3f5',
                    margin: '0',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}>
              <button
                onClick={() => scrollToSection('brand-info-1')}
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '8px',
                  background: activeSection === 'brand-1' ? '#007bff' : '#f1f3f5',
                  color: activeSection === 'brand-1' ? 'white' : '#495057',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: activeSection === 'brand-1' ? 'bold' : 'normal',
                }}
              >
                이보영 대표원장
              </button>
              <button
                onClick={() => scrollToSection('brand-info-2')}
                style={{
                  padding: '10px 20px', 
                  border: 'none',
                  borderRadius: '8px',
                  background: activeSection === 'brand-2' ? '#007bff' : '#f1f3f5',
                  color: activeSection === 'brand-2' ? 'white' : '#495057',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: activeSection === 'brand-2' ? 'bold' : 'normal',
                }}
              >
                모리셋 모낭플란트
              </button>
              <button
                onClick={() => scrollToSection('brand-info-3')}
                style={{
                  padding: '10px 20px',
                  border: 'none', 
                  borderRadius: '8px',
                  background: activeSection === 'brand-3' ? '#007bff' : '#f1f3f5',
                  color: activeSection === 'brand-3' ? 'white' : '#495057',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: activeSection === 'brand-3' ? 'bold' : 'normal',
                }}
              >
                쏘팔메토 줄기세포
              </button>
              <button
                onClick={() => scrollToSection('brand-info-4')}
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '8px', 
                  background: activeSection === 'brand-4' ? '#007bff' : '#f1f3f5',
                  color: activeSection === 'brand-4' ? 'white' : '#495057',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: activeSection === 'brand-4' ? 'bold' : 'normal',
                }}
              >
                우리의 가치
              </button>
              <button
                onClick={() => scrollToSection('brand-info-5')}
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '8px', 
                  background: activeSection === 'brand-4' ? '#007bff' : '#f1f3f5',
                  color: activeSection === 'brand-4' ? 'white' : '#495057',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: activeSection === 'brand-4' ? 'bold' : 'normal',
                }}
              >
                환자 후기
              </button>
              <button
                onClick={() => scrollToSection('brand-info-6')}
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '8px', 
                  background: activeSection === 'brand-4' ? '#007bff' : '#f1f3f5',
                  color: activeSection === 'brand-4' ? 'white' : '#495057',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: activeSection === 'brand-4' ? 'bold' : 'normal',
                }}
              >
                세계 총판 지도 & 국내 지점 지도
              </button>
            </div>


            <BrandLayout id='brand-info-1'>
                <ImageContainer>
                    <BrandImage src="https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/doc-60UdJXHVqd5vyCqZXzO0GPZ4B8A2cw.jpg" alt="Brand" />
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


            <BrandLayout id='brand-info-2'>
                <ImageContainer>
                    <BrandImage src="https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/br-left1-uLBSAZDaUMDtyHJDEpneiaN0kwyLIX.png" alt="Brand" />
                </ImageContainer>
                <ContentContainer>
                    <Title>오직, 
                      <h2>
                      모리셋 모낭플란트
                      </h2>
                      </Title>


                    <Description>
                    <p>
                      모리셋은 25년간 누적된 메조스킨라인의 연구와 두피 개선 단계를 기반으로 '모낭플란트'를 개발하였으며, 
                      <br />
                      필요한 모든 관리기간 및 단계 또한 과학적으로 설계되었습니다. 
                    </p>
                    <br />
                    Only, Morisette Follicular Implant
                    Moriset developed 'Follic Implant' based on 35 years of accumulated Swiss stem cell research and scalp improvement stages,
                    <br />
                    and all necessary management periods and stages were also scientifically designed.
                    <br />
                    <br />
                    <p>
                    모리셋의 혁신적 기술력과 메조스킨라인의 제품이 만나 탄생한 모낭플란트는 두피 계의 완전한 솔루션임을 자부합니다. 
                    </p>
                    <br />
                    Moriset's innovative technology and Swiss stem cells meet to create Follicular Implant, which is proud to be a complete solution for the scalp.
                    </Description>
                    <br />
                    <BrandImage 
                    style={{
                        width: '100%',
                        height: '90%',
                        objectFit: 'cover',
                    }}
                    src="https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/br-right1-USUShbM6XB8NKL3gx0qdSP7imHJlAw.png" alt="Brand" />
                </ContentContainer>
            </BrandLayout>

            <BrandLayout id='brand-info-3'>
                <ImageContainer>
                    <BrandImage src="https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/br2-3-GqmI7kdzF8YHIkak9fViAp0P9cjrji.png" alt="Brand" />
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
            

            <BrandLayout id='brand-info-4' 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
            <ContentContainer>
                <Title>
                  <h2>
                    우리의 가치
                  </h2>
                </Title>
              </ContentContainer>
              <ContentContainer style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '20px',
              }}>
                <Description   
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  }}>
                    <BrandImage 
                    style={{
                      width: '100%',
                      objectFit: 'cover',
                    }}
                    src="https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/br2-2-ZujU9pgkFGl92PjgLiF4cnCEWglrPe.png" alt="Brand" />
                      <p>
                        혁신
                      </p>
                       당사의 연구 개발 부서는 혁신적인 미적 솔루션을 개발할 수 있는 새로운 기술(예: 특허받은 CHAC 기술)을 개발하는 데 전념하고 있습니다.
                  </Description>
                  <Description
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                  }}>
                  <BrandImage 
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  src="https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/br2-1-4vdj5FsOavPkHU6Req0TaBOBSU7A1H.png" alt="Brand" />
                    <p>우수
                    </p>
                      품질, 안전, 효율성은 제품 개발 프로세스를 안내합니다. Suisselle의 제품은 환자의 안전과 피부 건강을 염두에 두고 설계되었으며
                      화장품 및 의료 기기 제조의 최고 품질 기준(ISO 22716, ISO 13485 및 ISO 9001 및 GMP)에 따라 제조됩니다.
                  </Description>
                  <Description
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                  }}> 
                  <BrandImage 
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  src="https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/value-hhPWrdwGcVFlhLw0HpOn16cyE8LrYu.jpg" alt="Brand" />
                  <p>
                    고객 중심
                  </p>
                    의사와 환자의 만족은 완벽을 향한 노력의 주요 목표입니다.
                  </Description>
              </ContentContainer>
            </BrandLayout>

            <BrandLayout
            id='brand-info-5'
                    style={{
                      marginTop: '30px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                  }}
            >
                  <Title>
                    <h2>
                      모리셋 모낭플란트 환자 후기 
                    </h2>
                  </Title>
                    <div style={{ display: 'flex', gap: '70px', width: '100%', justifyContent: 'center' }}>
                      <video 
                        controls
                        muted={false}
                        style={{ height: '50%', borderRadius: '12px' }}
                      >
                        <source src="https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/review1-7QbW1npXwRTcI70Di4p3jxiKqf6DD1.mp4" type="video/mp4" />
                      </video>
                      <video
                        controls
                        muted={false}
                        style={{ height: '50%', borderRadius: '12px' }}
                      >
                        <source src="https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/review2-NMaEbqE8hlJMi7oSlHWYl27hFJQXcY.mp4" type="video/mp4" />
                      </video>
                    </div>

            </BrandLayout>
            <BrandLayout
            id='brand-info-6'
            style={{
                      marginTop: '30px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                  }}> 
            <Title style={{ marginTop: '40px' }}  >
                    <h2>
                      세계 총판 지도 & 국내 지점 지도 
                    </h2>
                  </Title>
                  <BrandImage 
                    src="https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/carousel5-6k9h6ZNOZmoFKPleF5xuYn2OdAN2b8.png"
                  />  
            </BrandLayout>
           
        </BrandCardContainer>
    );
};


