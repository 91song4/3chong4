function sum3(a, b) {
    console.log(typeof a, 'a type');
    console.log(typeof b, 'b type');
    return a + b;
}
var inferenceCheck1 = sum3(10, 20);
console.log(inferenceCheck1);
console.log(typeof inferenceCheck1);
var inferenceCheck2 = sum3('10', 20);
console.log(inferenceCheck2);
console.log(typeof inferenceCheck2);
var inferenceCheck3 = sum3('10', '20');
console.log(inferenceCheck3);
console.log(typeof inferenceCheck3);
inferenceCheck3 = 2;
var test = 3;
test = '3';
var test2 = 4;
// test2 = '4';    //error
/**
 * 21번행과 24번행을 보면 분명 inference의 차이점이 있는 듯 보인다.
 * 24번행은 inference를 통해 타입이 number로 지정된 듯 하다(25번행의 오류를 통해 확인)
 *
 * 함수 sum3의 리턴타입을 지정하지 않아서
 * 15번행 inferenceCheck3의 타입이 string 이기를 기대했다.
 *
 * 17번행에서 string이 나오긴 했으나 19번 행에서 변수에 number로 재할당이 가능하다.
 * 이는 21번행의 any 타입과 같은 결과인 듯 하다.
 *
 * 어째서 이런일이 일어나는걸까?
 */ 
