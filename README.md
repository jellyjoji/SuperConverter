# super convert

## React 설치 가이드

- [super convert](#super-convert)
  - [React 설치 가이드](#react-설치-가이드)
  - [환경 설정](#환경-설정)
    - [vite 설정](#vite-설정)
    - [react router 설치](#react-router-설치)
    - [절대 경로 설정](#절대-경로-설정)
    - [jsconfig.json](#jsconfigjson)
    - [jsconfig.json](#jsconfigjson-1)
    - [.eslintrc.cjs](#eslintrccjs)
- [깃헙 github pages 에 배포하기](#깃헙-github-pages-에-배포하기)

## 환경 설정

### vite 설정

```
pnpm create vite@latest 폴더명
cd 폴더명
```

### react router 설치

```
pnpm add react-router-dom
```

### 절대 경로 설정

```js
/* vite.config.js */
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
},

/* jsconfig.json */
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
    }
  }
}
```

### jsconfig.json

```jsx
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/prop-types": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
```

### jsconfig.json

선택사항

```jsx
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
    }
  }
}
```

### .eslintrc.cjs

```jsx
  extends: [
    // 기본 규칙 외에 다른 규칙을 추가로 사용하도록 설정합니다.
    'eslint:recommended',
    'plugin:prettier/recommended',
    // 여기서는 eslint: recommended와 plugin: prettier / recommended을 사용합니다.
  ],
  plugins: ['prettier'],
  // Prettier를 사용할 수 있도록 추가 설정합니다.
```

# 깃헙 github pages 에 배포하기

```bash
npm run build
```

build 후 생성된 dist 를 깃헙에 올리면 배포 끝!

```bash
// gh-pages 안에 dist 를 -d 복사해서 넣겠다
npx gh-pages -d dist
```

gh-pages 브런치가 자동생성되고 setting - pages root 브런치가 gh-pages 로 자동설정되게된다.

setting - action 에서 배포 진행 상황을 확인할수있다.

**그런데 하얀 화면만 표시가 된다.**
리소스 주소가 서브 디렉토리 기준이라 그렇다.

**vite.config.js**
아래 defineConfig 의 주소를 내 깃헙 레포 이름로 변경해준다.

```jsx
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  // 여기서 내 깃헙 레포 이름을 똑같이 적어준다
  base: "/TodoList_react/",
  plugins: [react(), jsconfigPaths()],
});
```

배포 후 수정사항이 있을때는 아래 명령어를 반복해주면 된다

```bash
npm run build
npx gh-pages -d dist
```

참고: 캐쉬 강력하게 지우기
`ctrl + shift + R`
