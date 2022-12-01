function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? 1 : 2
}

var asdf = solution(144)
console.log(asdf)