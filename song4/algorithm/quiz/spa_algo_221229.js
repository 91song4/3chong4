// 없는 숫자 더하기

function solution(numbers) {
  let answer = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9;
  for (const num of numbers) {
    answer -= num;
  }

  return answer;
}