import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { MainTopCard } from './components/MainTopCard';
import { BrandCard } from './components/BrandCard';
import { ProgramCard } from './components/ProgramCard';
import { ProductSectionComponent } from './components/ProductCard';
import { Footer } from './components/Footer';
import { InfoCard } from './components/InfoCard';
import { Member } from './pages/Member';
import { Inquiry } from './pages/Inquiry';

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  padding-top: 60px; /* Header 높이만큼 상단 여백 추가 */
`;

const HomePage = () => {
  useEffect(() => {
    // 홈페이지 진입 시 최상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ margin: 0 }}>
      <MainTopCard />

      <div id="brand-section" style={{ margin: 0 }}>
        <BrandCard />
      </div>
      
      <div id="program-section" style={{ margin: 0 }}>
        <ProgramCard />
      </div>
      
      <ProductSectionComponent />
      
      <div id="info-section" style={{ margin: 0 }}>
        <InfoCard />
      </div>
      
      <Footer />
    </div>
  );
};

function App() {
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = 60;

      // 각 섹션의 위치 계산
      const programSection = document.getElementById('program-section');
      const productSection = document.getElementById('product-section');
      const infoCard = document.querySelector('[data-section="info"]');

      if (programSection && scrollPosition >= programSection.offsetTop - headerHeight && 
          scrollPosition < (productSection?.offsetTop || Infinity) - headerHeight) {
        setHeaderBackgroundColor('#f8f9fa'); // ProgramCard 배경색
      } else if (productSection && scrollPosition >= productSection.offsetTop - headerHeight && 
                 scrollPosition < (infoCard?.getBoundingClientRect().top || Infinity) + scrollPosition - headerHeight) {
        setHeaderBackgroundColor('#f8f9fa'); // ProductSection 배경색
      } else if (infoCard && scrollPosition >= infoCard.getBoundingClientRect().top + scrollPosition - headerHeight) {
        setHeaderBackgroundColor('#f8f9fa'); // InfoCard 배경색 (linear-gradient의 시작 색상)
      } else {
        setHeaderBackgroundColor(undefined); // 기본 배경색
      }
    };

    window.addEventListener('scroll', handleScroll);
    // 초기 실행
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <AppContainer>
        <Header backgroundColor={headerBackgroundColor} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/member" element={<Member />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
