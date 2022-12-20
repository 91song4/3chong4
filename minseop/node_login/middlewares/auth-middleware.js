// 모델
// jwt
const jwt = require("jsonwebtoken")
const User = require("../models/user")

module.exports = async (req, res, next) => {
    const {authorization} = req.headers;
    console.log(authorization)
    const [authType, authToken] = authorization.split(" ");
    // authType : Bearer
    // authToken : 실제 jwt 값

    if(authType !== "Bearer" || !authToken) {
        res.status(400).json({
            errorMessage: "로그인 후 사용이 가능한 API 입니다"
        });
        return;
    }

    try{
        // 복호화 및 검증
        const {userId} = jwt.verify(authToken,"sparta-secret-key")
        const user = await User.findById(userId);
        res.locals.user = user;
        next();

    }catch (error) {
        res.status(400).json({
            errorMessage: "로그인 후 사용이 가능한 API 입니다"
        })

    }

    return;
}