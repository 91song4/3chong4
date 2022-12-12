const main = async function() {
    // 비동기 함수의 결과 값은 항상 promise 객체로 resolve 된다 라고 소개한다.
    // 확인해보자.
    console.log('test');
    return 'test resolve';
}();

main.then(console.log);

// 진짜네.. ㄷㄷ