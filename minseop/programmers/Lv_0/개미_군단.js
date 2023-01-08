function solution(hp) {
  var answer = 0;

  // A = 5 , B = 3 , C = 1
  // 소수가 나오면 안되니  floor 함수 사용
  // hp / a -> 나머지를  b ,c 랑 나누어떨어지는지 검샤

  const a = Math.floor(hp / 5) //4
  const b = Math.floor((hp - a * 5 ) / 3)
  const c = Math.floor(hp - a * 5 - b * 3)

  return a + b + c
}

let asdf = solution(23);
console.log(asdf);