// 콜라츠 추측

function solution(num) {
  let count = 0;
  let result = num;
  for (count; result !== 1; ++count) {
    if (count === 500)
      return -1;
    
    if (result % 2 === 0)
      result /= 2;
    else
      result = (result * 3) + 1;
  }
  return count;
}