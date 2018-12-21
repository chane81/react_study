# Apollo GraphQL 서버 - 영화웹

## Over fetching, Under fetching

- Over fetching: 필요없는 정보까지 서버에서 전달받는 것
- Under fetching: 하나의 정보를 완성하기 위해 서버에 여러개의 많은 소스(REST URL) 를 요청하는 것

## Apollo GraphQL 서버로 위위 오버패칭, 언더패칭문제를 해결할 수 있다.

## 서버가동후 QUERY 테스트 - localhost:4000

## 참고 url

- graphql-yoga: https://github.com/prisma/graphql-yoga

## Yarn

```
  yarn add react-router-dom apollo-boost react-apollo graphql-tag graphql

  yarn global add babel-cli --ignore-engines
  yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev
```
