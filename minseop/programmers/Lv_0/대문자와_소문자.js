function solution(my_string) {

  // a < 97 === 대문자임
  // a > 97 === 소문자임

  const answer = [...my_string].map(asc => asc.charCodeAt() >= 65 && asc.charCodeAt() <= 95
  ? asc.toLowerCase() : asc.toUpperCase()).join("") ;

  return answer
}

let asdf = solution("abCdEfghIJ");
console.log(asdf);

