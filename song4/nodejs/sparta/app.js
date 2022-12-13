const express = require('express');
const connect = require("./schemas/index.js");
const router = require('./routes/goods.js');
const app = express();
const port = 3000;
connect();

app.use(express.json());

app.use('/api', router);

// app.listen을 통해서 서버를 연다.
app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
})