function solution(keyinput, board) {
    let answer = [0, 0];
    const X = 0;
    const Y = 1;
    const MAX_X = parseInt(board[X] / 2);
    const MAX_Y = parseInt(board[Y] / 2);

    for (const move of keyinput) {
        switch (move) {
            case "left":
                if (answer[X] === -MAX_X)
                    break;
                answer[X] -= 1;
                break;
            case "right":
                if (answer[X] === MAX_X)
                    break;
                answer[X] += 1;
                break;
            case "up":
                if (answer[Y] === MAX_Y)
                    break;
                answer[Y] += 1;
                break;
            case "down":
                if (answer[Y] === -MAX_Y)
                    break;
                answer[Y] -= 1;
                break;
        } 
    }

    return answer;
}