import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { MdMenu, MdClose, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const MOBILE_BREAKPOINT = '768px';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  padding: 0 20px;
  font-size: 20px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.body};
  position: relative;
`;

const Logo = styled.img`
  height: 40px;
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

const MenuItem = styled.a`
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
  & > a {
    display: block;
    width: 100%;
    padding: 10px 20px;
    color: #222;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    border-radius: 0;
    background: none;
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

export const Header = () => {
  const logo = '/src/assets/brand_logo.png';
  const logoAlt = 'brand_logo';
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    <HeaderContainer>
      <LeftContainer>
        <Logo
          src={logo}
          alt={logoAlt}
          onClick={() => {
            window.location.href = '/';
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
        <MenuItem href='/'>Home</MenuItem>
        <MenuItem href='/about'>기업소개</MenuItem>
        <DropdownWrapper ref={dropdownRef}>
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
                <MenuItem href='/contact'>파라스파 : SS</MenuItem>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MenuItem href='/contact'>모낭플란트 : SC</MenuItem>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MenuItem href='/contact'>모플란트 : SR</MenuItem>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MenuItem href='/contact'>Cindy : ST</MenuItem>
              </DropdownMenuItem>
            </DropdownMenu>
          )}
        </DropdownWrapper>
        <MenuItem href='/contact'>창업 및 교육</MenuItem>
        <MenuItem href='/contact'>문의사항</MenuItem>
      </RightContainer>
    </HeaderContainer>
  );
};
