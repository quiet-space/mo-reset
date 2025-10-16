import { PageTitle } from "../components/PageTitle";
import styled from "styled-components";

const TextWrap = styled.div`
  margin: 0 auto;
  width: 60%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const SubTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2;
  text-align: left;
  margin: 2rem 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 1.5rem 0 0.8rem 0;
  }
`;
const Content = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const CoreValueWrap = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  /* 풀-블리드: 레이아웃의 패딩/중앙정렬을 무시하고 화면 너비로 확장 */
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  /* 주변과 동일한 내부 여백 유지 */
  padding: var(--spacing-6) var(--spacing-8);

  background-color: #ffffff;

  padding-bottom: 4rem;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    padding: 2rem 1rem 2rem 1rem;
  }
`;

const SectionTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2;

  margin: 2rem 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const LineWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;
const ValueLabel = styled.p`
  font-size: 3rem;
  font-weight: 700;
  line-height: 2;
  color: #f7c84c;

  width: 50%;
  max-width: 50%;
  min-width: 50%;

  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    justify-content: center;
    line-height: 1.5;
  }
`;

const ValueContent = styled.p`
  color: #333;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.6;
  text-align: left;
  max-width: 50%;
  white-space: nowrap;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 100%;
    text-align: center;
    white-space: normal;
    margin-top: 0;
  }
`;

const ColorWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin: 0 auto;
  margin-bottom: 7rem;
  gap: 2rem;

  width: 80%;

  @media (max-width: 768px) {
    width: 95%;
    margin-bottom: 3rem;
  }
`;

const ColorChipContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 1rem;

  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }
`;

const ColorChipWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

const ColorCircle = styled.div`
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  border: 2px solid white;
  background-color: ${({ $color }) => $color};
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ $color }) =>
    $color === "#1800AD" ? "white" : "var(--color-text)"};
  font-weight: 600;
  letter-spacing: 0.1em;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    font-size: 0.9rem;
  }
`;

const ColorCircleTitle = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ColorCircleText = styled.p`
  max-width: 50%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6;

  @media (max-width: 768px) {
    max-width: 90%;
    font-size: 1rem;
  }
`;

export const BrandMissions = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <PageTitle subtitle="경영이념" />
      <TextWrap>
        <div>
          <SubTitle>경영 철학</SubTitle>

          <Content>
            모든 이들이 건강하고 아름다운 모발로 당당한 자신감을 되찾을 수
            있도록, 세계적인 의료진의 전문성과 북유럽의 최첨단 기술을 바탕으로
            한국형 맞춤 모발 솔루션을 제공합니다.
          </Content>
        </div>

        <div>
          <SubTitle>사명</SubTitle>
          <Content>
            모발은 단순한 외모가 아닌 자신감의 근원입니다. 우리는 과학적 접근과
            따뜻한 마음으로 고객 한 분 한 분의 소중한 변화를 함께 만들어갑니다.
          </Content>
        </div>

        <div>
          <SubTitle>비전</SubTitle>
          <Content>
            모발 케어의 새로운 패러다임을 제시하며, 국내 최고의 전문 모발 관리
            브랜드로 성장하여 고객의 삶의 질 향상에 기여합니다.
          </Content>
        </div>
      </TextWrap>

      <CoreValueWrap>
        <SectionTitle>핵심 가치</SectionTitle>

        <LineWrap>
          <ValueLabel>Healing</ValueLabel>
          <ValueContent>치유와 회복을 통한 새로운 시작</ValueContent>
        </LineWrap>

        <LineWrap>
          <ValueLabel>Optimism</ValueLabel>
          <ValueContent>긍정적 변화에 대한 확신</ValueContent>
        </LineWrap>

        <LineWrap>
          <ValueLabel>Professionalism</ValueLabel>
          <ValueContent>세계적인 의료진의 전문성</ValueContent>
        </LineWrap>

        <LineWrap>
          <ValueLabel>Excellence</ValueLabel>
          <ValueContent>최고 품질의 서비스 추구</ValueContent>
        </LineWrap>
      </CoreValueWrap>

      <ColorWrap>
        <SectionTitle>핵심 컬러</SectionTitle>

        <Content>
          모발플란트의 심벌마크는 생명력 넘치는 모발의 자연스러운 흐름을 기초로
          하여 시각적인 이해를 돕고 건강한 두피와 모발의 "재생"과 "희망"을
          디자인에 적용시켜 전문 케어에 대한 신뢰감과 혁신성을
          스토리텔링화했습니다.
          <br />
          <br />
          모발은 개인의 정체성과 자신감을 표현하는 중요한 요소로, 단순한 외적
          아름다움을 넘어 내면의 건강과 활력을 반영하는 거울과 같습니다.
          모발에는 그 사람의 삶의 이야기가 담겨있다는 말처럼, 모발플랜트에게
          모발 관리란 아름다운 헤어스타일을 위한 관리를 넘어 개인의 자존감과
          삶의 질까지 향상시키는 새로운 분야의 전문 모발 케어로써, 의료진의
          전문성과 최첨단 기술을 한국형 맞춤 모발 솔루션으로 대중화함에 그
          목적이 있습니다.
        </Content>

        <ColorChipContainer>
          <ColorChipWrap>
            <ColorCircle $color="#F7C84C">#F7C84C</ColorCircle>
            <ColorCircleTitle>Golden Yellow</ColorCircleTitle>
            <ColorCircleText>
              희망, 활력, 따뜻함, 긍정, 새로운 시작 생명력, 빛남, 성장
            </ColorCircleText>
          </ColorChipWrap>

          <ColorChipWrap>
            <ColorCircle $color="#1800AD">#1800AD</ColorCircle>
            <ColorCircleTitle>Deep Blue</ColorCircleTitle>
            <ColorCircleText>
              회복, 치유, 혁신, 신뢰, 전문성, 안전 품질, 지속가능성, 사명감,
              헌신
            </ColorCircleText>
          </ColorChipWrap>

          <ColorChipWrap>
            <ColorCircle $color="#EFEFEF">#EFEFEF</ColorCircle>
            <ColorCircleTitle>Pure White</ColorCircleTitle>
            <ColorCircleText>
              순수함, 깔끔함, 신뢰, 전문성, 새출발 무한가능성, 투명함, 완성
            </ColorCircleText>
          </ColorChipWrap>
        </ColorChipContainer>
      </ColorWrap>
    </div>
  );
};
