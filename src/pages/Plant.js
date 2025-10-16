import { PageTitle } from "../components/PageTitle";
import license from "../img/license.png";
import styled from "styled-components";
import cor_video from "../img/cor_video.mp4";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  width: 80%;

  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 95%;
    gap: 1rem;

    img {
      width: 100%;
      height: auto;
    }
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
  line-height: 1.6;

  text-align: left;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const VideoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  background-color: #d3d3d3;

  padding: 2rem;

  width: 80%;
  margin: 8rem auto;

  /* 풀-블리드: 레이아웃의 패딩/중앙정렬을 무시하고 화면 너비로 확장 */
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  /* 주변과 동일한 내부 여백 유지 */
  padding: var(--spacing-6) var(--spacing-8);

  @media (max-width: 768px) {
    margin: 4rem auto;
    padding: 1.5rem 1rem;
    gap: 1rem;

    video {
      width: 100%;
      height: auto;
    }
  }
`;

export const Plant = () => {
  return (
    <div>
      <PageTitle subtitle="모낭플란트" />

      <Wrap>
        <img src={license} alt="license" />

        <div>
          <SubTitle>오직 모리셋 모낭플란트</SubTitle>

          <Content>
            모리셋은 25년간 누적된 메조스킨라인의 연구와 두피 개선 단계를
            기반으로 '모낭플란트'를 개발하였으며,  필요한 모든 관리기간 및 단계
            또한 과학적으로 설계되었습니다. 
            <br />
            <br />
            모리셋의 혁신적 기술력과 메조스킨라인의 제품이 만나 탄생한
            모낭플란트는 두피 계의 완전한 솔루션임을 자부합니다. 
          </Content>
        </div>
      </Wrap>

      <VideoSection>
        <video src={cor_video} alt="cor_video" autoPlay loop muted />
      </VideoSection>
    </div>
  );
};
