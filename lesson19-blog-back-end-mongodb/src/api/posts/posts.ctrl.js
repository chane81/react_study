const Post = require('models/post');
const Joi = require('joi');
const {
  ObjectId
} = require('mongoose').Types;

// 로그인 체크
exports.checkLogin = (ctx, next) => {
  if (!ctx.session.logged) {
    ctx.status = 401; // Unauthorized
    return null;
  }

  return next();
}

// id 에 대해서 검증
exports.checkObjectId = (ctx, next) => {
  const {
    id
  } = ctx.params;

  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return null;
  }

  return next();
};

// 글 작성
exports.write = async (ctx) => {
  // request 데이터 검증
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string())
  });

  console.log('api write!');

  const result = Joi.validate(ctx.request.body, schema);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const {
    title,
    body,
    tags
  } = ctx.request.body;

  const post = new Post({
    title,
    body,
    tags
  });

  try {
    await post.save(); // DB 에 등록
    ctx.body = post; // 저장된 결과를 컨텍스트에 반환
  } catch (e) {
    ctx.throw(e, 500);
  }

};

// 글 리스트
exports.list = async (ctx) => {
  try {

    // 페이지 구현
    const page = parseInt(ctx.query.page || 1, 10);
    const { tag } = ctx.query;

    const query = tag ?  {
      tags: tag   // tags 배열에 tag를 가진 포스트 찾기
    } : {};

    if (page < 1) {
      ctx.status = 400;
      return;
    }

    const posts = await Post.find(query)
      .sort({
        _id: -1
      })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();

    // 헤더부분의 Last-Page 에 마지막 페이지번호 넣어주기
    // count is deprecated 되었다고 해서 countDocuments() 로 수정함
    const postCount = await Post.countDocuments(query).exec();
    ctx.set('last-page', Math.ceil(postCount / 10));

    // 내용 길이 제한 350자
    const limitBodyLength = post => ({
      //...post.toJSON(),   // lean()을 쓰지 않는다면 toJSON() 을 해줘야 JSON 객체로 가져옴
      ...post,
      body: post.body.length < 350 ? post.body : `${post.body.slice(0, 350)}...`
    });

    ctx.body = posts.map(limitBodyLength);

  } catch (e) {
    ctx.throw(e, 500);
  }
};

// 글 상세
exports.read = async (ctx) => {
  const {
    id
  } = ctx.params;

  try {
    const post = await Post.findById(id).exec();

    console.log('api read!');

    if (!post) {
      console.log('api read error!');
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

// 글 삭제
exports.remove = async (ctx) => {
  const {
    id
  } = ctx.params;

  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(e, 500);
  }

};

// 글 수정
exports.update = async (ctx) => {
  const {
    id
  } = ctx.params;

  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true
    }).exec();

    if (!post) {
      ctx.status = 404;
      return;
    }

    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
};