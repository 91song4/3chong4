/**
 * 파라미터에 타입을 정하지 않을 경우 암시적으로 any타입이 된다.
 * tsconfig.json 에서 "noImplicitAny": true, 옵션을 줘서 암시적 any타입을 허용하지 않는다.
 * 그래서 이 함수는 에러가 난다.
 */
function function_sum1(a, b) {
  return a + b;
}

function function_sum2(a: number, b: number): number {
  return a + b;
}
