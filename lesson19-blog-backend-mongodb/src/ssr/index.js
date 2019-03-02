const render = require('./render').default;
const manifest = require('../../../lesson20-blog-frontend/build/asset-manifest.json');

function buildHtml({ html }) {
  return `
  <!doctype html>
  <html lang="en">
  
  <head>
      <meta charset="utf-8">
      <link rel="shortcut icon" href="/favicon.ico">
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
      <meta name="theme-color" content="#000000">
      <link rel="manifest" href="/manifest.json">
      <title>React App</title>
      <link href="/static/css/app.8a564272.chunk.css" rel="stylesheet">
  </head>
  
  <body><noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">${html}</div>
      <script src="/static/js/10.1c059a85.chunk.js"></script>
      <script src="/static/js/app.73a68cd0.chunk.js"></script>
      <script src="/static/js/0.5869029b.chunk.js"></script>
      <script src="/static/js/1.2e5b7fc7.chunk.js"></script>
      <script src="/static/js/vendor.4ddecb62.chunk.js"></script>
  </body>
  
  </html>
  `;
}


module.exports = async (ctx) => {
  try {
    const rendered = await render(ctx);
    ctx.body = buildHtml(rendered);
  } catch (e) {
    // 에러가 발생하면 일반 html 응답
    ctx.body = buildHtml({});
  }
};