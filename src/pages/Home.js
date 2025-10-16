import { PageTitle } from "../components/PageTitle";
import beach from "../img/beach.png";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;
const TitleWrap = styled.div`
  margin-top: 5rem;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;
const Image = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  min-height: 180%;
  overflow: hidden;

  background-image: url(${beach});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  z-index: 1;
`;
const ScrollArea = styled.div`
  width: 100%;
  min-height: 180%;
  overflow: auto;
`;
export const Home = () => {
  return (
    <div>
      <Container>
        <TitleWrap>
          <PageTitle subtitle="당신의 두피를 스위스 과학으로 되살리다." />
        </TitleWrap>
      </Container>
      <ScrollArea>
        <Image />
      </ScrollArea>
    </div>
  );
};
