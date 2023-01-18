function solution(my_string) {
    var answer = [];
  for ( let i = 0; i < my_string.length; i++ ) {
    !isNaN(Number(my_string[i])) ? answer.push(Number(my_string[i])) : false
  }
    return answer.sort();
}

let asdf = solution("hi12392");
console.log(asdf);

