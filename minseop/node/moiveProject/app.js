const express = require('express')
const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`))

const router = require('./src/routes')  // routes/index.js를 가리킨다.
app.use('/', router);

module.exports = app;