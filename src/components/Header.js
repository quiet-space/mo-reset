import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from "../img/logo.png";
import instagram from "../img/instagram.png";
import kakao from "../img/kakao.png";
import naver from "../img/naver.png";

const HeaderContainer = styled.header`
  background-color: transparent !important;
  padding: 2rem 1rem !important;
  width: 100% !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  z-index: 1000 !important;
  position: relative !important;
`;
const LinkContainer = styled.div`
  display: flex !important;
  gap: 4rem !important;

  @media (max-width: 768px) {
    display: none !important;
  }
`;
const LinkText = styled(Link)`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text);
  text-decoration: none;
  border-bottom: ${(p) =>
    p.$active ? "4px solid #F7C84C" : "2px solid transparent"};
`;
const LinkButton = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  border-bottom: ${(p) =>
    p.$active ? "4px solid #F7C84C" : "2px solid transparent"};
`;
const NavItemGroup = styled.div`
  position: relative;
`;
const DropdownMenu = styled.div`
  position: absolute;
  top: 2.2rem;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  padding: 0.5rem 0;
  min-width: 12rem;
  z-index: 1000;
`;
const DropdownItem = styled(Link)`
  padding: 0.6rem 1rem;
  color: #222;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
const LogoLink = styled.a`
  position: absolute;
  left: 2rem;
  top: 0.5rem;

  @media (max-width: 768px) {
    left: 1rem;
    top: 0.3rem;
    
    img {
      height: 60px !important;
    }
  }
`;
const SNSContainer = styled.div`
  position: absolute !important;
  right: 2rem !important;
  top: 1.5rem !important;
  display: flex !important;
  justify-content: center !important;
  gap: 1.8rem !important;

  @media (max-width: 768px) {
    display: none !important;
  }
`;

const HamburgerButton = styled.button`
  display: none !important;
  position: absolute !important;
  right: 1rem !important;
  top: 1rem !important;
  background: none !important;
  border: none !important;
  cursor: pointer !important;
  padding: 0.5rem !important;
  z-index: 1001 !important;

  @media (max-width: 768px) {
    display: block !important;
  }

  .hamburger-line {
    width: 25px !important;
    height: 3px !important;
    background-color: var(--color-text) !important;
    margin: 5px 0 !important;
    transition: 0.3s !important;
    border-radius: 2px !important;
  }

  &.active .hamburger-line:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px) !important;
  }

  &.active .hamburger-line:nth-child(2) {
    opacity: 0 !important;
  }

  &.active .hamburger-line:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px) !important;
  }
`;

const MobileMenu = styled.div`
  display: none !important;
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100vh !important;
  background-color: rgba(0, 0, 0, 0.9) !important;
  z-index: 1000 !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  gap: 2rem !important;
  opacity: 0 !important;
  visibility: hidden !important;
  transition: opacity 0.3s ease, visibility 0.3s ease !important;

  &.active {
    opacity: 1 !important;
    visibility: visible !important;
  }

  @media (max-width: 768px) {
    display: flex !important;
  }
`;

const MobileMenuItem = styled(Link)`
  color: white !important;
  text-decoration: none !important;
  font-size: 1.5rem !important;
  font-weight: 600 !important;
  transition: background-color 0.3s ease !important;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }

  &.active {
    color: #F7C84C !important;
    border-bottom: 2px solid #F7C84C !important;
  }
`;

const MobileSubMenu = styled.div`
  display: flex !important;
  flex-direction: column !important;
  gap: 1rem !important;
  margin-top: 1rem !important;
`;

const MobileSubMenuItem = styled(Link)`
  color: rgba(255, 255, 255, 0.8) !important;
  text-decoration: none !important;
  font-size: 1.2rem !important;
  padding: 0.5rem 1rem !important;
  transition: background-color 0.3s ease !important;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`;

const MobileSNSContainer = styled.div`
  display: flex !important;
  gap: 2rem !important;
  margin-top: 2rem !important;
`;

const MobileSNSLink = styled.a`
  transition: transform 0.3s ease !important;

  &:hover {
    transform: scale(1.1) !important;
  }
`;

