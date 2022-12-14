const express = require('express');
const connect = require("./schemas/index.js");
const goodsRouter = require('./routes/goods.js');
const cartsRouter = require('./routes/carts.js');
const app = express();
const port = 3000;
connect();

app.use(express.json());

app.use((req, res) => {
    console.log('Request URL:', req.originalUrl, ' - ', new Date());
})

app.use('/api', [goodsRouter, cartsRouter]);

app.get('/', (req, res) => {
    res.send("Hello World!");
});

// app.listen을 통해서 서버를 연다.
app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
})