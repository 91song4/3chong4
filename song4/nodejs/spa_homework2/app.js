const express = require("express");
const cookieParser = require("cookie-parser");

const usersRouter = require("./routes/signup.js");
const authRouter = require("./routes/login.js");
const postRouter = require("./routes/posts.js");

const app = express();

app.use("/api", express.json(), cookieParser());

app.use("/api/signup", usersRouter);
app.use("/api/login", authRouter);
app.use("/api/posts", postRouter);

app.use("/", (req, res) => {
    res.send('Hello test');
})


app.listen(8080, () => {
    console.log("Server On!");
})