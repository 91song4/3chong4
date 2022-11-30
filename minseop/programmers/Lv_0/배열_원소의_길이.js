
function solution(strlist) {
    var answer = [];
    for (i=0; i < strlist.length; i++) {
        answer.push(strlist[i].length)
    }
    console.log("머가리턴되나요"+answer)
    return answer;
}

var asdf = solution(["We", "are", "the", "world!"])
console.log(asdf)