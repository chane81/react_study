# mobx-state-tree 사용

## Decorator 를 사용하기 위한 작업

- yarn eject
- yarn add babel-preset-mobx
- package.json "babel" 에 아래와 같이 수정

  ```json
  "babel": {
    "presets": [
    "react-app",
    "mobx"
    ]
  }
  ```

- jsconfig.json 파일을 추가하고 내용을 아래와 같이 입력
- mobx 의 decorator 기능을 쓸때 파싱에러를 막기 위해 experimentalDecorators 가 필요하다.

  ```json
  "compilerOptions": {
    "jsx": "react",
    "baseUrl": "./src",
    "experimentalDecorators": true
   }
  ```

## 상태추적 tools

- import

  ```js
  import { onPatch } from 'mobx-state-tree';
  import makeInspectable from 'mobx-devtools-mst';
  ```

- index.jsx 에 아래 구문 추가

  ```js
  // 크롬 console 에 해당값의 변화가 있을 때 나타나게 함
  onPatch(invoice, patch => {
    console.log(patch);
  });

  // 크롬 mobx tools 에 MST 로 상태변화를 볼 수 있게 한다.
  makeInspectable(invoice);
  ```

## eslint 설정

- yarn
  - yarn add eslint-config-airbnb
- eslintrc
  ```json
  {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": ["react", "jsx-a11y", "import"],
    "rules": {
      "react/require-default-props": 0,
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
          "ObjectPattern": {
            "multiline": true
          },
          "ImportDeclaration": "never",
          "ExportDeclaration": {
            "multiline": true,
            "minProperties": 3
          }
        }
      ],
      "no-underscore-dangle": [
        1,
        {
          "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
        }
      ],
      "jsx-a11y/anchor-is-valid": [
        "warn",
        {
          "components": ["Link"],
          "specialLink": ["to"]
        }
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

```

```
