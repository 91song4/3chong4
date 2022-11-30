function solution(my_string, n) {
    var answer = '';
    for (let i = 0; i <my_string.length; i++) {
        if(my_string.indexOf(my_string[i]) === i) {
            answer += my_string[i]
            // answer = answer
        }
    }
    return answer;
}

var asdf = solution("hello")
console.log(asdf)