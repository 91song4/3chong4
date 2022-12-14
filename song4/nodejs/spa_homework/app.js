const express = require('express');
const connect = require('./schemas');
const router = require('./schemas');
const app = express();
connect();

app.use(express.json());

app.use('/', [router]);
const port = 3000;

app.listen(port, () => {
    console.log(`Server On Port: ${port}`);
})