function sum(a: number, b?: number): number {
    return a + b;
}

sum(10, 20); // 30
//   sum(10, 20, 30); // error, too many parameters
sum(10); // 타입 에러 없음

export { sum };