import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MainCarousel } from './MainCarousel';

const Container = styled.div`
  padding: 40px 0 120px;
  background: #f8f9fa;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 40px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.md};
    margin-bottom: 24px;
  }

  h3 {
    margin: 0 8px;  
    display: inline-block;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProgramSectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
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
  border: none;
  border-radius: 0;

  background: transparent;
  border-bottom: 4px solid ${({ $isActive, theme }) => $isActive ? theme.colors.primary : 'transparent'};
  color: ${({ theme }) => theme.colors.text};
  padding: 12px 24px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
  margin-right: 4px;

  &:hover {
   border: none;
  border-radius: 0;

    background: ${({ $isActive, theme }) => $isActive ? theme.colors.primary : theme.colors.primaryHover};
    color: ${({ $isActive }) => $isActive ? 'white' : 'white'};
  }

  // 모바일 
  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
    margin-right: 2px;
  }
`;

// 프로그램별 데이터
const programData = {
  SS: {
    title: '파라스파 : SS',
    card: {
      id: 'ss-1',
      images: [
        'https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/ss2-1upYgC7xhfZPlVshGxZ6c3y1bHrWHZ.jpg',
        'https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/ss1-mQ8ZDdrh8O6cdNRf3Zp1Td5INsa5Fm.png',
      ],
      title: '파라스파 KEY POINT',
      content: `

      <h3>
      ✓ 탄산 클리닉
      </h3>
      <br />
      · 모리셋 탄산 클리닉은 모공을 막는 피지 얼룩을 제거하여 두피 혈액 촉진을 도모하며, 모발과 모공에 남아있는 샴푸 찌꺼기나 염색 잔여물 또는 미세먼지를 말끔히 제거하여 헤모글로빈 모발 클리닉의 흡수율을 높여줍니다. 
      <br />
      · 모리셋 탄산 클리닉은 단순히 두피 스케일링에만 집중하는 것이 아닌 두피 면역력을 키울 수 있도록 줄기세포까지 영양투하하는 솔루션입니다. 
      <br />
      · 탄산 클리닉에 주가 되는 탄산 성분은 모발 내 이산화탄소를 일시적으로 증가시켜 두피의 산소 흡수율을 높이고, 혈관을 확장하여 혈액순

      <br />
      <br />
      <h3>
      ✓ 헤모글로빈 모발 클리닉 
      </h3>
      <br />
      · 산소를 운반하는 적혈구의 주 구성 요소인 헤모글로빈은 단백질과 결합하여 손상된 모발을 회복시킵니다. 
      <br />
      · 드라이, 염색, 매직 등을 자주하는 고객님께 효과가 큰 프리미엄 모발 클리닉입니다. 
      <br />
      <br />      


      <h3>
      ✓ 추천대상
      </h3>
      <br />
      · 샴푸를해도 피지, 각질이 제거가 안되시는 분
      <br />
      · 염색이나 펌을 주기적으로 하시는 분
      <br />
      · 두피가 가렵고 기름지는 지루성두피이신 분
      <br />
      <br />

      <span>
      <h2>20대 중반 여성</h2>
      · 두피 상태: 건조, 각질, 가려움
      <br />
      ✓ 염색 잔여물 제거
      <br />
      ✓ 각질 제거
      <br />
      <br />

      <h2>30대 중반 여성</h2>
      · 두피 상태: 피지, 가려움
      <br />
      ✓ 피지 산화물 제거
      <br />
      ✓ 샴푸 잔여물 제거
      <br />
      ✓ 각질 제거
      <br />
      <br />



      <h2>40대 여성</h2>
      · 두피 상태: 탈모 진행, 건선, 가려움, 흰머리 염색 3주 1회 진행 
      <br />
      ✓ 각질 제거
      <br />
      ✓ 염색 잔여물 제거 
      <br />
      <br />

      <h2>10대 여성</h2>
      · 두피 상태: 피지, 호르몬 냄새, 모발 끈적임
      <br />
      ✓ 피지 산화물 제거
      <br />
      ✓ 샴푸 잔여물 제거
      <br />
      ✓ 헤어 제품 제거
      <br />
      <br />
      </span>

      `,
    },
  },
  SC: {
    title: '모낭플란트 : SC',
    card:{
      id: 'ss-1',
      images: [
        'https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/sc1-VIGiYC7Al3D01XNleH0LcOkFbULSl8.png',
   
      ],
      title: "모낭플란트란?",
      content: `
      모낭플란트는 스위스, 덴마크, 독일의 두피 건강을 25년의 연구개발을 통해 개발된 모리셋 특허 기술로써 탈모 현상을 빠르고 최적의 결과로 관리하는 활성성분의 고유한 조합과 균형을 갖춘 시스템입니다. 
      <br />
      <br />
      진피층 모낭 주변까지 쏘팔메토 줄기세포가 전달되는 두피 전용 고출력 저진동 하이진 니들로 60초당 15,000번 미세순환 시켜 상처없는 관리로 모리셋의 특화된 기술입니다. 
      <br />
모낭플란트는 전체탈모 기준 약 40분 정도 소요되며, 탈모가 고민인 부위를 정확하게 자극하여 관리합니다.
      
      `,
    },
  },
  SR: {
    title: '모플란트 : SR',
    card: {
      id: 'ss-1',
      images: [
        'https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/sc2-iH8xk5Hb2u7TuKynzv2trVv06skSIM.jpg',
        'https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/sc3-BfbYAKGTfjmg0lKrUAWC6S4qDzO7f2.jpg',
        'https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/sc4-0v6vjxWmhOEgv8XMwugTn7wYW4cVrB.jpg',
        'https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/sc5-a25Xfr8PXlvlY2tWfBOescC0GsSF6G.jpg',
        'https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/sc6-Olx6t0ZimVO8tmV94RHwQTCsuoKaOR.jpg',
        'https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/sc7-fMzgbKRBLjmjgcbIbWnDF9YUYacuVA.jpg',
      ],
      title: '모플란트 : SR',
      content: `
      모낭 플란트 이후 요요현상이 없이 모발의 성장기를 지연시켜 최소 2년에서 7년 까지 모발굵기, 밀도, 윤기, 흰머리 지연 시켜 주는 단계
      <br />
      <br />
      모플란트는 스위스, 덴마크, 독일의 두피 건강을 25년의 연구개발을 통해 개발된 모리셋 특허 기술로써 탈모 현상을 빠르고 최적의 결과로 관리하는 활성성분의 고유한 조합과 균형을 갖춘 시스템입니다. 
      <br />
      <br />
      남녀 모두에게 탈모개선효과가 입증된 유럽 줄기세포로  
      모낭플란트 단계이후 요요현상없이 모발탈락을 지연시키고 
      모발 밀도, 굵기, 윤기, 흰머리 억제 및 차단 유지해주는 모발강화 솔루션입니다
      유지해주는 모발강화 솔루션입니다

      <br />
      <br />
      
      <span>

       <h2>50대 여성</h2>
      · 가르마 확산성 탈모 
      <br />
      · 모플란트 관리후 모발빠짐이 눈에 띄게 줄어듬 ,모발건조함이 덜하고 흰머리 억제효과
      <br />
      <br />

       <h2>40대 남성</h2>
      · 유전적 O자 남성탈모 
      <br />
      · 모플란트 관리 후 모발빠짐 덜함,정수리 밀도 보강
      <br />
      <br />

          <h2>40대 여성</h2>
      · 유전적 모발 약함 고민으로 모플란트 관리 후 밀도보강,모발 굵어짐
      <br />
      <br />

          <h2>50대 여성</h2>
      · 유전적 O자 남성탈모 
      <br />
      · 20년 넘게 새치커버 염색을 해오다 모플란트 관리 후 염색주기가 길어짐
      <br />
      <br />

      </span>
      `,
    },
  },
  ST: {
    title: 'Cindy : ST',
    card: {
      id: 'ss-1',
      images: [
        'https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/st1-y5P0PGNupLZy2CWRvzU2WWLkJKFPb3.jpg',
        'https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/st2-PYVR0Fg0PjroKlEcwYfRfQbMvdZN2S.png',
      ],
      title: 'Cindy : ST',
      content: `
      더 자세한 내용은 본사 문의 부탁드립니다.
      `,
    },
  }
};

