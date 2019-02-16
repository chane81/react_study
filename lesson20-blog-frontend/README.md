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

# 백엔드단 api 호출시 proxy를 이용하자
- api 를 이용할 때 proxy 를 이용하는게 좋다
- axios를 써서 호출시 origin 때문에(백단 origin 설정 물론 해두었지만) 다른건 잘 나와도 세션이 자꾸 사라지는 문제가 있다.
- cra3 버전부터는 setupProxy.js 를 이용한 세션처리가 가능하기 때문에 아래와 같이 설정하면 된다.

# Proxy 설정
- yarn 설치
  - yarn add http-proxy-middleware
- src 폴더안에 setupProxy.js 파일을 생성
  - 아래와 같이 proxy 관련 세팅을 하면됨
  ```js
  const proxy = require('http-proxy-middleware');

  module.exports = function (app) {
    app.use(
      proxy('/api', {
        target: 'http://localhost:4000/',
        changeOrigin: true
      })
    );
  };
  ```

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
- env 설정을 `.env` 에 하지 않고 /config/env.js 에 한다

  ```js
  function getClientEnvironment(publicUrl) {
  const raw = Object.keys(process.env)
    .filter(key => REACT_APP.test(key))
    .reduce(
      (env, key) => {
        env[key] = process.env[key];
        return env;
      },
      {
        NODE_ENV: process.env.NODE_ENV || 'development',
        PUBLIC_URL: publicUrl,

        // api 설정
        API_HOST: 'http://localhost:4000',

        // NODE_PATH 설정
        NODE_PATH: 'src'
      }
    );
  }
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

- config/webpack.config.dev.js 또는 config.prod.js 의 상단부에 있는 getStyleLoaders 설정

  - 아래 sass-loader 을 추가하고 includePaths 를 설정한다.

  ```js
  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: cssOptions
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009'
              },
              stage: 3
            })
          ]
        }
      },
      // 아래 sass-loader 을 추가하고 includePaths 를 설정한다.
      {
        loader: require.resolve('sass-loader'),
        options: {
          includePaths: [paths.globalStyles]
        }
      }
    ];
    if (preProcessor) {
      loaders.push(require.resolve(preProcessor));
    }
    return loaders;
  };
  ```

- config/webpack.config.dev.js 에 sass 로더 설정
  ```js
        {
          test: sassRegex,
          exclude: sassModuleRegex,
          use: getStyleLoaders({
            importLoaders: 2
          }),
        }
  ```
- config/webpack.config.prod.js 에 sass 로더 설정
  ```js
        {
          test: sassRegex,
          exclude: sassModuleRegex,
          loader: getStyleLoaders({
            importLoaders: 2,
            sourceMap: shouldUseSourceMap
          }),
          sideEffects: true,
        }
  ```

#라이브러리 ##마크다운 데이터

- yarn

  ```
  yarn add codemirror marked prismjs
  ```

##시간표시 - https://momentjs.com

- yarn

  ```
  yarn add monent
  ```

## query-string 라이브러리

- yarn
  ```
  yarn add yarn add query-string@5
  ```

## 마크다운 특수문자제거 라이브러리

- yarn
  ```
  yarn add remove-markdown
  ```
