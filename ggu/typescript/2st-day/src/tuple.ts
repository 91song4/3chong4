// 튜플 타입으로 선언
let x: [string, number];

// 초기화
x = ["hello", 10]; // 성공

// 잘못된 초기화
//x = [10, "hello"]; // 오류

console.log(x[0].substring(1)); // 성공
console.log(x[1].substring(1)); // 오류, 'number'에는 'substring' 이 없습니다.

x[3] = "world"; // 오류, '[string, number]' 타입에는 프로퍼티 '3'이 없습니다.

console.log(x[5].toString()); // '[string, number]' 타입에는 프로퍼티 '5'가 없습니다.