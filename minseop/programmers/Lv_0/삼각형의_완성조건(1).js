function solution(sides) {
    sides.sort(function (a,b){
        return b-a
    })
    return sides[0] < sides[1] + sides[2] ? 1 : 2
}

// var asdf = solution([1, 2, 3])
var asdf = solution([199, 72, 222])
console.log(asdf)