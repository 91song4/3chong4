const express = require('express'); // 패키지를 들고와서 변수에 담는다.
const app = express();              // 패키지를 실행하고, app 객체를 만든다.
// const app = require('express')();
const port = 3000;
const router = require('./routes/goods.js');

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.query);
    res.send('response');
})



// app.get으로 api를 사용가능하게 만든다.
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

// app.use('/', router);

// app.listen을 통해서 서버를 연다.
app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
})