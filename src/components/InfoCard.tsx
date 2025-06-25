import styled from 'styled-components';
import { MdPhone, MdChat, MdCalendarToday, MdLocationOn } from 'react-icons/md';


const Container = styled.div`
  padding: 100px 0 120px 0;
  // background: #f8f9fa;
  height: 100%;
  `;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  align-items: start;
  height: 100%;

  & > *:first-child {
    flex: 0 0 40%;
  }

  & > *:last-child {
    flex: 0 0 55%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 0 20px;

    & > *:first-child,
    & > *:last-child {
      flex: 1;
      width: 100%;
    }
  }
`;

const InfoSection = styled.div`
  height: 100%;
  background: white;
  padding: 30px;
  border-radius: 12px;
  border: 2px solid #e9ecef;

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;  

const InfoValue = styled.div`
  color: #666;
  line-height: 1.5;
  font-size: 14px;
`;

const InfoButton = styled.button`
font-size: 16px;
  background: ${({ theme }) => theme.colors.text};
  color: white;
  border: none;
  padding: 6px 16px;
  border-radius: 8px;
  justify-self: end;
`;


const PointText = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  margin: 40px 0;


  h1 {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    margin-right: 8px;
  }
`;


export const InfoCard = () => {
  return (
    <Container>
       <PointText>
                <h1>    
                모리셋
                </h1>
                <br />
                모낭플란트의 미래를 만들어갑니다
        </PointText>
        
      <Content>
        <InfoSection>
          <SectionTitle>
            문의사항
          </SectionTitle>
          <InfoItem>
            <IconWrapper>
              <MdPhone size={20} />
            </IconWrapper>
            <InfoContent>
              <InfoLabel>대표전화</InfoLabel>
              <InfoValue>
              {`02-535-2033`}
              </InfoValue>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <IconWrapper>
              <MdLocationOn size={20} />
            </IconWrapper>
            <InfoContent>
              <InfoLabel>주소</InfoLabel>
              <InfoValue>
              서울특별시 서초구 서초중앙로 230 동화반포프라자 304호
              (지하철 7호선 반포역 3번 출구에서 730m)
              </InfoValue>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <IconWrapper>
              <MdCalendarToday size={20} />
            </IconWrapper>
            <InfoContent>
              <InfoLabel>네이버 예약
              <InfoButton
                style={{ marginLeft: '10px' }}
                onClick={() => window.open('https://map.naver.com/p/entry/place/1375935590?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.0120781&lat=37.5021689&c=15.00,0,0,0,dh', '_blank')}
                >
                    바로가기
              </InfoButton>
              </InfoLabel>
            </InfoContent>
          </InfoItem>
          <InfoItem>
            <IconWrapper>
              <MdChat size={20} />
            </IconWrapper>
            <InfoContent>
              <InfoLabel>카톡 상담
              <InfoButton
                style={{ marginLeft: '10px' }}
                onClick={() => window.open('https://pf.kakao.com/_bNapxj', '_blank')}
                >
                    바로가기
              </InfoButton>
              </InfoLabel>
            </InfoContent>
          </InfoItem>
        </InfoSection>

      <InfoSection>
        <SectionTitle>
            오시는 길
          </SectionTitle>

          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12661.2793486145!2d127.015719!3d37.500374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1643fd50c8d%3A0xde64a41507d3102f!2z64yA7ZWc66-86rWtIOyEnOyauO2KueuzhOyLnCDshJzstIjqtawg67CY7Y-s64-ZIDMyLTI!5e0!3m2!1sko!2sus!4v1750489916971!5m2!1sko!2sus" 
            width="100%" 
            height="400PX" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </InfoSection>
      </Content>


    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <InfoSection 
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          border: '2px solid #e9ecef',
          borderRadius: '12px',
          padding: '30px',
          background: 'white',
          transition: 'all 0.3s ease',
          marginTop: '40px',
        }}>
            <SectionTitle>
              상담 신청
            </SectionTitle>
            <p style={{ fontSize: '16px', fontWeight: '400', color: '#323232', marginBottom: '20px' }}>
              상담을 신청하시거나, 모리셋의 새로운 소식을 받아보시려면 연락처를 남겨주세요.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                  type="email"
                  placeholder="이메일을 입력해주세요"
                  style={{
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    flex: 1
                  }}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                  type="tel"
                  placeholder="휴대폰 번호를 입력해주세요"
                  style={{
                    padding: '10px',
                    borderRadius: '5px', 
                    border: '1px solid #ddd',
                    flex: 1
                  }}
                />
              </div>
              <InfoButton
                onClick={() => {
                  alert('상담 신청이 완료되었습니다.');
                }}
                style={{
                  width: '100%',
                  padding: '15px',
                  fontSize: '16px'
                }}
              >
                상담 신청하기
              </InfoButton>
            </div>
        </InfoSection>
      </div>
    </Container>
  );
}; 