export const ProgramCard = () => {
  const [selectedProgram, setSelectedProgram] = useState<string>('SS');
  const [initialIndex, setInitialIndex] = useState<number>(0);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('프로그램 소개');

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

  useEffect(() => {
    switch (selectedProgram) {
      case 'SS':
        setTitle(

`
두피의 원인과 증상을 정확히 파악해 
<br />
두피 유수분 밸런스와 피지산화물을 제거하여 두피환경을 개선하는 프로그램`

        );
        break;
      case 'SC':
        setTitle(
`
 모낭까지 영양분을 주입시키는 국내유일 비침습 탈모 특허기술
<br />
탈모완화에 도움되는 쏘팔메토 줄기세포를 두피에 투하하여
<br />
약해진 헤어사이클을 정상으로 되돌려 발모 촉진
`


        );
        break;
      case 'SR':
        setTitle(`
          모낭 플란트 이후 요요현상이 없이 모발의 성장기를 지연시켜
<br />
최소 2년에서 7년 까지 모발굵기, 밀도, 윤기, 흰머리 지연시키는 단계
          `);
        break;
      case 'ST':
        setTitle(``);
        break;
      default:
        setTitle('프로그램 소개');
        break;
    }

  }, [selectedProgram]);

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
            <ProgramSectionTitle>프로그램 소개</ProgramSectionTitle>

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

<div>
      <Title dangerouslySetInnerHTML={{ __html: title }} />

      <MainCarousel 
        card={currentProgram.card} 
        initialIndex={initialIndex}
      />
      </div>
    </Container>
  );
};
