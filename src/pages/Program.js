import styled from "styled-components";
import { PageTitle } from "../components/PageTitle";
import program_1 from "../img/program_1.png";
import program_2 from "../img/program_2.png";
import product_1 from "../img/product_1.png";
import product_2 from "../img/product_2.png";
import product_4 from "../img/product_4.png";
import product_5 from "../img/product_5.JPG";
import product_6 from "../img/product_6.png";
import product_7 from "../img/product_7.png";
import dim_background from "../img/dim_background.png";

const ProgramCard = styled.div`
  background-image: url(${({ $img }) => $img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  min-width: 70vw;

  /* 이미지 원본 비율에 맞춘 최소 높이 설정 */
  min-height: ${({ $img }) => {
    // program_1.png의 경우 (예: 1920x1080 비율)
    if ($img.includes("program_1")) {
      return "92.25vw"; // 16:9 비율 (1080/1920 * 100)
    }
    // program_2.png의 경우 (예: 1920x1200 비율)
    if ($img.includes("program_2")) {
      return "100.5vw"; // 5:3 비율 (1200/1920 * 100)
    }
    return "50vh"; // 기본값
  }};
  height: ${({ $img }) => {
    if ($img.includes("program_1")) {
      return "92.25vw";
    }
    if ($img.includes("program_2")) {
      return "100.5vw";
    }
    return "auto";
  }};

  @media (max-width: 768px) {
    min-width: 100vw;
    background-size: contain;
    height: ${({ $img }) => {
      if ($img.includes("program_2")) {
        return "130vw"; // 모바일에서 높이 증가로 텍스트 간격 확보
      }
      return "92.25vw";
    }};
  }
`;

const DeviceCard = styled.div`
  background: #ffffff;

  /* 풀-블리드: 레이아웃의 패딩/중앙정렬을 무시하고 화면 너비로 확장 */
  width: calc(100vw - 10px);
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  /* 주변과 동일한 내부 여백 유지 */
  padding: var(--spacing-6) var(--spacing-8);
  text-align: center;

  padding: 7rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100vw;
    margin-left: 0;
    margin-right: 0;
    padding: 3rem 1rem;
  }
`;

const DeviceTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 0 1rem;
  }
`;

const DeviceSubtitle = styled.h2`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 3rem;
  font-weight: normal;
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const DeviceImage = styled.img`
  max-width: 70%;
  height: auto;
  margin: 2rem 0;

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 24px 0;
  }
`;

const DeviceDescription = styled.p`
  font-size: 1.6rem;
  color: #333;
  line-height: 1.6;
  margin: 2rem 0 3rem 0;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 1.5rem 1rem 2rem 1rem;
    padding: 0 0.5rem;
  }
`;

const FeatureCardsContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    width: 95%;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
  }
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FeatureTitle = styled.h3`
  background: #1800ad;
  color: white;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
  margin-top: -2rem;
  margin-bottom: 1.5rem;
  margin-left: -2rem;
  margin-right: -2rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-top: -1.5rem;
    margin-bottom: 1rem;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const FeatureDescription = styled.p`
  color: #333;
  line-height: 1.6;
  font-size: 1.4rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const MorissetProductCard = styled.div`
  background-image: url(${dim_background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* 풀-블리드: 레이아웃의 패딩/중앙정렬을 무시하고 화면 너비로 확장 */
  width: calc(100vw - 10px);
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  /* 주변과 동일한 내부 여백 유지 */
  padding: var(--spacing-6) var(--spacing-8);
  text-align: center;

  padding: 7rem 0;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100vw;
    margin-left: 0;
    margin-right: 0;
    padding: 3rem 1rem;
    min-height: auto;
  }
`;

