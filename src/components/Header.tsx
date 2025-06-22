import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdMenu, MdClose,  } from 'react-icons/md';

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
  // font-weight: bold;
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
  height: 50px;
  cursor: pointer;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const RightContainer = styled.div<{ $mobileOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: ${({ $mobileOpen }) => ($mobileOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 60px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 60px);
    background: #fff;
    z-index: 200;
    padding: 20px;
    box-sizing: border-box;
    overflow-y: auto;
  }
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.md};
  // font-weight: bold;
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
  background-image: url('/src/assets/kakao_logo.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;

  width: 30px;
  height: 30px;
  cursor: pointer;
  
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
      // 페이지 이동 후 스크롤을 위해 더 긴 지연 추가 (모바일 대응)
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 300);
    } else {
      // 이미 홈페이지에 있으면 바로 스크롤
      scrollToElement(sectionId);
    }
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  // 요소로 스크롤하는 헬퍼 함수
  const scrollToElement = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 60; // Header 높이
      const elementPosition = element.offsetTop - headerHeight;
      
      // 모바일 브라우저 호환성을 위한 스크롤 방식
      try {
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      } catch (error) {
        // fallback: 즉시 스크롤
        window.scrollTo(0, elementPosition);
      }
    }
  };

  // 홈으로 이동
  const scrollToTop = () => {
    // 현재 페이지가 홈페이지가 아니면 먼저 홈페이지로 이동
    if (window.location.pathname !== '/') {
      navigate('/');
      // 페이지 이동 후 스크롤을 위해 더 긴 지연 추가 (모바일 대응)
      setTimeout(() => {
        scrollToTopElement();
      }, 300);
    } else {
      // 이미 홈페이지에 있으면 바로 스크롤
      scrollToTopElement();
    }
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  // 맨 위로 스크롤하는 헬퍼 함수
  const scrollToTopElement = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      // fallback: 즉시 스크롤
      window.scrollTo(0, 0);
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
          onClick={() => {
            scrollToTop();
            navigate('/');
          }}
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
        <MenuItem onClick={scrollToTop}>처음으로</MenuItem>
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

        <MenuItem onClick={() => scrollToSection('info-section')}>문의사항</MenuItem>
        
        <ConsultIconButton 
          onClick={handleConsultClick}
          aria-label="상담하기"
        />
      </RightContainer>
    </HeaderContainer>
  );
};
