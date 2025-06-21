import React, { useEffect } from 'react';
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #666;
  text-align: center;
  margin-bottom: 60px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Section = styled.section`
  margin-bottom: 80px;
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

const Card = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const CardContent = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  padding: 10px 0;
  color: #555;
  position: relative;
  padding-left: 25px;

  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

const ContactSection = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 60px;
  border-radius: 12px;
  text-align: center;
`;

const ContactButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
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
        <Title>창업 및 교육</Title>
        <Subtitle>
          모리셋과 함께 성공적인 창업을 시작하세요.<br />
          체계적인 교육 시스템과 지속적인 지원을 제공합니다.
        </Subtitle>

        <Section>
          <SectionTitle>창업 지원 프로그램</SectionTitle>
          <CardGrid>
            <Card>
              <CardTitle>초기 창업 지원</CardTitle>
              <CardContent>
                창업 초기 단계에서 필요한 모든 것을 지원합니다. 
                전문적인 컨설팅과 함께 성공적인 창업을 도와드립니다.
              </CardContent>
              <FeatureList>
                <FeatureItem>창업 컨설팅 제공</FeatureItem>
                <FeatureItem>사업계획서 작성 지원</FeatureItem>
                <FeatureItem>자금 조달 방법 안내</FeatureItem>
                <FeatureItem>법적 절차 지원</FeatureItem>
              </FeatureList>
            </Card>

            <Card>
              <CardTitle>교육 프로그램</CardTitle>
              <CardContent>
                체계적인 교육 프로그램을 통해 필요한 모든 기술과 
                노하우를 습득할 수 있습니다.
              </CardContent>
              <FeatureList>
                <FeatureItem>기술 교육 과정</FeatureItem>
                <FeatureItem>운영 노하우 전수</FeatureItem>
                <FeatureItem>마케팅 전략 교육</FeatureItem>
                <FeatureItem>고객 관리 시스템</FeatureItem>
              </FeatureList>
            </Card>

            <Card>
              <CardTitle>지속적 지원</CardTitle>
              <CardContent>
                창업 후에도 지속적인 지원을 통해 안정적인 
                사업 운영을 도와드립니다.
              </CardContent>
              <FeatureList>
                <FeatureItem>정기 컨설팅 제공</FeatureItem>
                <FeatureItem>문제 해결 지원</FeatureItem>
                <FeatureItem>네트워킹 기회 제공</FeatureItem>
                <FeatureItem>신기술 업데이트</FeatureItem>
              </FeatureList>
            </Card>
          </CardGrid>
        </Section>

        <Section>
          <SectionTitle>교육 과정</SectionTitle>
          <CardGrid>
            <Card>
              <CardTitle>기초 과정 (2주)</CardTitle>
              <CardContent>
                창업에 필요한 기본 지식과 기술을 습득하는 과정입니다.
              </CardContent>
              <FeatureList>
                <FeatureItem>업계 동향 분석</FeatureItem>
                <FeatureItem>기본 기술 습득</FeatureItem>
                <FeatureItem>시장 조사 방법</FeatureItem>
                <FeatureItem>사업 모델 이해</FeatureItem>
              </FeatureList>
            </Card>

            <Card>
              <CardTitle>심화 과정 (4주)</CardTitle>
              <CardContent>
                실제 창업에 필요한 심화 기술과 운영 노하우를 
                학습하는 과정입니다.
              </CardContent>
              <FeatureList>
                <FeatureItem>고급 기술 교육</FeatureItem>
                <FeatureItem>운영 시스템 구축</FeatureItem>
                <FeatureItem>마케팅 전략 수립</FeatureItem>
                <FeatureItem>재무 관리 교육</FeatureItem>
              </FeatureList>
            </Card>

            <Card>
              <CardTitle>실습 과정 (2주)</CardTitle>
              <CardContent>
                실제 환경에서 실습을 통해 배운 내용을 
                적용해보는 과정입니다.
              </CardContent>
              <FeatureList>
                <FeatureItem>실제 운영 체험</FeatureItem>
                <FeatureItem>고객 응대 실습</FeatureItem>
                <FeatureItem>문제 해결 실습</FeatureItem>
                <FeatureItem>최종 평가 및 피드백</FeatureItem>
              </FeatureList>
            </Card>
          </CardGrid>
        </Section>

        <ContactSection>
          <SectionTitle>창업 문의</SectionTitle>
          <Subtitle>
            창업에 관심이 있으시거나 궁금한 점이 있으시면 언제든 연락주세요.<br />
            전문 상담사가 상세히 안내해드립니다.
          </Subtitle>
          <ContactButton onClick={() => window.location.href = '/inquiry'}>
            창업 상담 신청하기
          </ContactButton>
        </ContactSection>
      </Content>
      <Footer />
    </Container>
  );
}; 