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
      target: 'http://country.io/',
      changeOrigin: false
    })
  );
};
