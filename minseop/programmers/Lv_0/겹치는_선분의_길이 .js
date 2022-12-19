function solution(lines) {
    let answer = 0;
    let arr = Array(200).fill(0)

    //console.log(lines[0][1]  +100)

    for (let i = 0; i < lines.length; i++) {
                            // 98      98 < 101 //  => 98 99 100
        for (let j = lines[i][0] +100; j < lines[i][1] +100; j++) {
            arr[j]++
        }
    }
    for (let i = 0; i < 200; i++) {
        if (arr[i] > 1) {
            answer++
        }
    }
    return answer;
}

let asdf = solution([[-2, 1], [2, 5], [3, 9]])
console.log(asdf)