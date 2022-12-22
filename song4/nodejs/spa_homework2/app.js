const express = require("express");
const cookieParser = require("cookie-parser");

const usersRouter = require("./routes/users.js");
const authRouter = require("./routes/auth.js");
const app = express();

app.use("/api", express.json(), express.urlencoded({ extended: false }), cookieParser());

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);

app.use("/", (req, res) => {
    res.send('Hello');
})


app.listen(8080, () => {
    console.log("Server On!");
})