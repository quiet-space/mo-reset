import React from 'react';
import styled from 'styled-components';
import { CarouselCard } from './CarouselCard';

interface CardData {
  id: string;
  images: string[];
  title: string;
  content: string;
}

interface MainCarouselProps {
  card: CardData;
  initialIndex?: number;
}

const CarouselWrapper = styled.div`
  width: 90%;
  height: 70%;

  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 16px;
  }
`;


export const MainCarousel: React.FC<MainCarouselProps> = ({ card }) => {
  return (
    <CarouselWrapper>
      <CarouselCard
        images={card.images}
        title={card.title}
        content={card.content}
      />
    </CarouselWrapper>
  );
}; 