## Instructions

- Structure your front-end application following the Feature-Sliced Design (FSD) pattern. FSD is an architectural methodology for organizing and managing front-end codebases.
- After each structural change, briefly validate the result to ensure compliance with FSD principles and determine next steps, making corrections if needed.
- If an action diverges from FSD methodology, immediately self-correct or explicitly flag the issue for review.

## 프로젝트 구조

이 문서는 저장소의 디렉터리 구조와 각 폴더의 책임, 라우트 구성과의 연결 규칙을 정리합니다. 신규 페이지/모듈 추가 전 이 문서를 참고해 위치와 네이밍을 결정하세요.

### 최상위 트리(요약)

```
.
├── src                # 애플리케이션 소스
│   ├── app            # Next.js App Router 엔트리(그룹/레이아웃 포함)
│   ├── shared         # 공용 라이브러리, UI, 디자인 시스템(shadcn-ui)
│   ├── styles         # 전역/유틸 스타일
│   └── widgets        # 페이지 공용 위젯(헤더/푸터 등)
├── public             # 정적 자산(이미지, 폰트 등)
├── docs               # 문서(컨텍스트/가이드)
├── .next              # 빌드 산출물(생성물)
├── package.json       # 워크스페이스/스크립트
├── tsconfig.json      # 경로 별칭, TS 설정(@ → src)
└── next.config.ts     # Next.js 설정
```

### 디렉터리 책임

- `src/app`
  - Next.js App Router 디렉터리. 그룹 세그먼트로 레이아웃을 구성합니다.
  - 현재 구조 예시: `(default-layout)` 그룹, `(no-layout)/hidden` 라우트.
  - 라우트 계획은 `docs/context/routes.md`를 참고하세요.

- `src/feature`
  - 제품 전반에서 재사용되는 비즈니스 기능.

- `src/shared`
  - 프로젝트 전반에서 재사용되는 일반 유틸리티.
  - 공용 유틸(`lib`), 디자인 시스템(`shadcn-ui`), 기본 UI 컴포넌트(`ui`).
  - 경로 별칭 `@/*` → `src/*`를 사용합니다.

- `src/widgets`
  - 독립적으로 동작하는 대형 UI/기능 블록. 예: `header`, `footer`.

- `src/styles`
  - 전역 CSS 및 유틸 스타일. 레이아웃에서 import.

- `public`
  - 정적 자산(예: 폰트 `public/fonts/*`).

- `docs`
  - 프로젝트 문서. 컨텍스트/가이드는 `docs/context/*` 하위에 위치.

### 라우트/레이아웃 규칙(App Router)

- 기본 레이아웃 그룹: `src/app/(default-layout)/layout.tsx`에서 헤더/푸터 포함 기본 프레임 제공.
- 페이지 예시: `src/app/(default-layout)/page.tsx` → `/`(루트)
- 개별 레이아웃이 필요한 경우 별도 그룹 사용: `src/app/(no-layout)/hidden/*` → `/hidden`
- 커스텀 404가 필요하면 `src/app/not-found.tsx` 추가를 고려.

### 네이밍/경로 컨벤션

- 경로 별칭: `@/…`는 `src/…`를 가리킵니다(`tsconfig.json`의 `paths`).
- UI/유틸 export는 각 디렉터리의 `index.ts`에서 재노출하여 import 경로를 단순화합니다.
- 폴더/파일명은 소문자-kebab-case를 권장하고, React 컴포넌트는 파스칼 케이스 파일을 사용합니다.

### 변경 원칙(체크리스트)

- 새 페이지 추가 시: `src/app`에 디렉터리/`page.tsx` 생성 → 라우트 문서(routes.md) 업데이트.
- 새 기능 모듈: `src/feature/<모듈>` 생성.
- 공용 컴포넌트/유틸은 `src/shared`로 이동하여 중복 방지.
- 레이아웃 변경 시: 영향 범위 확인(그룹 세그먼트) 후 테스트.
