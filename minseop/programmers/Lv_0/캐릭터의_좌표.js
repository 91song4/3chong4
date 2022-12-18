function solution(keyinput, board) {
    const x = Math.floor(board[0] / 2) //   1
    const y = Math.floor(board[1] / 2)  // 1
    var answer = [0,0]

    for (const i of keyinput) {
        console.log('answer',answer[0])
        if (i === "left" && answer[0] !== -x) {     // 0 !== -1 // -1 !== -1
            answer[0] += -1
        }else if (i === "right" && answer[0] !== x) {
            answer[0] += +1
        }else if ( i === "up" && answer[1] !== y) {
            answer[1] += +1
        }else if ( i === "down" && answer[1] !== -y)  {
            answer[1] += -1
        }
    }
    return answer;
}

// let asdf = solution(["left", "right", "up", "right", "right"],[11, 11])
let asdf = solution(["left", "left", "left", "right"],[3, 3])
console.log(asdf)