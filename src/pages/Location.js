import styled from "styled-components";
import { PageTitle } from "../components/PageTitle";

const LocationPage = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    width: 95vw;
    padding: 0 10px;
  }
`;

const MapSection = styled.div`
  margin: 40px 0;
`;

const MapContainer = styled.div`
  background: white;
  overflow: hidden;
`;

const MapBanner = styled.div`
  background: #fbbf24;
  color: #1f2937;
  font-weight: 600;
  font-size: 18px;
  padding: 16px 24px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 16px;
  }
`;

const KoreaMap = styled.div`
  padding: 0;
  background: #f8fafc;
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 800px;
  border: none;
  border-radius: 0 0 12px 12px;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const BranchLinksSection = styled.div`
  margin: 40px 0;
  width: 100%;
`;

const BranchLinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  background: white;
  overflow: hidden;
`;

const BranchLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s ease;
  position: relative;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f9fafb;
  }
`;

const LinkContent = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 24px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #fbbf24;
  }
`;

const LinkText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #374151;
  font-family: "Pretendard", sans-serif;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Location = () => {
  return (
    <LocationPage>
      <PageTitle subtitle="지점 정보" />

      {/* 지도 섹션 */}
      <MapSection>
        <MapContainer>
          <MapBanner>본사</MapBanner>
          <KoreaMap>
            {/* 네이버 지도 임베드 */}
            <MapIframe
              src="https://naver.me/xoH8tl8W"
              width="100%"
              height="800"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="국내 지점 지도"
            />
          </KoreaMap>
        </MapContainer>
      </MapSection>

      {/* 지점 링크 섹션 */}
      <BranchLinksSection>
        <BranchLinksContainer>
          <BranchLink
            href="https://naver.me/Gmbn7pL9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkContent>
              <LinkText>울산점 네이버 지도 바로가기</LinkText>
            </LinkContent>
          </BranchLink>

          <BranchLink
            href="https://naver.me/x5GfTq5r"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkContent>
              <LinkText>김해점 네이버 지도 바로가기</LinkText>
            </LinkContent>
          </BranchLink>

          <BranchLink
            href="https://naver.me/5vcjX2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkContent>
              <LinkText>당진점 네이버 지도 바로가기</LinkText>
            </LinkContent>
          </BranchLink>

          <BranchLink
            href="https://naver.me/5l7N5lzx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkContent>
              <LinkText>창원점 네이버 지도 바로가기</LinkText>
            </LinkContent>
          </BranchLink>
        </BranchLinksContainer>
      </BranchLinksSection>
    </LocationPage>
  );
};
