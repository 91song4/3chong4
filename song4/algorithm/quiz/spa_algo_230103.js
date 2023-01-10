// 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
  let answer = arr.filter((num) => num % divisor === 0);

  if (answer.length === 0)
    return [-1]
  return answer.sort((a, b) => a - b);
}