function solution(s1, s2) {
    var answer = 0;
    for (let i of s1){
        for (let j of s2) {
            if (i === j) {
                answer++
            }
        }
    }
    return answer;
}

var asdf = solution(["a", "b", "c"],["com", "b", "d", "p", "c"])
console.log(asdf)