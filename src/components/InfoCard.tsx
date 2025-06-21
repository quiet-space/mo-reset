import React from 'react';
import styled from 'styled-components';
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md';

const Container = styled.div`
  padding: 60px 20px;
  background: #f8f9fa;
  // margin: 40px 0;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  align-items: start;
`;

const InfoSection = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: background 0.3s ease;

  &:hover {
    background: #e9ecef;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
  font-size: 16px;
`;

const InfoValue = styled.div`
  color: #666;
  line-height: 1.5;
  font-size: 14px;
`;

const MapContainer = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  color: #1976d2;
  font-weight: 600;
  font-size: 18px;
`;

const ContactButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 15px;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const InfoCard = () => {
  const handleCall = () => {
    window.location.href = 'tel:02-1234-5678';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@mo-reset.com';
  };

  return (
    <Container>
      <Content>
        <InfoSection>
          <SectionTitle>
            <MdLocationOn size={24} />
            오시는 길
          </SectionTitle>
          <InfoItem>
            <IconWrapper>
              <MdLocationOn size={20} />
            </IconWrapper>
            <InfoContent>
              <InfoLabel>주소</InfoLabel>
              <InfoValue>
                서울특별시 강남구 테헤란로 123<br />
                모리셋 빌딩 5층
              </InfoValue>
            </InfoContent>
          </InfoItem>
          <InfoItem>
            <IconWrapper>
              <MdAccessTime size={20} />
            </IconWrapper>
            <InfoContent>
              <InfoLabel>운영시간</InfoLabel>
              <InfoValue>
                평일: 09:00 - 18:00<br />
                토요일: 09:00 - 15:00<br />
                일요일 및 공휴일 휴무
              </InfoValue>
            </InfoContent>
          </InfoItem>
        </InfoSection>

        <InfoSection>
          <SectionTitle>
            <MdPhone size={24} />
            연락처
          </SectionTitle>
          <InfoItem>
            <IconWrapper>
              <MdPhone size={20} />
            </IconWrapper>
            <InfoContent>
              <InfoLabel>전화번호</InfoLabel>
              <InfoValue>02-1234-5678</InfoValue>
            </InfoContent>
          </InfoItem>
          <InfoItem>
            <IconWrapper>
              <MdEmail size={20} />
            </IconWrapper>
            <InfoContent>
              <InfoLabel>이메일</InfoLabel>
              <InfoValue>info@mo-reset.com</InfoValue>
            </InfoContent>
          </InfoItem>
          <ContactButton onClick={handleCall}>
            전화 상담하기
          </ContactButton>
          <ContactButton onClick={handleEmail} style={{ marginLeft: '10px' }}>
            이메일 보내기
          </ContactButton>
        </InfoSection>

        <MapContainer>
          <div>
            <MdLocationOn size={48} style={{ marginBottom: '10px' }} />
            <div>지도가 여기에 표시됩니다</div>
            <div style={{ fontSize: '14px', marginTop: '10px', opacity: 0.8 }}>
              실제 구현 시 카카오맵 또는 네이버맵 API 연동
            </div>
          </div>
        </MapContainer>
      </Content>
    </Container>
  );
}; 