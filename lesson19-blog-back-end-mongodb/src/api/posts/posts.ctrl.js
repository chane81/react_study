const Post = require('models/posts');

exports.write = async (ctx) => {
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

exports.list = async (ctx) => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(e, 500);
  }

};

exports.read = async (ctx) => {
  const {
    id
  } = ctx.params;

  try {
    const post = await Post.findById(id).exec();

    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

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

exports.update = (ctx) => {};