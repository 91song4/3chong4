const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const port = 3002;
const SECRET_KEY = `SONG4`;
let tokenObject = {};
app.use(cookieParser());

app.get("/", (req, res) => {
    res.status(200).send("Hello Token!");
})

app.get("/set-token/:id", (req, res) => {
    const { id } = req.params;
    const accessToken = createAccessToken(id);
    const refreshToken = createRefreshToken();
    console.log("accessToken", accessToken);
    console.log("refreshToken", refreshToken);

    tokenObject[refreshToken] = id;
    res.cookie("accessToken", accessToken);
    res.cookie("refreshToken", refreshToken);

    return res.status(200).send({ "message": "Token이 정상적으로 발급되었습니다." });
})

app.get("/get-token", (req, res) => {
    const { accessToken, refreshToken } = req.cookies;

    if (refreshToken === undefined) {
        return res.status(400).json({ "message": "Refresh Token이 존재하지 않습니다." });
    }
    if (accessToken === undefined) {
        return res.status(400).json({ "message": "Access Token이 존재하지 않습니다." });
    }

    const isAccessTokenValidate = validateToken(accessToken);
    const isRefreshTokenValidate = validateToken(refreshToken);

    if (isRefreshTokenValidate === false) {
        return res.status(419).json({ "message": "Refresh Token이 만료되었습니다." });
    }
    if (isAccessTokenValidate === false) {
        const accessTokenId = tokenObject[refreshToken];
        if (accessTokenId === undefined) {
            return res.status(419).json({ "message": "Refresh Token의 정보가 서버에 존재하지 않습니다." });
        }

        const newAccessToken = createAccessToken(accessTokenId);
        res.cookie("accessToken", newAccessToken);
        return res.json({ "message": "Access Token을 새롭게 발급하였습니다." });
    }

    const { id } = getJwtPayload(accessToken);
    return res.json({ "message": `${id}의 Payload를 가진 Token이 성공적으로 인증되었습니다.` });
})

app.listen(port, () => {
    console.log(port, "Server On!");
})

function createAccessToken(id) {
    const accessToken = jwt.sign(
        { id },
        SECRET_KEY,
        { expiresIn: "10s" }
    );

    return accessToken;
}

function createRefreshToken() {
    const refreshToken = jwt.sign({},
        SECRET_KEY,
        { expiresIn: "7d" }
    );

    return refreshToken;
}

function validateToken(token) {
    if (getJwtPayload(token) === null)
        return false;
    return true;
}

function getJwtPayload(accessToken) {
    try {
        const payload = jwt.verify(accessToken, SECRET_KEY);
        return payload;
    } catch (err) {
        return null;
    }
}