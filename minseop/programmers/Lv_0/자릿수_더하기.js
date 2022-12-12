function solution(n) {
    var answer = n.toString()
    sum_num = 0;

    for (i of answer){
        sum_num += Number(i)
    }
    return sum_num;
}

// var asdf = solution(1234)
var asdf = solution(12345)
console.log(asdf)