const jwt = require("jsonwebtoken");

async function main(){
    const jwt = require("jsonwebtoken");

const token = jwt.sign(
    {myPayloadData: 1234},
    "mysecretkey",
    {expiresIn: "10s"}
);

setTimeout(() => {

const decodeToken = jwt.decode(token);

const verifyToken = jwt.verify(token, "mysecretkey");
console.log(verifyToken)
}, 1500)

}

main();