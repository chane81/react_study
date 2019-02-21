## 멀티 프록시 구성 및 도메인이 틀리지만 라우트 명이 같은 경우
- http://localhost:5000 과 http://localhost:4000 은 서로 시작이 /api 로 같은 라우트 명으로 시작된다.
- 프록시를 구성할 경우 라우트이름이 같기 때문에 서로 구분해서 불러 오게 하기 위해
  `setupProxy.js` 에서 `'pathRewrite'` 를 쓴다.

```js
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/api/5000', {
      target: 'http://localhost:5000/',
      changeOrigin: true,
      pathRewrite: {
        "^/api/5000": "/api"
      }
    })
  )

  app.use(
    proxy('/api/4000', {
      target: 'http://localhost:4000/',
      changeOrigin: true,
      pathRewrite: {
        "^/api/4000": "/api"
      }
    })
  );

  app.use(
    proxy('/todos', {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true
    })
  );
};

```