function solution(num_list, n) {
    var answer = [];
    for (let i = 0; i < num_list.length / n; ++i) {
        answer.push([]);
        for (let j = 0; j < n; ++j) {
            answer[i].push(num_list[(i * n) + j]);
        }
    }
    return answer;
}