const ResearchSection = styled.div`
  background: #ffffff;

  /* 풀-블리드: 레이아웃의 패딩/중앙정렬을 무시하고 화면 너비로 확장 */
  width: calc(100vw - 10px);
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  /* 주변과 동일한 내부 여백 유지 */
  padding: var(--spacing-6) var(--spacing-8);
  text-align: center;

  padding: 7rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100vw;
    margin-left: 0;
    margin-right: 0;
    padding: 3rem 1rem;
  }
`;

const ResearchTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 4rem;
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;

const ResearchCardsContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 95%;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ResearchCard = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 2rem;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ResearchYear = styled.h3`
  color: #1800ad;
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  border-bottom: 2px solid #1800ad;
  padding-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ResearchContent = styled.p`
  color: #333;
  line-height: 1.6;
  font-size: 1.4rem;
  margin: 0;

  strong {
    background: linear-gradient(120deg, #ffeb3b 0%, #ffeb3b 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.3em;
    background-position: 0 88%;
    padding: 0.1em 0.2em;
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(255, 235, 59, 0.3);
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const MesoProductSection = styled.div`
  background: #ffffff;

  /* 풀-블리드: 레이아웃의 패딩/중앙정렬을 무시하고 화면 너비로 확장 */
  width: calc(100vw - 10px);
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  /* 주변과 동일한 내부 여백 유지 */
  padding: var(--spacing-6) var(--spacing-8);
  text-align: center;

  padding: 7rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100vw;
    margin-left: 0;
    margin-right: 0;
    padding: 3rem 1rem;
  }
`;

const MesoTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0 1rem;
  }
`;

const MesoSubtitle = styled.h2`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
  font-weight: normal;
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const MesoProductImage = styled.img`
  max-width: 80%;
  height: auto;
  margin: 2rem 0 3rem 0;

  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

const EfficacyTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 3rem;
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const EfficacyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 95%;
  }
`;

const EfficacyItem = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  padding: 0.5rem 0;
`;

const Checkmark = styled.span`
  color: #4caf50;
  font-size: 1.4rem;
  margin-right: 1rem;
  font-weight: bold;
`;

const EfficacyText = styled.span`
  color: #333;
  font-size: 1.4rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const TricocureSection = styled.div`
  background: #ffffff;

  /* 풀-블리드: 레이아웃의 패딩/중앙정렬을 무시하고 화면 너비로 확장 */
  width: calc(100vw - 10px);
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  /* 주변과 동일한 내부 여백 유지 */
  padding: var(--spacing-6) var(--spacing-8);
  text-align: center;

  padding: 7rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100vw;
    margin-left: 0;
    margin-right: 0;
    padding: 3rem 1rem;
  }
`;

const TricocureTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0 1rem;
  }
`;

const TricocureSubtitle = styled.h2`
  font-size: 1.4rem;
  color: #666;
  margin-bottom: 3rem;
  font-weight: normal;
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const TricocureProductImage = styled.img`
  max-width: 80%;
  height: auto;
  margin: 2rem 0 3rem 0;

  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

const AntiDHTTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0 1rem;
  }
`;

const AntiDHTDescription = styled.p`
  font-size: 1.4rem;
  color: #666;
  margin-bottom: 3rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;

const AntiDHTGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    width: 95%;
  }
`;

const AntiDHTItem = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  padding: 1rem 0;
`;

const AntiDHTCheckmark = styled.span`
  color: #333;
  font-size: 1.4rem;
  margin-right: 1rem;
  font-weight: bold;
  margin-top: 0.2rem;