export const Header = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const aboutRef = useRef(null);
  const { pathname } = useLocation();
  const isAboutActive =
    pathname.startsWith("/about") ||
    pathname.startsWith("/missions") ||
    pathname.startsWith("/plant");
  const isProgramActive = pathname.startsWith("/program");
  const isEducationActive = pathname.startsWith("/education");
  const isLocationActive = pathname.startsWith("/location");
  const hoverCloseTimerRef = useRef(null);

  const clearHoverCloseTimer = () => {
    if (hoverCloseTimerRef.current) {
      clearTimeout(hoverCloseTimerRef.current);
      hoverCloseTimerRef.current = null;
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setIsAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearHoverCloseTimer();
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileAboutOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileAboutOpen(false);
  };

  const toggleMobileAbout = () => {
    setIsMobileAboutOpen(!isMobileAboutOpen);
  };

  return (
    <>
      <HeaderContainer>
        <LogoLink href="/">
          <img src={logo} alt="logo" height={75} />
        </LogoLink>

        <LinkContainer>
          <NavItemGroup
            ref={aboutRef}
            onMouseEnter={() => {
              clearHoverCloseTimer();
              setIsAboutOpen(true);
            }}
            onMouseLeave={() => {
              clearHoverCloseTimer();
              hoverCloseTimerRef.current = setTimeout(() => {
                setIsAboutOpen(false);
                hoverCloseTimerRef.current = null;
              }, 200);
            }}
          >
            <LinkButton
              type="button"
              aria-haspopup="menu"
              aria-expanded={isAboutOpen}
              onClick={() => {
                clearHoverCloseTimer();
                setIsAboutOpen((v) => !v);
              }}
              $active={isAboutActive}
            >
              기업 소개
            </LinkButton>
            {isAboutOpen && (
              <DropdownMenu role="menu">
                <DropdownItem
                  to="/about"
                  role="menuitem"
                  onClick={() => setIsAboutOpen(false)}
                >
                  개요
                </DropdownItem>
                <DropdownItem
                  to="/missions"
                  role="menuitem"
                  onClick={() => setIsAboutOpen(false)}
                >
                  경영이념
                </DropdownItem>
                <DropdownItem
                  to="/plant"
                  role="menuitem"
                  onClick={() => setIsAboutOpen(false)}
                >
                  모낭플란트
                </DropdownItem>
              </DropdownMenu>
            )}
          </NavItemGroup>
          <LinkText to="/program" $active={isProgramActive}>
            프로그램 소개
          </LinkText>
          <LinkText to="/education" $active={isEducationActive}>
            창업 및 교육
          </LinkText>
          <LinkText to="/location" $active={isLocationActive}>
            오시는 길
          </LinkText>
        </LinkContainer>

        {/* PC SNS */}
        <SNSContainer>
          <a href="https://pf.kakao.com/_bNapxj" target="_blank">
            <img src={kakao} alt="kakao" height={30} />
          </a>
          <a href="https://naver.me/xoH8tl8W" target="_blank">
            <img src={naver} alt="naver" height={30} />
          </a>
          <a href="https://www.instagram.com/mo_reset/" target="_blank">
            <img src={instagram} alt="instagram" height={30} />
          </a>
        </SNSContainer>

        {/* 햄버거 버튼 */}
        <HamburgerButton
          className={isMobileMenuOpen ? "active" : ""}
          onClick={toggleMobileMenu}
          aria-label="메뉴 열기"
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </HamburgerButton>
      </HeaderContainer>

      {/* 모바일 메뉴 */}
      <MobileMenu className={isMobileMenuOpen ? "active" : ""}>
        <div>
          <MobileMenuItem
            to="#"
            onClick={(e) => {
              e.preventDefault();
              toggleMobileAbout();
            }}
            className={isAboutActive ? "active" : ""}
          >
            기업 소개
          </MobileMenuItem>
          {isMobileAboutOpen && (
            <MobileSubMenu>
              <MobileSubMenuItem
                to="/about"
                onClick={closeMobileMenu}
              >
                개요
              </MobileSubMenuItem>
              <MobileSubMenuItem
                to="/missions"
                onClick={closeMobileMenu}
              >
                경영이념
              </MobileSubMenuItem>
              <MobileSubMenuItem
                to="/plant"
                onClick={closeMobileMenu}
              >
                모낭플란트
              </MobileSubMenuItem>
            </MobileSubMenu>
          )}
        </div>
        
        <MobileMenuItem
          to="/program"
          onClick={closeMobileMenu}
          className={isProgramActive ? "active" : ""}
        >
          프로그램 소개
        </MobileMenuItem>
        
        <MobileMenuItem
          to="/education"
          onClick={closeMobileMenu}
          className={isEducationActive ? "active" : ""}
        >
          창업 및 교육
        </MobileMenuItem>
        
        <MobileMenuItem
          to="/location"
          onClick={closeMobileMenu}
          className={isLocationActive ? "active" : ""}
        >
          오시는 길
        </MobileMenuItem>

        {/* 모바일 SNS */}
        <MobileSNSContainer>
          <MobileSNSLink href="https://pf.kakao.com/_bNapxj" target="_blank">
            <img src={kakao} alt="kakao" height={40} />
          </MobileSNSLink>
          <MobileSNSLink href="https://naver.me/xoH8tl8W" target="_blank">
            <img src={naver} alt="naver" height={40} />
          </MobileSNSLink>
          <MobileSNSLink href="https://www.instagram.com/mo_reset/" target="_blank">
            <img src={instagram} alt="instagram" height={40} />
          </MobileSNSLink>
        </MobileSNSContainer>
      </MobileMenu>
    </>
  );
};
