import React, { useState } from 'react';
import styled from 'styled-components';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface ImageCarouselProps {
  images: string[];
}

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
`;

const CarouselTrack = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-${props => props.currentIndex * 100}%);
  height: 100%;
`;

const CarouselSlide = styled.div`
  min-width: 100%;
  height: 100%;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  &:first-child {
    left: 10px;
  }

  &:last-child {
    right: 10px;
  }
`;

const CarouselDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 2;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: background 0.2s;
`;

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return <CarouselContainer>이미지가 없습니다.</CarouselContainer>;
  }

  return (
    <CarouselContainer>
      <CarouselTrack currentIndex={currentIndex}>
        {images.map((image, index) => (
          <CarouselSlide key={index}>
            <CarouselImage src={image} alt={`Slide ${index + 1}`} />
          </CarouselSlide>
        ))}
      </CarouselTrack>

      {images.length > 1 && (
        <>
          <CarouselButton onClick={prevSlide}>
            <IoChevronBack size={20} />
          </CarouselButton>
          <CarouselButton onClick={nextSlide}>
            <IoChevronForward size={20} />
          </CarouselButton>
          <CarouselDots>
            {images.map((_, index) => (
              <Dot
                key={index}
                active={index === currentIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </CarouselDots>
        </>
      )}
    </CarouselContainer>
  );
}; 