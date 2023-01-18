interface login{
  (username: string, password: string): boolean;
}

let loginUser: login;

loginUser = function (id: string, pw: string) {
  console.log('로그인 했습니다.');
  return true;
}