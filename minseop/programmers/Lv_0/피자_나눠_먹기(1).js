function solution(n) {
    return n % 7 === 0 ? n / 7 : Math.floor(n / 7 )+1
}

// var asdf = solution(7)  // 1
var asdf = solution(15) // 3.14
console.log(asdf)