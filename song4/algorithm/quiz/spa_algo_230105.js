// K번째 수

function solution(array, commands) {
  const answer = [];
  let tempArr = [];
  for (const num of commands) {
    for (let i = num[0]; i <= num[1]; ++i) {
      tempArr.push(array[i - 1]);
    }
    tempArr.sort((a, b) => a - b);
    answer.push(tempArr[num[2] - 1]);
    tempArr = [];
  }
  return answer;
}