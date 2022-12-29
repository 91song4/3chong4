function solution(quiz) {
  let answer = '';
  // 10 => -4 == 6
  // 5 => - 4 === 1
  // 퀴즈 - 4 = b
  // 퀴즈 앞에서부터 b개 인덱스를 *로 바꿔준답

  for ( let i = 0; i < quiz.length; i++ ) {
    if ( i < quiz.length - 4 ) {
      answer += "*";
    } else {
      answer += quiz[i]
    }
  }
  return answer;
}

let asdf = solution("01033334444");
console.log(asdf);