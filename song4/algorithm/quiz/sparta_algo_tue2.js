// 문제 설명
// 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
//              X   X   X
//              X   O   X
//              X   X   X
// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// board는 n * n 배열입니다.
// 1 ≤ n ≤ 100
// 지뢰는 1로 표시되어 있습니다.
// board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.

function setDangerArea(arr, set_i, set_j) {
    let startI = set_i;
    let endI = set_i + 3;
    let startJ = set_j;
    let endJ = set_j + 3;

    if (startI < 0)
        startI++;
    if (endI > arr.length)
        endI--;
    if (startJ < 0)
        startJ++;
    if (endJ > arr.length)
        endJ--;

    for (let i = startI; i < endI; ++i) {
        for (let j = startJ; j < endJ; ++j) {
            arr[i][j] = 2;
        }
    }
    return arr;
}

function solution(board) {
    const length = board.length;
    const answer = [];
    for (let i = 0; i < board.length; ++i) {
        answer.push(new Array(board.length).fill(0));
    }

    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[i].length; ++j) {
            if (board[i][j] === 1) {
                setDangerArea(answer, i - 1, j - 1);
            }
        }
    }
    console.log(answer);
    let count = 0;
    for (const element of answer) {
        for (const check of element) {
            if (check === 0)
                ++count;
        }
    }
    return count;
}

// console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]));
// console.log();
// console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]));
// console.log();
// console.log(solution([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]));
console.log(solution([[0]]));