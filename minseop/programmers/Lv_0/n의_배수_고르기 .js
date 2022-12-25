function solution(n, numlist) {
    var answer = [];
    for (const i of numlist) {
        i % n === 0 ? answer.push(i) : false
    }
    return answer;
}

var asdf = solution(3,[4, 5, 6, 7, 8, 9, 10, 11, 12])
console.log(asdf)