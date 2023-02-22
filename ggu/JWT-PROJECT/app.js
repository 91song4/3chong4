async function main() {
    const jwt = require("jsonwebtoken");

    const token = jwt.sign(
        { myPayloadData: 1234 }, //jwt를 이용해서 payload 설정하는 부분
         "mysecretkey", // jwt를 이용해서 암호화를 하기 위한 비밀키
         { expiresIn: "1s" });

    setTimeout(() => {
        const decodeToken = jwt.decode(token); // jwt의 payload를 확인하기 위해 사용한다.

        // 1. 암호화를 할 때 사용한 비밀키가 일치하는지 검증
        // 2. 해당하는 jwt가 만료되었는지 검증
        const verifyToken = jwt.verify(token, "mysecretkey");
        console.log(verifyToken);
    }, 1500);

}


main();