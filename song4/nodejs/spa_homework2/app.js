const express = require("express");
const router = require("./routes/users.js");
const app = express();

app.use('/api', express.urlencoded({ extended: false }), router);
app.use(express.static('./assets'));

app.listen(8080, () => {
    console.log("Server On!");
})