function solution(array) {
    let answer = Math.max(...array)
    let index = array.indexOf(answer)

    return [answer, index];
}

let asdf = solution([1, 8, 3]);
console.log(asdf);
