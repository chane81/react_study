const { ADMIN_PASS: adminPass } = process.env;

exports.login = (ctx) => {
  const { password } = ctx.request.body;
console.log(adminPass);
  if (adminPass === password) {
    ctx.body = {
      success: true
    };

    // 로그인 성공하면 logged 값을 true 로 설정
    ctx.session.logged = true;
  } else {
    ctx.body = {
      success: false
    };

    ctx.status = 401; // Unauthorized
  }
};

exports.check = (ctx) => {
  ctx.body = {
    // ! 문자를 두 번 입력하여
    // 값이 존재하지 않을 때도 false 를 반환하도록 설정
    logged: !!ctx.session.logged
  };
};

exports.logout = (ctx) => {
  ctx.session = null;
  ctx.status = 204; // no content
}