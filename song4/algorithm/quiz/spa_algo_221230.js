// x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  let answer = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += x;
    answer.push(sum)
  }


  return answer;
}