// function first(파라미터){
//     console.log(1)
//     파라미터()
// }
//
// function second(){
//     console.log(2)
// }
//
// function third() {
//     console.log(3)
// }
//
// first(third)

let numbers = [1,2,3,4,5];
// let arry = numbers.map(function (numbers) {return numbers});
// let arry = numbers.map((numbers) =>{return numbers})
//  let arry = numbers.map(numbers =>{return numbers})
 let arry = numbers.map(numbers =>  numbers)
console.log(arry)
