import styled from 'styled-components';
import { useState, useEffect } from 'react';

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

const TextBox = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  opacity: ${({ $active }) => ($active ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;
  backdrop-filter: blur(10px);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const Content = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
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

const carouselData = [
  {
    title: "혁신적인 솔루션",
    content: "최신 기술로 고객의 비즈니스 성장을 지원합니다. 전문적인 서비스로 더 나은 내일을 만들어가세요."
  },
  {
    title: "전문가 팀과 함께",
    content: "풍부한 경험을 가진 전문가들이 최적의 솔루션을 제공합니다. 신뢰할 수 있는 파트너가 되어드립니다."
  },
  {
    title: "지속적인 성장",
    content: "고객과 함께 성장하는 기업이 되겠습니다. 지속적인 혁신과 발전으로 더 큰 가치를 창출합니다."
  },
  {
    title: "고객 중심 서비스",
    content: "고객의 니즈를 최우선으로 생각합니다. 맞춤형 서비스로 최고의 만족도를 제공합니다."
  }
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
          <TextBox $active={index === currentSlide}>
            <Title>{carouselData[index].title}</Title>
            <Content>{carouselData[index].content}</Content>
          </TextBox>
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