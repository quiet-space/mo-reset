import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem 1rem 4rem 1rem;
  text-align: center;
`;

const BrandLine = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
`;

const BrandEn = styled.h1`
  font-family: "Nanum Myeongjo", serif;
  font-weight: 800;
  font-size: 48px;
  line-height: 1;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  margin-top: 8px;
  font-size: 18px;
  color: var(--color-text);
`;

export const PageTitle = ({ subtitle }) => {
  return (
    <Wrapper>
      <BrandLine>
        <BrandEn>Mo Reset</BrandEn>
      </BrandLine>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrapper>
  );
};
