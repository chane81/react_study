## 블로그 프로젝트 프론트 엔드

# 프로젝트 생성 및 eject

- create-react-app lesson20-blog-frontend
- yarn eject

# 구조 잡기

- src 하위에 아래 폴더 생성
  - /components
    > 리덕스에 연결되지 않은 프리젠테이셔널 컴포넌트들, 컴포넌트들의 스타일도 여기에 위치함
  - /containers
    > 리덕스 상태와 연결된 컨테이너 컴포넌트들이 위치함
  - /lib
    > 백엔드 API 함수들과 코드 스플리팅할 때 사용하는 asyncRoute 가 위치함
  - /pages
    > 라우터에서 사용할 각 페이지 컴포넌트들이 위치함
  - /store
    > Ducks 구조를 적용시킨 리덕스 모듈들과 스토어 생성함수가 위치함
  - /styles
    > 전역적으로 적용될 스타일관련 코드가 위치함

# .gitignore 설정

- .env 파일을 올리지 않게 하기 위해 아래구문을 .gitignore 파일내용에 추가

  ```
  .env
  ```

# index.js -> index.jsx 로 쓰기 위한 세팅

- config/paths.js 에 아래 코드로 수정
- 'src/index.js' -> 'src/index.jsx'
  ```js
  appIndexJs: resolveApp('src/index.jsx');
  ```

# import 에 절대경로로 접근하기 위한 세팅

- ex) 아래와 같이 바꿀 수 있음

  ```jsx
  import App from '../../../components/App' -> import App from 'components/App'
  ```

- yarn
  ```
  yarn add cross-env dotenv
  ```
- .env 파일 추가하고 아래 구문 추가

  ```
  NODE_PATH=src
  ```

- jsconfig.json 파일 추가하고 아래 구문 추가

  ```json
  {
    "compilerOptions": {
      "baseUrl": "./src"
    }
  }
  ```

- package.json 의 start, build, test 쪽에 아래와 같이 수정
  ```json
  "scripts": {
      "start": "cross-env NODE_PATH=src node scripts/start.js",
      "build": "cross-env NODE_PATH=src node scripts/build.js",
      "test": "cross-env NODE_PATH=src node scripts/test.js"
  },
  ```

# eslint 설정 - airbnb 스타일 적용

- yarn

  ```
  yarn add eslint-config-airbnb
  ```

- .eslintrc.json 설정

  ```json
  {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": ["react", "jsx-a11y", "import"],
    "rules": {
      "react/jsx-one-expression-per-line": 0,
      "linebreak-style": 0,
      "no-use-before-define": 0,
      "no-param-reassign": 0,
      "no-unused-vars": 1,
      "no-console": 0,
      "comma-dangle": 0,
      "object-curly-newline": [
        "error",
        {
          "ObjectExpression": "always",
          "ObjectPattern": { "multiline": true },
          "ImportDeclaration": "never",
          "ExportDeclaration": { "multiline": true, "minProperties": 3 }
        }
      ],
      "no-underscore-dangle": [
        1,
        { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }
      ]
    },
    "settings": {
      "import/resolver": {
        "node": {
          "moduleDirectory": ["node_modules", "src"]
        }
      }
    },
    "env": {
      "browser": true,
      "node": true
    }
  }
  ```

# Sass 및 CSS 모듈 적용

- yarn

  ```
  yarn add css-loader node-sass sass-loader classnames
  ```

- config/paths.js 에 아래 코드 추가
  ```js
  globalStyles: resolveApp('src/styles');
  ```
- config/webpack.config.dev.js 에 sass 로더 설정
  ```js
        {
          test: sassRegex,
          exclude: sassModuleRegex,
          use: getStyleLoaders({
            importLoaders: 2,
            includePaths: [paths.globalStyles],
          }, 'sass-loader'),
        }
  ```
- config/webpack.config.prod.js 에 sass 로더 설정
  ```js
  {
          test: sassRegex,
          exclude: sassModuleRegex,
          loader: getStyleLoaders({
            importLoaders: 2,
            sourceMap: shouldUseSourceMap,
            includePaths: [paths.globalStyles]
          },
          'sass-loader'),
          sideEffects: true,
        }
  ```
