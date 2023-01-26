// | => union 타입 강의 찍을때 교차타입이라고 설명을 잘못했습니다.
function create(o: object | null): void {}

create({ prop: 0 }); // 성공
create(null); // 성공

create(42); // 오류
create("string"); // 오류
create(false); // 오류
create(undefined); // 오류