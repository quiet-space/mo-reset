import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MainCarousel } from './MainCarousel';

const Container = styled.div`
  padding: 40px 0;
  background: #f8f9fa;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

const ProgramSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 20px;
  }
`;

const ProgramButton = styled.button<{ $isActive: boolean }>`
  padding: 12px 24px;
  border: 2px solid ${({ $isActive, theme }) => $isActive ? theme.colors.primary : '#ddd'};
  background: ${({ $isActive, theme }) => $isActive ? theme.colors.primary : 'white'};
  color: ${({ $isActive, theme }) => $isActive ? 'white' : theme.colors.text};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ $isActive, theme }) => $isActive ? theme.colors.primary : theme.colors.primaryHover};
    color: white;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

// 프로그램별 데이터
const programData = {
  SS: {
    title: '파라스파 : SS',
    cards: [
      {
        id: 'ss-1',
        images: [
          '/src/assets/carousel1.jpg',
          '/src/assets/carousel2.jpg',
          '/src/assets/carousel3.jpg',
        ],
        title: '파라스파 SS 프로그램',
        content: '파라스파 SS는 최고급 탈모 치료 프로그램입니다. 혁신적인 기술과 검증된 방법을 통해 탈모 문제를 근본적으로 해결합니다.',
      },
      {
        id: 'ss-2',
        images: [
          '/src/assets/carousel2.jpg',
          '/src/assets/carousel3.jpg',
          '/src/assets/carousel4.jpg',
        ],
        title: 'SS 특화 치료',
        content: '개인 맞춤형 치료 계획을 통해 각 환자의 상태에 최적화된 치료를 제공합니다.',
      },
    ]
  },
  SC: {
    title: '모낭플란트 : SC',
    cards: [
      {
        id: 'sc-1',
        images: [
          '/src/assets/carousel3.jpg',
          '/src/assets/carousel4.jpg',
          '/src/assets/carousel1.jpg',
        ],
        title: '모낭플란트 SC 프로그램',
        content: '모낭플란트 SC는 모낭 이식 전문 프로그램입니다. 정밀한 기술로 자연스러운 모발 복원을 실현합니다.',
      },
      {
        id: 'sc-2',
        images: [
          '/src/assets/carousel4.jpg',
          '/src/assets/carousel1.jpg',
          '/src/assets/carousel2.jpg',
        ],
        title: 'SC 고급 기술',
        content: '최신 모낭 이식 기술을 활용하여 최고의 결과를 보장합니다.',
      },
    ]
  },
  SR: {
    title: '모플란트 : SR',
    cards: [
      {
        id: 'sr-1',
        images: [
          '/src/assets/carousel1.jpg',
          '/src/assets/carousel3.jpg',
          '/src/assets/carousel4.jpg',
        ],
        title: '모플란트 SR 프로그램',
        content: '모플란트 SR은 종합적인 탈모 치료 솔루션입니다. 다양한 치료 방법을 조합하여 최적의 효과를 달성합니다.',
      },
      {
        id: 'sr-2',
        images: [
          '/src/assets/carousel2.jpg',
          '/src/assets/carousel4.jpg',
          '/src/assets/carousel1.jpg',
        ],
        title: 'SR 통합 치료',
        content: '약물 치료부터 수술까지 모든 영역을 포괄하는 통합 치료 시스템입니다.',
      },
    ]
  },
  ST: {
    title: 'Cindy : ST',
    cards: [
      {
        id: 'st-1',
        images: [
          '/src/assets/carousel3.jpg',
          '/src/assets/carousel1.jpg',
          '/src/assets/carousel2.jpg',
        ],
        title: 'Cindy ST 프로그램',
        content: 'Cindy ST는 여성 전용 탈모 치료 프로그램입니다. 여성의 특성을 고려한 맞춤형 치료를 제공합니다.',
      },
      {
        id: 'st-2',
        images: [
          '/src/assets/carousel4.jpg',
          '/src/assets/carousel2.jpg',
          '/src/assets/carousel3.jpg',
        ],
        title: 'ST 여성 특화',
        content: '여성의 호르몬 특성과 탈모 패턴을 분석하여 최적의 치료 방법을 제시합니다.',
      },
    ]
  }
};

export const ProgramCard = () => {
  const [selectedProgram, setSelectedProgram] = useState<string>('SS');
  const [initialIndex, setInitialIndex] = useState<number>(0);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    // localStorage에서 선택된 프로그램 확인
    const savedProgram = localStorage.getItem('selectedProgram');
    const savedIndex = localStorage.getItem('selectedCardIndex');
    
    if (savedProgram && programData[savedProgram as keyof typeof programData]) {
      // Header에서 직접 선택한 경우
      setSelectedProgram(savedProgram);
      if (savedIndex && !isNaN(Number(savedIndex))) {
        setInitialIndex(Number(savedIndex));
      } else {
        setInitialIndex(0);
      }
      // localStorage 정리
      localStorage.removeItem('selectedProgram');
      localStorage.removeItem('selectedCardIndex');
    } else {
      // 새로고침 또는 직접 접근한 경우 - SS가 기본 선택
      setSelectedProgram('SS');
      setInitialIndex(0);
    }
    
    setIsInitialized(true);
  }, []);

  const handleProgramSelect = (programType: string) => {
    setSelectedProgram(programType);
    setInitialIndex(0);
  };

  const currentProgram = programData[selectedProgram as keyof typeof programData];

  // 프로그램 타입별로 Carousel 인덱스 설정
  const getCarouselIndex = (programType: string) => {
    switch (programType) {
      case 'SS': return 0;
      case 'SC': return 0;
      case 'SR': return 0;
      case 'ST': return 0;
      default: return 0;
    }
  };

  // 초기화가 완료되지 않았으면 로딩 상태 표시
  if (!isInitialized) {
    return (
      <Container>
        <Title>프로그램 소개</Title>
        <div style={{ textAlign: 'center', padding: '40px' }}>로딩 중...</div>
      </Container>
    );
  }

  return (
    <Container>
      <Title>프로그램 소개</Title>
      
      <ProgramSelector>
        {Object.keys(programData).map((programType) => (
          <ProgramButton
            key={programType}
            $isActive={selectedProgram === programType}
            onClick={() => handleProgramSelect(programType)}
          >
            {programData[programType as keyof typeof programData].title}
          </ProgramButton>
        ))}
      </ProgramSelector>

      <MainCarousel 
        cards={currentProgram.cards} 
        initialIndex={initialIndex}
      />
    </Container>
  );
};
