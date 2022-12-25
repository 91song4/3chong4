function solution(my_string) {
    var answer = 0;
    let num = my_string.split("")

    for (let i = 0; i < num.length; i++) {
        if (Number(num[i])){
            answer += Number(num[i])
        }
    }
    return answer
}

let asdf = solution("aAb1B2cC34oOp")
console.log(asdf)