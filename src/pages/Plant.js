import { PageTitle } from "../components/PageTitle";
import license from "../img/license.png";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  width: 80%;

  margin: 0 auto;
`;

const SubTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2;
  text-align: left;
  margin: 2rem 0 1rem 0;
`;

const Content = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6;

  text-align: left;
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
    </div>
  );
};
