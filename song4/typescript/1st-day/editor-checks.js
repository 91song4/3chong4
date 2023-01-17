var user = {
    firstName: 'Angela',
    lastName: 'Davis',
    role: 'Professor'
};
// JS에서는 객체의 프로퍼티가 없으면 새로 생성시켜서 에러가 발생하지 않는다.
// TS에서는 객체의 프로퍼티가 없으면 새로 생성시키지 않고 에러를 발생시켜준다.
console.log(user.name);
