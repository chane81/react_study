const proxy = require('http-proxy-middleware');

// api 를 이용할 때 proxy 를 이용하는게 좋다
// axios를 써서 호출시 origin 때문에(백단 origin 설정 물론 해두었지만)
// 다른건 잘 나와도 세션이 자꾸 사라지는 문제가 있다.
module.exports = function (app) {
  app.use(
    proxy('/api', {
      target: 'http://localhost:4000/',
      changeOrigin: true
    })
  );
};
