// 숫자 문자열과 영단어

function solution(s) {
  let answer = '';
  let temp = '';
  const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  for (const num of s) {
    temp += num;
    if (!isNaN(+num)) {
      answer += num;
      temp = '';
      continue;
    }
    let index = nums.indexOf(temp);
    if (index !== -1) {
      answer += index;
      temp = '';
      continue;
    }
  }
  return +answer;
}