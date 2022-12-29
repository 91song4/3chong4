function solution(a, b) {
  let answer = 0;
  let arr = [];
  // a ~ b까지 숫자를 더해준답 ( a b 포함)
  // 3 ~ 5
  // a < b , a ++
  // 3 + 4 + 5

  arr.push(a, b);
  arr.sort((a,b) => a-b);
  console.log(arr);
  for ( let i = arr[0]; i < arr[1]+1; i++ ) {
    answer +=  i;

  }
  return answer;
}

let asdf = solution(3, 5);
let asdf2 = solution(-5, -5);
let asdf3 = solution(10, -11);
console.log("1",asdf);
console.log("2",asdf2);
console.log("3",asdf3);


//   for ( let i = 0; i <= Math.abs(arr[0] - arr[1]); i++ ) {
//     answer += arr[0] + i;
//
//   }
//   return Math.abs(answer);
// }