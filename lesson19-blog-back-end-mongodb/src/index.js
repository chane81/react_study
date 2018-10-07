require('dotenv').config();

// koa 관련 모듈
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

// mongo db 관련 모듈
const mongoose = require('mongoose');
// const { MongoClient } = require('mongodb');
const {
  Schema
} = mongoose;

// api 모듈
const api = require('./api');

// 모듈 인스턴스 생성
const app = new Koa();
const router = new Router();

// ENV 설정(PORT, MONGODB URI)
const {
  PORT: port = 4000, // default: 4000 port
  MONGO_URI: mongoURI
} = process.env;

// mongoose 모듈을 이용한 connect
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, {
  useNewUrlParser: true
}).then(() => {
  console.log('connect to mongodb');
}).catch((e) => {
  console.log('connect to mongodb failed', e);
});

// mongo 모듈을 이용한 connect
// MongoClient.connect(mongoURI, {
//   useNewUrlParser: true
// }, (err, db) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`connect to mongodb - url:${mongoURI}`);
//     db.close();
//   }
// });

// mongo db 스키마 세팅
const Post = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: new Date() // 현재 날짜 Default Set
  }
});

// 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

// 라우터 적용 전에 bodyparser 적용
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log('listening to port', port);
});