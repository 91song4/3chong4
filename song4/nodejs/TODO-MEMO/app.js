const express = require("express");
const cookieParser = require("cookie-parser");

const db = require('./models/index.js');
const todosRouter = require("./routes/todos.router.js");

const app = express();

app.use(cookieParser());

app.use("/api", express.json(), todosRouter);
app.use(express.static("./assets"));

// app.get('/set-cookie', (req, res) => {
//     console.log('set1');
//     const expire = new Date();
//     expire.setMinutes(expire.getMinutes() + 60); // 쿠키만료시간 60분 설정.

//     res.writeHead(200, {
//         'set-Cookie': `name=sparta; Expries=${expire.toGMTString()}; HttpOnly; Path=/`,
//     });
//     return res.status(200).end();
// })

app.get('/set-cookie', (req, res) => {
    console.log('set2');
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60);

    res.cookie('name', 'sparta', {
        expires: expires
    });
    return res.status(200).end();
})

app.get('/get-cookie', (req, res) => {
    const cookie = req.cookies;
    console.log(cookie);
    return res.status(200).json({ cookie });
})




app.listen(8080, () => {
    console.log("서버가 켜졌어요!");
});