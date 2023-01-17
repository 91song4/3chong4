/*
 배열과 튜플은 비슷하지만 다르다.
 둘의 차이점은 요소의 타입에 있다.
 배열은 요소들의 타입이 한가지로 일치하지만,
 튜플은 요소들의 타입이 다를 수 있다.
*/

let x: [string, number] = ["hello", 10];

// x.push("test");
// x.push(1234);
// x[1] = 99;

// let x: [string, number];
// x = ['hello', 10];
// x = [10, 'hello'];

console.log(x);

console.log(x[0].substring(1));     // 성공
// console.log(x[1].substring(1));  // 오류, type number 는 substring이 없다.

// substring은 type string의 프로토타입 메서드 이다.
