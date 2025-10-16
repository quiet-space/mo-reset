import { PageTitle } from "../components/PageTitle";
import chair from "../img/chair.png";
import education1 from "../img/education1.png";
import education2 from "../img/education2.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const FullImageContainer = styled.div`
  width: 99vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const FullImage = styled.img`
  width: 100%;
  height: 100%;
`;

const SubTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2;
  text-align: left;
  margin: 3rem 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 2rem 1rem 0.8rem 1rem;
    text-align: center;
  }
`;

const Content = styled.p`
  width: 80%;

  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6;
  text-align: left;
  margin: 2rem 0 1rem 0;

  @media (max-width: 768px) {
    width: 95%;
    font-size: 1rem;
    line-height: 1.5;
    margin: 1.5rem 1rem;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin: 5rem 0;

  @media (max-width: 768px) {
    margin: 3rem 0;
    gap: 1.5rem;
    width: 95%;

    video {
      width: 100% !important;
    }
  }
`;

export const Education = () => {
  return (
    <Container>
      <PageTitle subtitle="창업 및 교육" />

      <FullImageContainer>
        <FullImage src={chair} alt="chair" />
      </FullImageContainer>

      <SubTitle>
        모리셋은 25년 간의 연구개발을 통해 두피탈모 관리를 선도하는
        브랜드입니다. 
      </SubTitle>

      <Content>
        모리셋은 유럽의 역사 깊은 기초과학 연구를 기반으로 약물이나 두피케어에
        의존하지 않는 혁신적 대체 시스템을 설계하였으며, 모리셋의 특허기술은
        쉽게 모방할 수 없는 독보적인 경쟁력을 가졌습니다. 
        <br />
        <br />
        두피시장의 성장세에 따라 수많은 두피 센터들이 생겨나고 있습니다. 그러나
        타 탈모관리와는 차원이 다르게 모리셋은 모든 결과를 오직 임상으로
        증명합니다. 그렇기에 모리셋 창업은 고객들의 신뢰와 그로 인한 매출 보장을
        장담하며, 안정적인 사업을 위한 수익 창출 솔루션 및 지속적인 사후관리를
        약속합니다.
      </Content>

      <SubTitle>창업 세미나</SubTitle>
      <img
        src={education1}
        alt="education1"
        style={{ maxWidth: "100%", height: "auto" }}
      />

      <VideoContainer>
        <SubTitle>인터뷰</SubTitle>
        {/* <video
          controls
          src="https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/edu1-DUirBKvUmvYekhpIdoNo7HXeHHQiZs.mp4"
          type="video/mp4"
          width="80%"
        /> */}
        <video
          controls
          src="https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/edu2-Oq4BvsxSvlZavUFsCE1uGv4TaAY3hm.mp4"
          type="video/mp4"
          width="80%"
        />
        <video
          controls
          src="https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/edu3-7wvGL9ua0ZK75mzRfHjEe5CcD1jKe7.mp4"
          type="video/mp4"
          width="80%"
        />
      </VideoContainer>

      <SubTitle>창업 절차</SubTitle>
      <img
        src={education2}
        alt="education2"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </Container>
  );
};
