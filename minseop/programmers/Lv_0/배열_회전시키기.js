function solution( numbers, direction ) {
	direction === "right" ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
	return numbers;
}

var asdf = solution([ 1, 2, 3 ], "right");
console.log(asdf);