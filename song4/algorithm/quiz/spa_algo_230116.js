function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => a - b);
  for (let num; (num = d.shift()) <= budget; answer++){
    budget -= num;
  }
  
  return answer;
}
solution([1, 3, 2, 5, 4], 9);
solution([2,2,3,3], 10);