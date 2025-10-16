import styled from "styled-components";
import transparent_logo from "../img/transparent_logo.png";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem 1rem 4rem 1rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 2.5rem 1rem;
  }
`;

const BrandLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    img {
      max-width: 70%;
      height: auto;
    }
  }
`;

const BrandEn = styled.h1`
  font-family: "Nanum Myeongjo", serif;
  font-weight: 800;
  font-size: 48px;
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  margin-top: 8px;
  font-size: 18px;
  color: var(--color-text);

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const PageTitle = ({ subtitle }) => {
  return (
    <Wrapper>
      <BrandLine>
        <img src={transparent_logo} alt="logo" />
      </BrandLine>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrapper>
  );
};
