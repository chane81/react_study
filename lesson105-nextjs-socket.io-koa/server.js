//const app = require('express')();
const koa = require('koa');
const koaRouter = require('koa-router');
const router = new koaRouter();
const app = new koa();
const server = require('http').Server(app.callback());
const io = require('socket.io')(server);
const next = require('next');
const bodyParser = require('koa-bodyparser');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

// fake DB
const messages = {
  chat1: [],
  chat2: []
}

// socket.io server
io.on('connection', socket => {
  socket.on('message.chat1', data => {
    messages['chat1'].push(data)
    socket.broadcast.emit('message.chat1', data)
  })
  socket.on('message.chat2', data => {
    messages['chat2'].push(data)
    socket.broadcast.emit('message.chat2', data)
  })

  socket.on('error', (err) => {
    console.log('Error connecting to server', err);
  });
})

app.use(bodyParser());

nextApp.prepare().then(() => {
  router.get('/messages/:chat', (ctx, next) => {
    console.log(ctx.params);
      ctx.body = JSON.stringify(ctx.params.chat);
  });

  router.get('*', async (ctx, next) => {
    return await nextHandler(ctx.req, ctx.res);
  })

  app.use(router.routes());

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
