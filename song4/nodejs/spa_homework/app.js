const express = require('express');
const connect = require('./schemas/');
const app = express();
connect();
const port = 3000;

app.listen(port, () => {
    console.log(`Server On Port: ${port}`);
})