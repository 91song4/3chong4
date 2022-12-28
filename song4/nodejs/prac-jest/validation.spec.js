const { isEmail } = require('./validation');

test('테스트가 성공하는 상황', () => {
  expect(isEmail('이메일이 아니에요')).toEqual(false);
});

test('테스트가 실패하는 상황', () => {
  expect(isEmail('song4@naver.com')).toEqual(true);
});

test('입력한 이메일 주소에는 "@" 문자가 1개만 있어야 이메일 형식이다.', () => {
  expect(isEmail('song4@naver.com')).toEqual(true);
  expect(isEmail('song4@@@@@@@@naver.com')).toEqual(false);
  expect(isEmail('song4naver.com')).toEqual(false);
});

test("입력한 이메일 주소에 공백(스페이스)이 존재하면 이메일 형식이 아니다.", () => {
  expect(isEmail('song4@naver.com')).toEqual(true);
  expect(isEmail('so ng4@naver.com')).toEqual(false);
});

test("입력한 이메일 주소 맨 앞에 하이픈(-)이 있으면 이메일 형식이 아니다.", () => {
  expect(isEmail('song4@naver.com')).toEqual(true);
  expect(isEmail('-song4@naver.com')).toEqual(false);
});