const jwt = require('jsonwebtoken');

const payload = {
    "myPayloadData": 1234,
}
const secretKey = "mysecretkey";

// Create JWT
const token = jwt.sign(
    payload,
    secretKey
);
// console.log(token);

// JWT decoded
// jwt의 Payload를 확인하기 위해서 사용한다.
const decodeToken = jwt.decode(token);
// console.log(decodeToken);

// verify JWT
const verifyToken = jwt.verify(token, secretKey);
// const verifyToken = jwt.verify(token, "secretKey");
console.log(verifyToken);