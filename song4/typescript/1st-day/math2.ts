function sum2(a:number, b:number):number{
  return a + b;
}

const total = sum2(10, 20);
console.log(total);
console.log(total.toString());
// JS는 toString()의 자동완성이 되지 않는다
// TS는 toString()의 자동완성이 된다

/**
 * toString()의 자동완성에 대하여
 * 4번행 total의 타입이 JS에서는 정해지지 않았다.
 * typeof total === ( number | string | object | ... ) 이기 때문이다.
 * 
 * 그러나 TS에서는 타입을 정하기 때문에 1번행의 리턴 타입이 number이고,
 * 그로인해 typeof total === number 인게 확실해진다.
 * 그래서 number의 프로토타입 메소드인 toString()을 사용할 수 있는 것이다.
 */