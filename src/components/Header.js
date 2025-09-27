import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from "../img/logo.png";
import instagram from "../img/instagram.png";
import kakao from "../img/kakao.png";
import naver from "../img/naver.png";

const HeaderContainer = styled.header`
  background-color: transparent;

  padding: 2rem 1rem;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;
`;
const LinkContainer = styled.div`
  display: flex;
  gap: 4rem;
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
  border-radius: 10px;
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
`;
const SNSContainer = styled.div`
  position: absolute;
  right: 2rem;
  top: 1.5rem;

  display: flex;
  justify-content: center;
  gap: 1.8rem;
`;

export const Header = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
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

  return (
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

      {/* sns  */}

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
    </HeaderContainer>
  );
};
