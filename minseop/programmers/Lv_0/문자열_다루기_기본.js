function solution(s) {
  let answer = false;

    let regExp = /^[0-9]{4}$/g;
    let regExp1 = /^[0-9]{6}$/g;


    if (regExp.test(s) || regExp1.test(s) ){
      answer = true
    }

  return answer;
}

let asdf = solution("a233");
console.log(asdf);


//   for ( let i = 0; i <= Math.abs(arr[0] - arr[1]); i++ ) {
//     answer += arr[0] + i;
//
//   }
//   return Math.abs(answer);
// }