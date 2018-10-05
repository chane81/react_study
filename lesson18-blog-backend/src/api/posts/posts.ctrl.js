// 디폴트 값 세팅
let postId = 1;

const posts = [
  {
    id: 1,
    title: '제목',
    body: '내용'
  }
];

/*
    포스트 작성
    POST /api/posts
    { title, body }
*/
exports.write = (ctx) => {
  const { title, body } = ctx.request.body;

  postId += 1;

  const post = { id: postId, title, body };
  posts.push(post);

  ctx.body = post;
};

/*
    포스트 목록 조회
    GET /api/posts
*/
exports.list = (ctx) => {
  ctx.body = posts;
};

/*
    특정 포스트 조회
    GET /api/posts/:id
*/
exports.read = (ctx) => {
  const { id } = ctx.params;

  // id 에 해당하는 포스트의 index 구하기
  const post = posts.find(t => t.id.toString() === id);

  // 해당 포스트 없으면 없다고 message 를 body에 리턴
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.'
    };

    return;
  }

  ctx.body = post;
};

/*
    특정 포스트 제거
    DELETE /api/posts/:id
*/
exports.remove = (ctx) => {
  const { id } = ctx.params;

  // 해당 id가 posts 에서 몇번째 index 인지 확인
  const index = posts.findIndex(t => t.id.toString() === id);

  // 포스트가 없으면 없다고 message 를 body에 리턴
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.'
    };

    return;
  }

  posts.splice(index, 1);
  ctx.status = 204; // No Content
};

/*
    포스트 수정(교체)
    PUT /api/posts/:id
    { title, body }
*/
exports.replace = (ctx) => {
  const { id } = ctx.params;

  // 해당 id가 posts 에서 몇번째 index 인지 확인
  const index = posts.findIndex(t => t.id.toString() === id);

  // 포스트가 없으면 없다고 message 를 body에 리턴
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.'
    };

    return;
  }

  posts[index] = {
    id,
    ...ctx.request.body
  };

  ctx.body = posts[index];
};

/*
    포스트 수정(특정 필드 변경)
    PATCH /api/posts/:id
*/
exports.update = (ctx) => {
  const { id } = ctx.params;

  // 해당 id가 posts 에서 몇번째 index 인지 확인
  const index = posts.findIndex(t => t.id.toString() === id);

  // 포스트가 없으면 없다고 message 를 body에 리턴
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.'
    };

    return;
  }

  posts[index] = {
    ...posts[index],
    ...ctx.request.body
  };

  ctx.body = posts[index];
};
