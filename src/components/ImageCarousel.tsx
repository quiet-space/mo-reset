'use client'

import React, { useState } from 'react';
import styled from 'styled-components';
import { isVideoFile } from '../utils/vercelBlob';

interface ImageCarouselProps {
  images: string[];
}

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 65vh;
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
  padding: 10px;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CarouselVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  width: 50px;
  height: 8px;
  padding: 0;
  border: 1px solid ${props => props.active ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.2)'};
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  
  cursor: pointer;
  transition: background 0.2s;
`;

const MediaContent = ({ src, alt }: { src: string; alt: string }) => {
  const isVideo = isVideoFile(src);
  
  if (isVideo) {
    return (
      <CarouselVideo
        src={src}
        autoPlay={true}
        muted={true}
        loop={true}
        controls={false}
      />
    );
  }
  
  return <CarouselImage src={src} alt={alt} />;
};

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
            <MediaContent src={image} alt={`Slide ${index + 1}`} />
          </CarouselSlide>
        ))}
      </CarouselTrack>

      {images.length > 1 && (
          <CarouselDots>
            {images.map((_, index) => (
              <Dot
                key={index}
                active={index === currentIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </CarouselDots>
      )}
    </CarouselContainer>
  );
};