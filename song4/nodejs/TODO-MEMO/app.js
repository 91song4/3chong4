const express = require("express");
const cookieParser = require('cookie-parser');

const db = require('./models/index.js');
const todosRouter = require("./routes/todos.router.js");

const app = express();
app.use(cookieParser());
let session = {};

app.use("/api", express.json(), todosRouter);
app.use(express.static("./assets"));

app.get('/set-session', (req, res, next) => {
    const name = 'sparta';
    const uniqueInt = Date.now();
    session[uniqueInt] = { name };

    res.cookie('sessionKey', uniqueInt);
    return res.status(200).end();
})

app.get('/get-session', (req, res) => {
    const { sessionKey } = req.cookies;
    const name = session[sessionKey];
    return res.status(200).json({ name });
})    


app.listen(8080, () => {
    console.log("서버가 켜졌어요!");
});