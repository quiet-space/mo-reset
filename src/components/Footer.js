import styled from "styled-components";
import { useLocation } from "react-router-dom";
import logo from "../img/logo.png";

const FooterRoot = styled.footer`
  background: transparent;
  //   color: rgba(255, 255, 255, 0.8);
  padding: 2rem 1rem;
  z-index: 999999;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 32px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
`;

const Brand = styled.div`
  font-weight: 700;
  margin-bottom: 15px;
  text-align: left;
`;

const Line = styled.p`
  font-size: 14px;
  line-height: 1.7;
  opacity: 0.85;
`;

const Dot = styled.span`
  margin: 0 8px;
  opacity: 0.5;
`;

export const Footer = () => {
  const { pathname } = useLocation();
  if (pathname === "/") {
    return null;
  }
  return (
    <FooterRoot>
      <FooterContainer>
        <div>
          <Brand>모리셋 인터내셔널</Brand>
          <Line>
            대표자 이보영 <Dot>·</Dot> 사업자등록번호 623-03-01609
            <Dot>·</Dot> 전화번호 02-535-2033
          </Line>

          <Line>
            사업장 서울특별시 서초구 서초중앙로 230, 3층 304호 (반포동,
            동화반포프라자)
          </Line>
        </div>
        <div>
          <img src={logo} alt="Mo Reset" height={48} />
        </div>
      </FooterContainer>
    </FooterRoot>
  );
};
