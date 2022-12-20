function solution(quiz) {
    let answer = [];
    for (let i = 0; i <quiz.length; i++) {
        quiz_index= quiz[i].split(" ")
        if(quiz_index[1] === "-") {
            if (Number(quiz_index[0]) - Number(quiz_index[2]) === Number(quiz_index[4])) {
                 answer.push("O")
            }else {
                 answer.push("X")
            }
        } else {
            if (Number(quiz_index[0]) + Number(quiz_index[2]) === Number(quiz_index[4])) {
                 answer.push("O")
                console.log("ddddd")
            }else {
                 answer.push("X")
                console.log("xxxxx")
            }
        }
    }
        return answer
}

let asdf = solution(["3 - 4 = -3", "5 + 6 = 11"])
console.log(asdf)