import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdMenu, MdClose, MdKeyboardArrowDown, MdKeyboardArrowUp, MdPhone } from 'react-icons/md';

const MOBILE_BREAKPOINT = '768px';

const HeaderContainer = styled.header<{ $backgroundColor?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  background-color: ${({ $backgroundColor, theme }) => $backgroundColor || theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  padding: 0 20px;
  font-size: 20px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.body};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const RightContainer = styled.div<{ $mobileOpen?: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: ${({ $mobileOpen }) => ($mobileOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 80vw;
    max-width: 320px;
    height: 100vh;
    background: #fff;
    color: #222;
    box-shadow: -2px 0 16px rgba(0,0,0,0.12);
    padding: 80px 24px 24px 24px;
    z-index: 200;
    transition: transform 0.3s;
  }
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.body};
  text-decoration: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background 0.2s;
  background: none;
  border: none;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    color: #222;
    font-size: 18px;
    width: 100%;
    justify-content: flex-start;
    background: none;
    &:hover {
      background: #f5f5f5;
    }
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.body};
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background 0.2s;
  &:hover, &:focus {
    background: ${({ theme }) => theme.colors.primaryHover};
    outline: none;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    color: #222;
    font-size: 18px;
    width: 100%;
    justify-content: flex-start;
    background: none;
    &:hover {
      background: #f5f5f5;
    }
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  min-width: 180px;
  background: #fff;
  color: #222;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  padding: 8px 0;
  margin: 0;
  z-index: 100;
  list-style: none;
`;

const DropdownMenuItem = styled.li`
  width: 100%;
  & > button {
    display: block;
    width: 100%;
    padding: 10px 20px;
    color: #222;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    border-radius: 0;
    background: none;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background: #f5f5f5;
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 300;
    margin-left: 8px;
  }
`;

const Overlay = styled.div`
  display: none;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.3);
    z-index: 150;
  }
`;

const ConsultIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-left: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 50px;
    height: 50px;
    margin: 10px 0;
  }
`;

interface HeaderProps {
  backgroundColor?: string;
}

export const Header = ({ backgroundColor }: HeaderProps) => {
  const navigate = useNavigate();
  const logo = '/src/assets/brand_logo.png';
  const logoAlt = 'brand_logo';
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 스크롤 이동 함수
  const scrollToSection = (sectionId: string) => {
    // 현재 페이지가 홈페이지가 아니면 먼저 홈페이지로 이동
    if (window.location.pathname !== '/') {
      navigate('/');
      // 페이지 이동 후 스크롤을 위해 약간의 지연 추가
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 60; // Header 높이
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // 이미 홈페이지에 있으면 바로 스크롤
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 60; // Header 높이
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  // 홈으로 이동
  const scrollToTop = () => {
    // 현재 페이지가 홈페이지가 아니면 먼저 홈페이지로 이동
    if (window.location.pathname !== '/') {
      navigate('/');
      // 페이지 이동 후 스크롤을 위해 약간의 지연 추가
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      // 이미 홈페이지에 있으면 바로 스크롤
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  // 프로그램 선택 시 해당 프로그램으로 이동
  const scrollToProgram = (programType: string) => {
    // 현재 페이지가 홈페이지가 아니면 먼저 홈페이지로 이동
    if (window.location.pathname !== '/') {
      navigate('/');
      // 페이지 이동 후 스크롤을 위해 약간의 지연 추가
      setTimeout(() => {
        const element = document.getElementById('program-section');
        if (element) {
          const headerHeight = 60; // Header 높이
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
        // 프로그램 타입을 localStorage에 저장하여 ProgramCard에서 사용
        localStorage.setItem('selectedProgram', programType);
        // 프로그램별 카드 인덱스도 저장
        const cardIndex = getProgramCardIndex(programType);
        localStorage.setItem('selectedCardIndex', cardIndex.toString());
      }, 100);
    } else {
      // 이미 홈페이지에 있으면 바로 스크롤
      const element = document.getElementById('program-section');
      if (element) {
        const headerHeight = 60; // Header 높이
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
      // 프로그램 타입을 localStorage에 저장하여 ProgramCard에서 사용
      localStorage.setItem('selectedProgram', programType);
      // 프로그램별 카드 인덱스도 저장
      const cardIndex = getProgramCardIndex(programType);
      localStorage.setItem('selectedCardIndex', cardIndex.toString());
    }
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  // 프로그램별 카드 인덱스 반환
  const getProgramCardIndex = (programType: string) => {
    switch (programType) {
      case 'SS': return 0;
      case 'SC': return 0;
      case 'SR': return 0;
      case 'ST': return 0;
      default: return 0;
    }
  };

  // 페이지 이동 함수
  const navigateToPage = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  // 상담하기 버튼 클릭 핸들러
  const handleConsultClick = () => {
    window.open('https://pf.kakao.com/_bNapxj', '_blank', 'noopener,noreferrer');
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  // 모바일 메뉴 외부 클릭 시 닫기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const rightMenu = document.getElementById('right-menu-mobile');
      if (
        mobileMenuOpen &&
        rightMenu &&
        !rightMenu.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <HeaderContainer $backgroundColor={backgroundColor}>
      <LeftContainer>
        <Logo
          src={logo}
          alt={logoAlt}
          onClick={() => navigate('/')}
        />
      </LeftContainer>
      
      <HamburgerButton
        aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        onClick={() => setMobileMenuOpen(open => !open)}
      >
        {mobileMenuOpen ? (
          <MdClose size={48} color='#222' />
        ) : (
          <MdMenu size={48} color='#222' />
        )}
      </HamburgerButton>

      {mobileMenuOpen && <Overlay onClick={() => setMobileMenuOpen(false)} />}
      <RightContainer id='right-menu-mobile' $mobileOpen={mobileMenuOpen}>
        <MenuItem onClick={scrollToTop}>Home</MenuItem>
        <MenuItem onClick={() => scrollToSection('brand-section')}>기업소개</MenuItem>
        {/* <DropdownWrapper ref={dropdownRef}>
          <DropdownButton
            onClick={() => setDropdownOpen(open => !open)}
            aria-haspopup='true'
            aria-expanded={dropdownOpen}
          >
            프로그램 소개
            {dropdownOpen ? (
              <MdKeyboardArrowUp size={20} style={{ marginLeft: '6px' }} />
            ) : (
              <MdKeyboardArrowDown size={20} style={{ marginLeft: '6px' }} />
            )}
          </DropdownButton>
          {dropdownOpen && (
            <DropdownMenu>
              <DropdownMenuItem>
                <button onClick={() => scrollToProgram('SS')}>파라스파 : SS</button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button onClick={() => scrollToProgram('SC')}>모낭플란트 : SC</button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button onClick={() => scrollToProgram('SR')}>모플란트 : SR</button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button onClick={() => scrollToProgram('ST')}>Cindy : ST</button>
              </DropdownMenuItem>
            </DropdownMenu>
          )}
        </DropdownWrapper> */}
        <MenuItem onClick={() => scrollToSection('program-section')}>프로그램 소개</MenuItem>
        <MenuItem onClick={() => scrollToSection('product-section')}>제품 소개</MenuItem>
        <MenuItem onClick={() => navigateToPage('/member')}>창업 및 교육</MenuItem>
        <MenuItem onClick={() => navigateToPage('/inquiry')}>문의사항</MenuItem>
        <ConsultIconButton 
          onClick={handleConsultClick}
          aria-label="상담하기"
        >
          <MdPhone size={20} />
        </ConsultIconButton>
      </RightContainer>
    </HeaderContainer>
  );
};
