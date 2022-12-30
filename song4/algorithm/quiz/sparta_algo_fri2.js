function solution(n, arr1, arr2) {
    let answer = [];
    let key = "";
    for (let i = 0; i < n; ++i) {
        const key1 = arr1[i].toString(2).padStart(n, "0");
        const key2 = arr2[i].toString(2).padStart(n, "0");
        for (let j = 0; j < n; ++j) {
            if (key1[j] === "1" || key2[j] === "1") {
                key += "#";
            } else {
                key += " ";
            }
        }
        answer.push(key);
        key = "";
    }

    return answer;
}


console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));