function solution(numbers, num1, num2) {
    var answer = [];
    answer = numbers.slice(num1, num2+1)
    return answer;
}

// var asdf = solution([1, 2, 3, 4, 5],1,3)
var asdf = solution([1, 3, 5],1,2)  // [3, 5]
console.log(asdf)