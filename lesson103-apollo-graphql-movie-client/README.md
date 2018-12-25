# Apollo GraphQL 클라이언트 - 영화웹

## 참고 URL

- react-apollo: https://github.com/apollographql/react-apollo
- apollo-client-devtools: https://github.com/apollographql/apollo-client-devtools

## 크롬에 apollo-client-devtools 설치 후 `[Cannot read property 'queryStore' of undefined]` 에러 발생시

- 아래와 같이 ApolloClient().`initQueryManager()` 를 해주어야 한다.
- 참고 URL: https://github.com/apollographql/apollo-client-devtools/issues/147

```js
const client = new ApolloClient({
  uri: "http://localhost:8000"
}).initQueryManager();
```

## Yarn

```
  yarn add react-router-dom apollo-boost react-apollo graphql-tag graphql
```
