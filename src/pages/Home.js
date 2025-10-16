import { PageTitle } from "../components/PageTitle";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #000;
  isolation: isolate; /* ✅ 새로운 stacking context 생성 */
`;

const TitleWrap = styled.div`
  position: absolute;
  top: 5rem;
  left: 0;
  right: 0;
  z-index: 3;

  @media (max-width: 768px) {
    top: 3rem;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  will-change: transform;
  z-index: 1;
`;

const CarouselSlide = styled.div`
  min-width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 2;

  @media (max-width: 768px) {
    bottom: 2rem;
  }
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  background: ${({ $active }) => ($active ? "white" : "transparent")};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background: white;
    transform: scale(1.2);
  }
`;

const images = [
  "https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/carousel1-UCfhacew5Eazn4X1z4xANWrKolqCaH.jpg",
  "https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/carousel2-6rlWyf519v9mwj6u8qmXXjFDpcj4LG.jpg",
  "https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/carousel3-mRBSmIt9LugsUUgxZeQLBU1MucXq8y.jpg",
  "https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/carousel4-6juw2TN0XP8avHxDSLvQRxtFVCuOY1.jpg",
];

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);

  // 자동 슬라이드 (5초마다)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // 이미지가 처음부터 보이도록 첫 렌더 시 강제 리플로우
  useEffect(() => {
    // transform을 적용하는 노드가 DOM에 붙은 뒤 한 프레임 뒤에 진행
    const id = requestAnimationFrame(() => setTranslateX(0));
    return () => cancelAnimationFrame(id);
  }, []);

  // 드래그 시작
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.type === "mousedown" ? e.clientX : e.touches[0].clientX);
  };

  // 드래그 중
  const handleDragMove = (e) => {
    if (!isDragging) return;

    const currentX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  // 드래그 종료
  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    // 50px 이상 드래그하면 슬라이드 변경
    if (translateX > 50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (translateX < -50 && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }

    setTranslateX(0);
  };

  return (
    <Container
      ref={containerRef}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <CarouselWrapper
        style={{
          transform: `translateX(calc(${
            -currentIndex * 100
          }% + ${translateX}px))`,
          transition: isDragging ? "none" : "transform 0.8s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <CarouselSlide key={index}>
            <SlideImage
              src={image}
              alt={`슬라이드 ${index + 1}`}
              loading="eager"
            />
          </CarouselSlide>
        ))}
      </CarouselWrapper>

      <TitleWrap>
        <PageTitle subtitle="당신의 두피를 스위스 과학으로 되살리다." />
      </TitleWrap>

      <Indicators>
        {images.map((_, index) => (
          <Indicator
            key={index}
            $active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </Indicators>
    </Container>
  );
};
