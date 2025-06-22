# React + TypeScript + Vite + Styled Components

이 프로젝트는 React, TypeScript, Vite, 그리고 Styled Components를 사용하여 구축된 모던 웹 애플리케이션입니다.

## 🚀 기술 스택

- **React 19** - 사용자 인터페이스 구축
- **TypeScript** - 타입 안전성과 개발자 경험 향상
- **Vite** - 빠른 개발 서버와 빌드 도구
- **Styled Components** - CSS-in-JS 스타일링
- **ESLint** - 코드 품질 관리
- **Vercel Blob** - 파일 저장소 및 스트리밍
- **Axios** - HTTP 클라이언트

## 📦 설치 및 실행

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
# 프론트엔드만 실행
npm run dev

# 프록시 서버만 실행
npm run server

# 프론트엔드와 프록시 서버 동시 실행 (권장)
npm run dev:all
```

### 프로덕션 빌드

```bash
npm run build
```

### 빌드 미리보기

```bash
npm run preview
```

## 🔧 Vercel Blob 설정

### 1. Vercel Blob Store 생성

1. [Vercel Dashboard](https://vercel.com/dashboard)에 로그인
2. 프로젝트 선택 또는 새 프로젝트 생성
3. Storage 탭에서 "Create Blob Store" 클릭
4. Store 이름 입력 후 생성

### 2. 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가:

```env
# Vercel Blob 설정
VITE_BLOB_READ_WRITE_TOKEN=your_blob_read_write_token_here

# Vercel Blob Store ID (선택사항)
VITE_BLOB_STORE_ID=your_blob_store_id_here
```

### 3. Blob Token 생성

1. Vercel Dashboard에서 프로젝트의 Storage 탭으로 이동
2. Blob Store 선택
3. "Tokens" 탭에서 "Create Token" 클릭
4. 토큰 이름 입력 및 권한 설정 (Read/Write 권한 필요)
5. 생성된 토큰을 `.env` 파일의 `VITE_BLOB_READ_WRITE_TOKEN`에 설정

## 📹 Vercel Blob 사용법

### 비디오 업로드

```tsx
import { uploadToBlob } from '../utils/vercelBlob';

const handleVideoUpload = async (file: File) => {
  try {
    const url = await uploadToBlob(file, 'videos/my-video.mp4');
    console.log('업로드된 비디오 URL:', url);
  } catch (error) {
    console.error('업로드 실패:', error);
  }
};
```

### 비디오 재생

```tsx
import { BlobVideoPlayer } from './components/BlobVideoPlayer';

const MyComponent = () => {
  return (
    <BlobVideoPlayer
      url='https://your-blob-url.vercel-storage.com/videos/my-video.mp4'
      alt='My Video'
      autoPlay={true}
      muted={true}
      loop={true}
    />
  );
};
```

### 파일 목록 조회

```tsx
import { listBlobFiles } from '../utils/vercelBlob';

const getVideoList = async () => {
  try {
    const files = await listBlobFiles('videos/');
    console.log('비디오 파일 목록:', files);
  } catch (error) {
    console.error('파일 목록 조회 실패:', error);
  }
};
```

### 파일 삭제

```tsx
import { deleteFromBlob } from '../utils/vercelBlob';

const deleteVideo = async (url: string) => {
  try {
    await deleteFromBlob(url);
    console.log('파일 삭제 완료');
  } catch (error) {
    console.error('파일 삭제 실패:', error);
  }
};
```

## 🎨 Styled Components 사용법

### 기본 사용법

```tsx
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
```

### Props를 받는 컴포넌트

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const StyledButton = styled.button<ButtonProps>`
  ${({ variant = 'primary', theme }) =>
    variant === 'primary'
      ? `background-color: ${theme.colors.primary};`
      : `background-color: transparent; border: 2px solid ${theme.colors.primary};`}
`;
```

## 🎯 테마 시스템

프로젝트는 중앙화된 테마 시스템을 사용합니다:

```tsx
// src/theme/theme.ts
export const theme = {
  colors: {
    primary: '#646cff',
    primaryHover: '#535bf2',
    // ... 더 많은 색상
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    // ... 더 많은 간격
  },
  // ... 더 많은 테마 값들
};
```

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── BlobVideoPlayer.tsx  # Vercel Blob 비디오 플레이어
│   ├── MainTopCard.tsx      # 메인 캐러셀
│   ├── ImageCarousel.tsx    # 이미지 캐러셀
│   └── StyledExample.tsx
├── utils/              # 유틸리티 함수
│   └── vercelBlob.ts   # Vercel Blob 관련 함수들
├── theme/              # 테마 설정
│   └── theme.ts
├── types/              # TypeScript 타입 정의
│   └── styled.d.ts
├── App.tsx             # 메인 앱 컴포넌트
├── Header.tsx          # 헤더 컴포넌트
└── main.tsx            # 앱 진입점
```

## 🔧 개발 도구

- **Vite** - 빠른 HMR과 빌드
- **TypeScript** - 타입 체크
- **ESLint** - 코드 품질
- **Styled Components** - CSS-in-JS
- **Vercel Blob** - 파일 저장소
- **Axios** - HTTP 요청

## 📝 라이선스

ISC
