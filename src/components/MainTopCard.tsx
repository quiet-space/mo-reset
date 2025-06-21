

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`;

const CarouselSlide = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ $active }) => ($active ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;

  gap: 10px;
`;



const Dot = styled.button<{ $active: boolean }>`
  min-height: 10px;
  min-width: 40px;

  border: none;
  padding: 0;

  border-radius: 8px;
  background: ${({ $active }) => ($active ? 'white' : 'rgba(255, 255, 255, 0.5)')};
  
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: white;
  }
`;

const images = [
  '/src/assets/carousel1.jpg',
  '/src/assets/carousel2.jpg',
  '/src/assets/carousel3.jpg',
  '/src/assets/carousel4.jpg',
];
const AUTO_SLIDE_INTERVAL = 10000; // 10초 

const useCarousel = (totalSlides: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % totalSlides);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return {
    currentSlide,
    setCurrentSlide,
  };
};

export const MainTopCard = () => {
  const { currentSlide, setCurrentSlide } = useCarousel(images.length);

  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <CarouselSlide key={index} $active={index === currentSlide}>
          <CarouselImage src={image} alt={`Carousel ${index + 1}`} />
        </CarouselSlide>
      ))}


      <DotContainer>
        {[0,1,2,3].map((page) => (
          <Dot
            key={page}
            $active={page === currentSlide}
            onClick={() => setCurrentSlide(page)}
          />
        ))}
      </DotContainer>

    </CarouselContainer>
  );
};