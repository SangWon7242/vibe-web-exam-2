# Project Summary: Growth Curriculum Page

## 1. Project Overview

**Project Name**: `my-growth-curriculum`
**Description**: 12주 완성 개발자 양성 과정을 위한 랜딩 페이지입니다.
**Goal**: 신뢰감 있는 "Monotone" 디자인을 통해 전문성을 강조하고 수강 신청을 유도합니다.

### Key Features

- **Vibe**: Trustworthy, Professional, Minimalist (블랙 & 화이트의 절제된 무드).
- **Tech Stack**: Next.js 15 (App Router), Tailwind CSS v4, Framer Motion.
- **UX/UI**:
  - **Scroll Animations**: Framer Motion을 사용하여 커리큘럼 로드맵이 스크롤에 따라 순차적으로 등장합니다.
  - **Localization**: 임팩트 있는 헤드카피는 **영어**로, 상세 설명은 친절한 **한국어**로 구성하여 전달력과 세련됨을 동시에 잡았습니다.
  - **Navigation**: Next.js `<Link>` 컴포넌트를 사용하여 부드러운 페이지 전환을 구현했습니다.

## 2. Prompt Strategy (Vibe Coding)

이 프로젝트는 **"Vibe Coding"** 방법론을 통해 구축되었습니다. 추상적인 사용자의 '느낌'을 구체적인 '기술'로 변환하는 과정입니다.

### Core Principles

1.  **Abstraction Layering (추상화 계층)**:
    - **User Input**: "스타트업처럼 프로페셔널한 느낌을 원해요." (Vibe)
    - **AI Translation**: "모노톤 컬러 스킴, 산세리프 폰트, 그리드 및 타임라인 레이아웃." (Tech)
2.  **Interactive Vibe Check (취향 분석)**:
    - "React를 쓸까요?" 대신 "차분한 느낌인가요, 활기찬 느낌인가요?"라고 질문합니다.
    - 비개발자도 자신의 비전에 맞춰 아키텍처 결정을 내릴 수 있도록 돕습니다.
3.  **One-Touch Scaffolding (원터치 구축)**:
    - 복잡한 설정 없이 명령어 한 줄(`npx create-next-app ...`)로 프로젝트를 시작할 수 있게 지원합니다.
4.  **Iterative Refinement (반복적 개선)**:
    - 핵심 MVP(헤더, 히어로, 로드맵)를 먼저 구축한 뒤, 피드백을 통해 디테일(로컬라이제이션, 리팩토링)을 다듬어갑니다.

## 3. Directory Structure

```
my-growth-curriculum/
├── app/
│   ├── layout.tsx       # 헤더(Header)가 포함된 루트 레이아웃
│   ├── page.tsx         # 메인 랜딩 페이지 조립
│   └── globals.css      # Tailwind v4 설정 및 글로벌 스타일
├── components/
│   ├── header.tsx       # 상단 네비게이션 바
│   ├── hero.tsx         # 메인 배너 및 캐치프레이즈 섹션
│   ├── roadmap.tsx      # 애니메이션이 적용된 커리큘럼 타임라인
│   └── cta.tsx          # 최종 수강 신청 유도 섹션
└── lib/
    └── utils.ts         # 스타일 병합을 위한 유틸리티 (clsx, tailwind-merge)
```

## Getting Started

프로젝트를 로컬에서 실행하려면 다음 명령어를 입력하세요:

```bash
npm run dev
# or
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.
