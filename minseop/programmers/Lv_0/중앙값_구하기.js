function solution(array) {
    var answer = 0;
    array.sort(function(a,b) {
        return a - b;
    });
    answer = Math.floor(array.length / 2)
    return array[answer];
}

// var asdf = solution([1, 2, 7, 10, 11]	)
var asdf = solution([9, -1, 0]) // 0
console.log(asdf)