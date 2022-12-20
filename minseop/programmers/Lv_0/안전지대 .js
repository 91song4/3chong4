function solution(board) {
    let answer = 0;
    let danjer = [
        [0, 1],
        [0, -1],
        [1, 0],
        [1, 1],
        [1, -1],
        [-1, 0],
        [-1, 1],
        [-1, -1]
    ]

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                danjer.forEach((item) => {
                    let [nextX, nextY] = item;
                    [nextX, nextY] = [i + nextX, j + nextY];
                    // 지뢰가 start[i] or start[j] or end[i] or end[j]

                    if (
                        nextX >= 0 &&
                        nextX < board.length &&
                        nextY >= 0 &&
                        nextY < board.length && board[nextX][nextY] === 0
                    ){

                    board[nextX][nextY] = 2;
                    }
                })
            }
        }
    }
    board.forEach(a => a.forEach( b => b === 0 ? answer++ : 0))
    console.log(board)
    return answer
}

let asdf = solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]])
// let asdf = solution([[0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 1]])
console.log(asdf)


//board[i][j] === 1
//board[i - 1][j - 1], [i - 1][j + 0] [i - 1][j + 1]=> 2 mmmm
//board[i + 0][j - 1], [i + 0][j + 1] => 2
//board[i + 1][j - 1], [i + 1][J + 0] [i + 1][j + 1]=> 2
// 지뢰가 start[i] or start[j] or end[i] or end[j]