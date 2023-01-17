function sum2(a, b) {
    return a + b;
}
var total = sum2(10, 20);
console.log(total);
console.log(total.toString());
// JS는 toString()의 자동완성이 되지 않는다
// TS는 toString()의 자동완성이 된다