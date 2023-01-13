// 3진법 뒤집기

function solution(n) {
  let answer = '';
  const ternary = n.toString(3);

  for (let i = 0; i < ternary.length; ++i) {
    answer = ternary[i] + answer;
  }

  return Number.parseInt(answer, 3);
}

solution(45);