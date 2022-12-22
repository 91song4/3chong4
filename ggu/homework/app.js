const express = require("express");
const app = express();
const router = express.Router();

app.use(express.json());

app.use((req, res, next) => {
    console.log('Request URL:', req.originalUrl, ' - ', new Date());
    next();
});

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(8080, () => {
    console.log('서버가 요청을 받을 준비가 됐어요');
});