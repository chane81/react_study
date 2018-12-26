# Apollo GraphQL 서버 - 영화웹

## Over fetching, Under fetching

- Over fetching: 필요없는 정보까지 서버에서 전달받는 것
- Under fetching: 하나의 정보를 완성하기 위해 서버에 여러개의 많은 소스(REST URL) 를 요청하는 것

## Apollo GraphQL 서버로 위위 오버패칭, 언더패칭문제를 해결할 수 있다.

## GraphQLServer 의 CORS 옵션 적용(크로스 도메인간 접근 허용)

```JS
const options = {
  port: 8000,
  endpoint: '/',
  playground: '/playground',
  cors: {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  }
}
```

## 서버가동후 GraphQL QUERY 테스트 - localhost:8000

## 참고 url

- graphql-yoga: https://github.com/prisma/graphql-yoga
- 영화데이터 페이크 API: https://yts.am/api
- GraphQL FAKE API: http://apis.guru/graphql-apis/

## Yarn

```
  yarn add react-router-dom apollo-boost react-apollo graphql-tag graphql

  yarn global add babel-cli --ignore-engines
  yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev
  yarn add axios
```

## GraplQL Playground 쿼리(더미 데이터용)

- query movies

  ```graphql
  query {
    movies(limit: 50, rating: 7) {
      id
      name
      score
      genres
    }
  }
  ```

- query movie

  ```graphql
  query {
    movie(id: 2) {
      id
      name
    }
  }
  ```

- mutation addMovie

  ```graphql
  mutation {
    addMovie(name: "Aquaman", score: 9) {
      name
    }
  }
  ```

- mutation deleteMovie

  ```graphql
  mutation {
    deleteMovie(id: 5)
  }
  ```

## GraplQL Playground 쿼리(FAKE API 사용: https://yts.am/api)

- query movies

  ```graphql
  query {
    movies(rating: 9, limit: 5) {
      id
      title
      rating
    }
  }
  ```

- query movie

  ```graphql
  query {
    movie(id: 9922) {
      id
      title
      rating
    }
  }
  ```

- query suggestions

  ```graphql
  query {
    suggestions(id: 3305) {
      id
      title
      rating
    }
  }
  ```