`;

const AntiDHTText = styled.span`
  color: #333;
  font-size: 1.4rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const Program = () => {
  return (
    <div>
      <ProgramCard $img={program_1}>
        <PageTitle subtitle="프로그램 소개" />
      </ProgramCard>
      <ProgramCard $img={program_2} />

      <DeviceCard>
        <DeviceTitle>스위스 라이너 어드밴스드 디바이스</DeviceTitle>
        <DeviceSubtitle>Swiss Liner Advanced Device</DeviceSubtitle>

        <DeviceImage src={product_1} alt="Swiss Liner Advanced Device" />

        <DeviceDescription>
          줄기세포를 손상없이 고출력 저진동으로 진피층까지 전달하는 두피발모
          전문 혁신 디바이스
        </DeviceDescription>

        <FeatureCardsContainer>
          <FeatureCard>
            <FeatureTitle>18개의 자극지점</FeatureTitle>
            <FeatureDescription>
              두피의 진피층을 부드럽고 효과적인 방식으로 활성화하는 하이진
              니들로 구성됩니다.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>고출력 저진동</FeatureTitle>
            <FeatureDescription>
              60초당 15,000번의 고출력 저진동으로 두피에 자극없이 모낭 주변까지
              줄기세포를 도달시킵니다.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>대한민국 최초</FeatureTitle>
            <FeatureDescription>
              기존 MTS 방식의 틀을 깬 하이진 니들을 적용해 상처 및 통증없이
              발모효과를 극대화합니다.
            </FeatureDescription>
          </FeatureCard>
        </FeatureCardsContainer>
      </DeviceCard>

      <MorissetProductCard>
        <DeviceTitle>스위스의 기초과학 쏘팔메토 줄기세포</DeviceTitle>

        <DeviceImage src={product_2} alt="Saw Palmetto" />

        <DeviceDescription>
          ISO 인증을 받은 유럽 제약회사 제조 과정에 기반한 효과적인 탈모 완화
          핵심 성분
        </DeviceDescription>

        <DeviceDescription>
          대서양 해안에서 자생하는 톱 야자나무의 추출물인 쏘팔메토는 식물성
          줄기세포에서 탈모를 유발하는 DHT 호르몬을 억제 및 차단합니다.
          <br />
          남성의 양성 전립성 비대증 완화를 위해 주로 사용되었으나,
          <br />
          쏘팔메토의 주 성분 중 하나인 로르산이 남성호르몬의 일종이자 탈모를
          유발하는 DHT를 억제하는 기전을 가지고 있기에 그 효과성이 인증된 안전한
          줄기세포입니다.
        </DeviceDescription>

        <FeatureCardsContainer>
          <FeatureCard>
            <FeatureTitle>세포 치유력 향상</FeatureTitle>
            <FeatureDescription>
              두피세포 재생을 위한 식물성 줄기세포의 안전성과 유효성을 자랑하며,
              근본적인 자가 치유력을 향상시킵니다.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>제품 침투력 증가</FeatureTitle>
            <FeatureDescription>
              쏘팔메토 줄기세포 활성성분이 혈액 및 림프의 순환을 자극해 제품의
              침투 효율을 최대 97%까지 증가시킵니다.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>탈모 호르몬 억제</FeatureTitle>
            <FeatureDescription>
              탈모를 유발하는 DHT 호르몬을 표적침투 및 억제시키는 특화된
              성장인자로 요요현상없는 두피를 만들어줍니다.
            </FeatureDescription>
          </FeatureCard>
        </FeatureCardsContainer>
      </MorissetProductCard>

      <ResearchSection>
        <ResearchTitle>논문으로 증명된 쏘팔메토 효과성•안전성</ResearchTitle>

        <ResearchCardsContainer>
          <ResearchCard>
            <ResearchYear>2002년 연구 中</ResearchYear>
            <ResearchContent>
              쏘팔메토를 섭취한 남성 탈모인 참가자 중{" "}
              <strong>60% 모발 빠짐 감소</strong>
            </ResearchContent>
          </ResearchCard>

          <ResearchCard>
            <ResearchYear>2004년 연구 中</ResearchYear>
            <ResearchContent>
              쏘팔메토가 함유된 샴푸와 로션을 3개월간 사용했을 때{" "}
              <strong>모발 밀도 35% 증가 및 피지 67% 감소</strong>
            </ResearchContent>
          </ResearchCard>

          <ResearchCard>
            <ResearchYear>2004년 연구 中</ResearchYear>
            <ResearchContent>
              16주간 쏘팔메토 섭취 및 국소치료한 결과,{" "}
              <strong>
                모발 탈락 29% 감소, 모발 굵기 7.61% 증가. 부작용 발견되지 않음
              </strong>
            </ResearchContent>
          </ResearchCard>

          <ResearchCard>
            <ResearchYear>2005년 연구 中</ResearchYear>
            <ResearchContent>
              쏘팔메토의 경우 전립선 특이항원 (PSA) 수치에 영향을 미치지 않음.
              그에 반해 <strong>피나스테리드의 경우 PSA 수치 크게 증가</strong>
            </ResearchContent>
          </ResearchCard>

          <ResearchCard>
            <ResearchYear>2020년 연구 中</ResearchYear>
            <ResearchContent>
              쏘팔메토 섭취 및 국소치료한 결과, 참가자 중{" "}
              <strong>
                60%가 모질의 개선을, 27%가 모발 개수의 증가, 83%가 모발 밀도의
                개선을 경험
              </strong>
            </ResearchContent>
          </ResearchCard>

          <ResearchCard>
            <ResearchYear>2022년 연구 中</ResearchYear>
            <ResearchContent>
              12주간 1일2회 쏘팔메토를 주 성분으로 하는 두피세럼 도포 후{" "}
              <strong>
                두피 수분량 67% 증가, 미세순환 4% 증가, 모발 성장기 47% 증가 및
                퇴행기 40% 감소
              </strong>
            </ResearchContent>
          </ResearchCard>
        </ResearchCardsContainer>
      </ResearchSection>

      <MesoProductSection>
        <MesoTitle>MESO HAIR LOSS CONTROL</MesoTitle>
        <MesoSubtitle>: Eight actions to redensify</MesoSubtitle>

        <MesoProductImage src={product_4} alt="MESO HAIR LOSS CONTROL" />

        <EfficacyTitle>제품효능</EfficacyTitle>

        <EfficacyGrid>
          <EfficacyItem>
            <Checkmark>·</Checkmark>
            <EfficacyText>탈모 증상 완화</EfficacyText>
          </EfficacyItem>

          <EfficacyItem>
            <Checkmark>·</Checkmark>
            <EfficacyText>모발 성장 촉진</EfficacyText>
          </EfficacyItem>

          <EfficacyItem>
            <Checkmark>·</Checkmark>
            <EfficacyText>스트레스 및 약물 복용 시 모발 보호</EfficacyText>
          </EfficacyItem>

          <EfficacyItem>
            <Checkmark>·</Checkmark>
            <EfficacyText>5알파환원요소 억제제에 영향</EfficacyText>
          </EfficacyItem>

          <EfficacyItem>
            <Checkmark>·</Checkmark>
            <EfficacyText>세범 밸런싱 효과</EfficacyText>
          </EfficacyItem>

          <EfficacyItem>
            <Checkmark>·</Checkmark>
            <EfficacyText>모근 영양분 공급</EfficacyText>
          </EfficacyItem>

          <EfficacyItem>
            <Checkmark>·</Checkmark>
            <EfficacyText>모발 큐티클 회복</EfficacyText>
          </EfficacyItem>

          <EfficacyItem>
            <Checkmark>·</Checkmark>
            <EfficacyText>모발 굵기 증가</EfficacyText>
          </EfficacyItem>

          <EfficacyItem>
            <Checkmark>·</Checkmark>
            <EfficacyText>연수 강화</EfficacyText>
          </EfficacyItem>

          <EfficacyItem>
            <Checkmark>·</Checkmark>
            <EfficacyText>모발 윤기 부여</EfficacyText>
          </EfficacyItem>

          <EfficacyItem>
            <Checkmark>·</Checkmark>
            <EfficacyText>유전적 탈모 지연</EfficacyText>
          </EfficacyItem>

          <EfficacyItem>
            <Checkmark>·</Checkmark>
            <EfficacyText>
              출산, 스트레스 또는 수면 장애 후 모낭 재활성화
            </EfficacyText>
          </EfficacyItem>
        </EfficacyGrid>
      </MesoProductSection>

      <TricocureSection>
        <TricocureTitle>TRICOCURE HAIR SERUM</TricocureTitle>
        <TricocureSubtitle>: Hair energy boost</TricocureSubtitle>

        <TricocureProductImage src={product_5} alt="TRICOCURE HAIR SERUM" />

        <AntiDHTTitle>안티 DHT 앰플</AntiDHTTitle>
        <AntiDHTDescription>
          탈모 원인을 감소시키는 혁신적이고 완벽한 포뮬러
        </AntiDHTDescription>

        <AntiDHTGrid>
          <AntiDHTItem>
            <AntiDHTCheckmark>·</AntiDHTCheckmark>
            <AntiDHTText>비안드로겐 탈모증을 효과적으로 완화</AntiDHTText>
          </AntiDHTItem>

          <AntiDHTItem>
            <AntiDHTCheckmark>·</AntiDHTCheckmark>
            <AntiDHTText>비듬, 지루 및 가는 모발 완화</AntiDHTText>
          </AntiDHTItem>

          <AntiDHTItem>
            <AntiDHTCheckmark>·</AntiDHTCheckmark>
            <AntiDHTText>
              환경적 모발 손상 복구, 성장 촉진, 탈모 방지
            </AntiDHTText>
          </AntiDHTItem>

          <AntiDHTItem>
            <AntiDHTCheckmark>·</AntiDHTCheckmark>
            <AntiDHTText>
              모발 밀도, 유연성, 성장기 증가 및 퇴행기 감소
            </AntiDHTText>
          </AntiDHTItem>
        </AntiDHTGrid>
      </TricocureSection>

      <MesoProductSection>
        <TricocureTitle>TRICOCURE HAIR LOSS SHAMPOO</TricocureTitle>
        <TricocureSubtitle>
          : Stronger, healthier, more structured hair
        </TricocureSubtitle>

        <TricocureProductImage
          src={product_6}
          alt="TRICOCURE HAIR LOSS SHAMPOO"
        />

        <AntiDHTTitle>트리코큐어 무스 탈모샴푸</AntiDHTTitle>
        <AntiDHTDescription>
          더 강하고, 더 건강하고, 더 구조적인 모발을 얻으세요
        </AntiDHTDescription>

        <AntiDHTGrid>
          <AntiDHTItem>
            <AntiDHTCheckmark>·</AntiDHTCheckmark>
            <AntiDHTText>
              모발 강화를 위해 설계된 새로운 특허 솔루션
            </AntiDHTText>
          </AntiDHTItem>

          <AntiDHTItem>
            <AntiDHTCheckmark>·</AntiDHTCheckmark>
            <AntiDHTText>
              손상된 케라틴을 강화시키고 구조를 재구성하여 모발 관리성 회복
            </AntiDHTText>
          </AntiDHTItem>

          <AntiDHTItem>
            <AntiDHTCheckmark>·</AntiDHTCheckmark>
            <AntiDHTText>
              정기적인 사용을 통한 강하고, 건강하고 구조화된 모발
            </AntiDHTText>
          </AntiDHTItem>
        </AntiDHTGrid>
      </MesoProductSection>

      <MesoProductSection>
        <TricocureTitle>
          오픈 6개월 만에 단 하나의 프로그램으로 월매출 3500만원 달성 이유:
        </TricocureTitle>
        <TricocureSubtitle>
          모발 성장 주기에 맞춘 최고의 근본적 솔루션
        </TricocureSubtitle>

        <TricocureProductImage src={product_7} alt="모리셋 성공 사례" />
      </MesoProductSection>
    </div>
  );
};
