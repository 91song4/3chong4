const jwt = require('jsonwebtoken');

const payload = {
    "myPayloadData": 1234,
}
const secretKey = "mysecretkey";

let token;
// Create JWT
(async () => {
    console.log('test1');
    token = jwt.sign(
        payload,
        secretKey,
        { expiresIn: "1s" }
    );
})();

console.log('test2');
setTimeout(() => {
    console.log('test3');
    // verify JWT
    const verifyToken = jwt.verify(token, secretKey);   // 만료시간 지났을 때: jwt expired
    // const verifyToken = jwt.verify(token, "secretKey"); //시크릿키 틀릴 때: invalid signature
    console.log(verifyToken);
    
}, 1500);
console.log('test4');
// console.log(token);

// JWT decoded
// jwt의 Payload를 확인하기 위해서 사용한다.
// const decodeToken = jwt.decode(token);
// console.log(decodeToken);
