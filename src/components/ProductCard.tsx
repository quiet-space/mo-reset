import { useState } from 'react';
import styled from 'styled-components';

interface Product {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

// ProductSection 컨테이너
export const ProductSection = styled.section`
  height: 100vh;
  background: #f8f9fa;
  padding: 40px 0;
`;

// ProductSectionTitle
export const ProductSectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

// 반응형 그리드를 위한 컨테이너
export const ProductGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  
  /* 모바일: 세로로 나열 */
  grid-template-columns: 1fr;
  
  /* PC: 3열 그리드 (5개 아이템) */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 
      "item1 item2 item3"
      ". item4 item5 .";
    max-width: 1200px;
    margin: 0 auto;
    justify-content: center;
    align-content: center;
  }
`;

const CardContainer = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  transition: transform 0.2s ease;
  cursor: pointer;
  min-height: 400px;

  padding: 30px 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: contain;
  padding: 10px;
`;

const ProductName = styled.h3`
  padding-left: ${({ theme }) => theme.spacing.md};
  padding-top: 30px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textLight};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textLight};
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const PopupTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PopupDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const ProductGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
`;

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleProductNameClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsPopupOpen(false);
    }
  };

  return (
    <>
      <CardContainer>
        <ProductImage src={product.image} alt={product.name} />
        <ProductName onClick={handleProductNameClick}>
          {product.name}
        </ProductName>
      </CardContainer>

      {isPopupOpen && (
        <PopupOverlay onClick={handleOverlayClick}>
          <PopupContent>
            <CloseButton onClick={handleClosePopup}>&times;</CloseButton>
            <PopupTitle>{product.title}</PopupTitle>
            <PopupDescription>{product.description}</PopupDescription>
          </PopupContent>
        </PopupOverlay>
      )}
    </>
  );
};

// 상품 데이터를 ProductCard 컴포넌트로 이동
export const sampleProducts = [
  {
    id: 1,
    name: "Hair Loss Control",
    image: "/src/assets/product/1.png",
    title: "프리미엄 스킨케어 세트 - 완벽한 피부 관리",
    description: "고급스러운 성분으로 제작된 프리미엄 스킨케어 세트입니다. 깊은 보습과 탄력 개선을 동시에 제공하여 건강하고 빛나는 피부를 만들어줍니다. 알로에 베라, 히알루론산, 비타민 C 등 천연 성분이 풍부하게 함유되어 있습니다."
  },
  {
    id: 2,
    name: "Hair Loss Control+",
    image: "/src/assets/product/2.png",
    title: "자연주의 바디워시 - 순한 클렌징",
    description: "자연 유래 성분만을 사용한 순한 바디워시입니다. 피부 자극을 최소화하면서도 깨끗한 클렌징을 제공합니다. 민감한 피부도 안심하고 사용할 수 있으며, 오래 지속되는 상쾌한 향을 선사합니다."
  },
  {
    id: 3,
    name: "Tricocure 헤어 세럼",
    image: "/src/assets/product/3.jpg",
    title: "아로마테라피 디퓨저 - 편안한 공간 연출",
    description: "천연 에센셜 오일을 사용한 아로마테라피 디퓨저입니다. 스트레스 해소와 집중력 향상에 도움을 주며, 공간을 아름답고 편안한 분위기로 만들어줍니다. 조용한 팬 시스템으로 오랫동안 지속되는 향을 제공합니다."
  },
  {
    id: 4,
    name: "Tricocure 무스 탈모 샴푸",
    image: "/src/assets/product/4.png",
    title: "유기농 핸드크림 - 촉촉한 손 관리",
    description: "유기농 성분으로 제작된 고보습 핸드크림입니다. 건조한 손을 즉시 촉촉하게 만들어주며, 장시간 보습 효과를 유지합니다. 비타민 E와 시어버터가 풍부하게 함유되어 손의 건강을 지켜줍니다."
  },
  {
    id: 5,
    name: "Tricocure 무스 포스트 임플란트 샴푸",
    image: "/src/assets/product/5.png",
    title: "천연 마스크팩 - 집중 케어",
    description: "천연 성분으로 제작된 집중 케어 마스크팩입니다. 피부 진정과 보습에 특화되어 있으며, 사용 후 즉시 피부 톤이 개선되는 것을 느낄 수 있습니다. 히알루론산과 판테놀이 풍부하게 함유되어 있습니다."
  },

];

// 전체 ProductSection을 렌더링하는 컴포넌트
export const ProductSectionComponent = () => {
  return (
    <ProductSection id="product-section">
      <ProductSectionTitle>제품 소개</ProductSectionTitle>
      
      <ProductGridContainer>
        <ProductGrid>
          {sampleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </ProductGridContainer>
    </ProductSection>
  );
};
