const jwt = require('jsonwebtoken');

const payload = {
    "myPayloadData": 1234,
}

const secretKey = "mysecretkey";
const token = jwt.sign(
    { payload },
    secretKey
);
console.log(token);