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
  background: #f8f9fa;
padding: 40px 0 120px;
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
  
`;

const CardContainer = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  transition: transform 0.2s ease;
  width: fit-content;
  width: 50vw;
  height: 100%;
  padding: 20px 10px 40px 10px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const ProductImage = styled.img`
  width: 30%;
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

const ProductDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 4px;
  margin-left: 17px;

  h3 {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.6;
  }

  span {
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.6;
  }

`;

const ProductGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
`;


export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <>
      <CardContainer>
        <ProductImage src={product.image} alt={product.name} />
        <div>
        <ProductName>
          {product.name}
        </ProductName>
        <ProductDescription dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
      </CardContainer>
    </>
  );
};

// 상품 데이터를 ProductCard 컴포넌트로 이동
export const sampleProducts = [
  {
    id: 1,
    name: "Hair Loss Control",
    image: "https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/1-fznpFnHMbzRrdeDXKPk2ynBuR1F44a.png",
    title: "프리미엄 스킨케어 세트 - 완벽한 피부 관리",
    description: `
    Hair Loss Control은 비침습적 모낭플란트 관리에 사용됩니다. 
    <br />
    <br />
    쏘팔메토 줄기세포의 활성 성분이 혈액 및 림프 순환을 자극하고 두피의 제품 침투를 최대 97%까지 증가시키도록 설계되어 있습니다.
    <br />
    혈액순환을 촉진하고 두피에 더 많은 산소를 공급하며, 신생모에 중요한 비타민인 아미노산도 풍부하게 함유되어 있습니다. 
    <br />
    <br />

    <h3>
    Hair Loss Control을 통한 꾸준한 모낭플란트는 탈모를 완화할 수 있습니다. 
    </h3>

    <br />
    <br />

    <span>
    ✓ 모발 성장 촉진

    ✓ 혈관 확장·산소공급

    ✓ 모발 영양공급

    ✓ 유전적 탈모

    ✓ 만성 탈모
    </span>

    <br />
    <br />

    <h3>
    유효 성분:
    </h3>
    <span>
    · 쏘팔메토(Saw Palmetto): 탈모완화에 도움이 되는 식물성 줄기세포. 모낭 표적 교정하는 동안 모발 성장을 촉진하는 것으로 입증.
    <br />
    · 비오틴, 비타민 B7: 세포 재생/대사에 사용.
    <br />
    · 인삼뿌리 추출물: 세포 성장과 콜라겐 생성 촉진.
    <br />
    · 판테놀, 프로비타민 B5: 피부가 더 많은 수분을 저장.
    <br />
    · 아미노산: 모발의 케라틴 흡수 증가.
    <br />
    · 알륨 구근 추출물: 양파 추출물. 두피 재생 및 강화.
    <br />
    · 아연 PCA: 항산화 효과, 피지 조절.
    </span>
    `
  },
  {
    id: 2,
    name: "Hair Loss Control+",
    image: "https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/2-blttVKIfaD0iRUanMyTQltHUOl0RNu.png",
    title: "자연주의 바디워시 - 순한 클렌징",
    description: `
    Hair Loss Control+는 혈류를 개선시켜 두피에 수분과 산소를 공급하는 데 도움이 됩니다. 과학적으로 구성된 비타민, 아미노산 및 미네랄의 조화는 최적의 신체대사를 지원하며 탈모를 촉진하는 모든 요소에 작용하는 고농축 제품입니다.
    <br />
    <br />
    <span>
      ✓ 아르기닌, 타우린 활성성분 강화
      ✓ 신경성 탈모
      ✓ 원형 탈모
</span>
    <br />
    <br />

    <h3>
    유효 성분:
    </h3>
    <span>
    · 쏘팔메토 추출물: 탈모완화에 도움이 되는 식물성 줄기세포. 모낭 표적 교정하는 동안 모발 성장을 촉진하는 것으로 입증.
    <br />
    · 병풀 추출물
    <br />
    · 비오틴 (비타민 B7): 세포 재생 지원 및 지방산 결합 독려. 두꺼운 머리카락이 자라는 데 도움.
    <br />
    · 판토텐산(비타민 B5) 및 인삼 뿌리 추출물(모발 성장의 주요 요인인 스트레스에 대한 저항력을 높이는 데 도움)
    <br />
    · 시스테인
    <br />
    · 타우린
    </span>
    `
  },
  {
    id: 3,
    name: "Tricocure 헤어 세럼",
    image: "https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/3-Gj0KqSpKUBO0MTW5N7yBVcYq8PS6U5.JPG",
    title: "아로마테라피 디퓨저 - 편안한 공간 연출",
    description: `
    Tricocure는 홈케어용으로 특별히 개발된 세럼입니다. 
    <br />
    지속적인 도포를 통해 혈관을 확장하고 다양한 유효 영양분을 활성화합니다.
    <br />
    <br />
    <span>
    ✓ 요요현상 없는 홈케어 세럼
    ✓ 혈액순환 촉진
    ✓ 발모 유지력 강화 솔루션
    </span>
    <br />
    <br />

    <h3>
    사용법: 
    </h3>
    스포이드를 이용해 하루 1~2회(3~6ml) 문제 부위 또는 두피 전체에 도포한 후 부드럽게 마사지합니다. 
    <br />
    <br />

    <h3>
    유효 성분:
    </h3>
    <span>
    · 코펙실 (2.4 Diamino Pyridine – 3 oxide) (2.4 DPO): 혈관 확장제로서 미녹시딜과 유사하게 작용. 화끈거림이나 가려움증 등 부작용 없이 두피에 산소 공급 촉진. 
    <br />
    · 비오틴 (비타민 B7): 세포 재생 지원 및 지방산 결합 독려. 두꺼운 머리카락이 자라는 데 도움.
    <br />
    · CG-VEGF: 혈관 신생(새로운 혈관 형성)과 모낭 기저부의 관련 영양분 공급을 자극하는 성장 인자.
    <br />
    · 쏘팔메토 추출물 (Serenoa Repens): 호르몬 신호를 방해하고 모낭의 DHT 흡수 감소.
    <br />      
    · 베타-시토스테롤: 안드로겐(호르몬)을 억제하는 천연 식물 추출물.
    <br />
    · 니아신 (비타민 B3): 혈관 확장제로서 두피의 혈액순환 촉진하여 모발 성장 자극.
    <br />
    · 카픽실(Capixyl): 두 가지 성분의 혼합물. 
    <br />
    · 바이오카닌 A: 레드 클로버에서 추출. 남성형 탈모증에서 테스토스테론이 DHT로 전환되는 것을 방지하는 데 도움. 
    <br />
    · 아세틸테트라펩타이드-3 (Acetyltetrapeptide-3): 조직 리모델링을 자극하는 펩타이드.
    <br />
    · 피리딘(비타민B6): 멜라닌 생성 촉진
    <br />
    · 판토텐산(비타민 B5) 및 인삼 뿌리 추출물(모발 성장의 주요 요인인 스트레스에 대한 저항력을 높이는 데 도움)
    </span>
    `
  },
  {
    id: 4,
    name: "Tricocure 무스 탈모 샴푸",
    image: "https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/4-370bc4wikrEFYyIESc15wT0uOpTL8l.png",
    title: "유기농 핸드크림 - 촉촉한 손 관리",
    description: `
    Tricocure 무스 탈모 샴푸는 포도당 기반 원료의 결합을 통해 카페인과 케라틴의 조화로운 효과를 가지고 있습니다. 
    <br />
    손상된 모발 깊숙이 침투하여 구조를 재구성하고, 모발을 강화시켜 회복시키는 특별한 작용 메커니즘을 가지고 있습니다. 
    <br />
    니코틴산과 상쾌한 천연 멘톨을 결합한 새로운 천연 제품으로 온/냉 효과를 통해 미세순환을 동시에 자극하여 기분 좋은 느낌을 선사합니다.
    <br />
    <br />
    <span>
    ✓ 유수분 밸런스 조절
    ✓ 탈모 완화·개선
    ✓ 민감, 염증 두피 개선 
    ✓ 모발 영양
    </span>
    <br />    
    <br />

    <h3>
    사용법: 
    </h3>
    주 2-3회 거품을 손바닥에 덜어 두피를 부드럽게 마사지하여 미세순환을 자극합니다.
    <br />
    유효성분이 두피에 흡수될 수 있도록 제품을 10분간 그대로 방치합니다. 
    <br />
    따뜻한 물로 헹구고 수건으로 가볍게 두드려 모발을 건조시킵니다.
    <br />
    <br />
    <h3>
    유효 성분:
    </h3>
    <span>
    · CAFFEINE ANHYDRA: 카페인은 활력을 주는 힘으로 모발성장을 자극하며 모발을 더 강하고 단단하게 도움. 1회 세척 후 카페인의 효과는 24시간 지속되기에 지속적인 사용을 요함. 
    <br />
    · HYDROLYZED KERATIN: 모발의 견고성 보장. 
    <br />
    · FIBERHANCE BM SOLUTION: 모발 강화를 위해 고안된 새로운 특허 솔루션. 포도당을 기반으로한 독특한 작용 메커니즘을 통해 모발 뿌리까지 깊숙이 침투하여 손상된 부분을 강화.
    <br />
    · SALICYLIC ACID: 두피정화 및 비듬 제거를 촉진. 가려움증 감소, 두피와 모발의 죽은 세포 제거. 두피 표피를 깨끗하고 위생적으로 유지하며 수분 공급.
    <br />
    </span>
    <br />
    <h3>
    Dermatology tested
    </h3>
    <span>
    민감한 피부도 안심할 수 있도록 피부자극테스트를 완료하였습니다.
    </span>
    `
  },
  {
    id: 5,
    name: "Tricocure 무스 포스트 임플란트 샴푸",
    image: "https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/5-AOsZfackszaJi8GwHoP2xKwqt23rve.png",
    title: "천연 마스크팩 - 집중 케어",
    description: `
    Tricocure 무스 포스트 임플란트 샴푸는 모발이식 후 두피 및 모발의 세정을 위해 만들어진 샴푸입니다. 
    <br />
    활성 성분이 풍부하여 진정 효과에 탁월하며, 미생물 증식을 줄여 두피 위생에 효과적입니다. 
    <br />
    이식된 모발이 다시 자라기 위한 최적의 생리적 조건을 회복하도록 하여 재상피화에 기여하며, 
    <br />
    모발이식의 성공을 좌우하는 수술 후 첫 달에 임플란트 샴푸를 사용함으로써 세척 중 두피 스트레스를 최소화할 수 있습니다. 
    <br />
    <br />
    <span>
    ✓ 모발 건강 증진 
    ✓ 두피 청결 유지  
    ✓ 자극 없는 순한 성분
    </span>
    <br />
    <br />

    <h3>
    사용법: 
    </h3>
    <span>
    거품을 손바닥에 덜어 모발의 뿌리부터 감싸듯 도포합니다. 
    <br />
    유효성분이 두피에 흡수될 수 있도록 제품을 2~3분 정도 그대로 방치합니다. 
    <br />
    따뜻한 물로 헹구고 수건으로 가볍게 두드려 모발을 건조시킵니다.
    <br />
    *사용주기는 전문가와 상담하세요.
    </span>
    <br />
    <br />

    <h3>
    유효 성분:
    </h3>
    <span>
    · Allatoin: 치유 효과로 알려져 있으며, 활성 보습 성분으로써 피부의 치유를 촉진하고 진정시켜주는 안전한 항-자극제 성분. 
    <br />
    · Pantrofina: 강한 바람과 햇볕으로부터 방어기제를 체득한 해송 소나무 껍질 추출물로 구성된 기능성 식물 성분. 모근부터의 관리를 통해 모발까지 풍부한 영양을 공급하며 일상적인 오염으로부터 보호하는 역할. 
    <br />
    · Salicylic Acid (BHA): 두피에 정화작용을 하여 각질 제거를 통해 가려움증 완화. 두피와 모발에 붙어있는 죽은 각질 제거를 통해 표피를 깨끗하게 유지하며 보습 강화. 
    <br />
    · Urea: 보습, 연화 및 각질제거에 탁월한 성분. BHA와 마찬가지로 죽은 각질 세포의 제거를 통해 효과적인 피부 재생 촉진. 
    <br />
    · Amino Acids Complex (Sodium PCA, Sodium Lactate, Arginine, Aspartic Acid, PCA, Glycine, Alanine, Serine, Valine Proline, Threonine, Isoleucine, Histidine, Phenylalanine): 모발 케어를 위해 개발된 아미노산 블랜드. 모발 습윤, 영양 공급, 보습의 역할을 함과 동시에 염색모의 색빠짐 최소화. 
    </span>
    <br />
    <br />

    <h3>
    Dermatology tested
    </h3>
    <span>
    민감한 피부도 안심할 수 있도록 피부자극테스트를 완료하였습니다.
    </span>
    `
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
