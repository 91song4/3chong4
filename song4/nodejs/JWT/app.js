const jwt = require('jsonwebtoken');

const payload = {
    "myPayloadData": 1234,
}

// Create JWT
const secretKey = "mysecretkey";
const token = jwt.sign(
    payload,
    secretKey
);
// console.log(token);

// JWT decoded
const decodeToken = jwt.decode(token);
console.log(decodeToken);