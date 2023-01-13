// 하샤드 수

function solution(x) {
  x = x + "";
  let result = 0;
  for (const num of x) {
    result += Number(num);
  }
  if (Number(x) % result !== 0)
    return false

  return true;
}