import { PageTitle } from "../components/PageTitle";
import ceos from "../img/ceos.png";
import logo_3 from "../img/logo_3.png";
import world_map from "../img/world_map.png";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const WorldMapWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WorldMap = styled.img`
  width: 80%;
`;

const Description = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Logo3 = styled.img`
  flex: 1;
  margin-top: 60px;
  justify-self: center;
  align-self: center;
`;

const Ceos = styled.img`
  flex: 1;
  margin-top: 60px;
  justify-self: center;
  align-self: center;
`;

const SubTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2;

  margin: 7rem 0 3rem 0;
`;

export const About = () => {
  const description = `
  모리셋인터네셔널은 의학적 개입이나 그에 따른 위험 없이 놀라운 결과를 얻도록 고안된 모낭플란트는 탈모방지 분야에서 우리만의 독특한 개념을 대표합니다.
\n
모리셋은 100% 안전하고, 검증되었으며, EU 인증을 받은 줄기세포제품과 장비를 기반으로 접근하며, 이를 통해 높은 품질과 신뢰할 수 있는 결과를 보장합니다.
\n
모리셋은 탈모개선에 필요한 제품과 장비를 공급함으로써 고객이 안전하다고 느낄 수 있도록 하는 데 많은 중점을 두고 있습니다. 따라서 귀하의 고객에게도 동일한 확신을 전달할 수 있습니다.`;

  return (
    <div>
      <PageTitle subtitle="기업 소개" />

      <Wrap>
        <div>
          {description.split("\n").map((line, index) => (
            <Description key={index}>{line}</Description>
          ))}
          <Logo3 src={logo_3} alt="logo_3" />
        </div>
      </Wrap>

      <div>
        <SubTitle>대표자</SubTitle>
        <Ceos src={ceos} alt="ceo" />
      </div>

      <div>
        <SubTitle>세계로 나아가는 기업</SubTitle>
        <WorldMapWrap>
          <WorldMap src={world_map} alt="world_map" />
        </WorldMapWrap>
      </div>
    </div>
  );
};
