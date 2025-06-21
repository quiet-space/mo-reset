# React + TypeScript + Vite + Styled Components

이 프로젝트는 React, TypeScript, Vite, 그리고 Styled Components를 사용하여 구축된 모던 웹 애플리케이션입니다.

## 🚀 기술 스택

- **React 19** - 사용자 인터페이스 구축
- **TypeScript** - 타입 안전성과 개발자 경험 향상
- **Vite** - 빠른 개발 서버와 빌드 도구
- **Styled Components** - CSS-in-JS 스타일링
- **ESLint** - 코드 품질 관리

## 📦 설치 및 실행

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 프로덕션 빌드

```bash
npm run build
```

### 빌드 미리보기

```bash
npm run preview
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
│   └── StyledExample.tsx
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

## 📝 라이선스

ISC
