function solution(box, n) {
    let answer = box.map(x => Math.floor(x / n))
    return answer.reduce((a,b) =>  a* b );
}


let asdf = solution([10, 8, 6]	,3);
console.log(asdf);
