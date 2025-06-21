import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { CarouselCard } from './CarouselCard';

interface CardData {
  id: string;
  images: string[];
  title: string;
  content: string;
}

interface MainCarouselProps {
  cards: CardData[];
  initialIndex?: number;
}

const CarouselWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 16px;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
`;

const CarouselTrack = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.4s ease-in-out;
  transform: translateX(-${props => props.currentIndex * 100}%);
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const CarouselSlide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 10;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background: white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:first-child {
    left: -24px;
  }

  &:last-child {
    right: -24px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;

    &:first-child {
      left: 8px;
    }

    &:last-child {
      right: 8px;
    }
  }
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

const Dot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#007bff' : '#ddd'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.active ? '#0056b3' : '#bbb'};
  }
`;

export const MainCarousel: React.FC<MainCarouselProps> = ({ cards, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (cards.length === 0) {
    return <CarouselWrapper>카드가 없습니다.</CarouselWrapper>;
  }

  return (
    <CarouselWrapper>
      <CarouselContainer>
        <CarouselTrack currentIndex={currentIndex}>
          {cards.map((card) => (
            <CarouselSlide key={card.id}>
              <CarouselCard
                images={card.images}
                title={card.title}
                content={card.content}
              />
            </CarouselSlide>
          ))}
        </CarouselTrack>

        {cards.length > 1 && (
          <>
            <NavigationButton
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              <IoChevronBack size={24} />
            </NavigationButton>
            <NavigationButton
              onClick={nextSlide}
              disabled={currentIndex === cards.length - 1}
            >
              <IoChevronForward size={24} />
            </NavigationButton>
          </>
        )}
      </CarouselContainer>

      {cards.length > 1 && (
        <CarouselDots>
          {cards.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </CarouselDots>
      )}
    </CarouselWrapper>
  );
}; 