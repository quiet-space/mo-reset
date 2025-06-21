import React from 'react';
import styled from 'styled-components';
import { ImageCarousel } from './ImageCarousel';

interface CarouselCardProps {
  images: string[];
  title: string;
  content: string;
}

const CardContainer = styled.div`
  display: flex;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    min-width: unset;
    width: 100%;
    height: auto;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: #333;
  margin: 0 0 16px 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

const Content = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin: 0;
  flex: 1;

  h3 {
    margin-left:8px;
    margin-bottom:8px;
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    position: relative;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 60%;
      background-color: ${({ theme }) => `${theme.colors.primary}80`};
      z-index: -1;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CarouselCard: React.FC<CarouselCardProps> = ({
  images,
  title,
  content,
}) => {
  return (
    <CardContainer>
      <ImageSection>
        <ImageCarousel images={images} />
      </ImageSection>

      <ContentSection>
        <Title>{title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </ContentSection>
    </CardContainer>
  );
}; 