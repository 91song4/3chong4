const express = require("express");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/signup.js");
const authRouter = require("./routes/login.js");
const postRouter = require("./routes/posts.js");

const { auth_middleware } = require("./routes/index.js");

const app = express();

app.use("/api", express.json());
app.use("/api", cookieParser());

app.use("/api/signup", userRouter);
app.use("/api/login", authRouter);
app.use("/api/posts", auth_middleware, postRouter);

app.use("/", (req, res) => {
    res.send('Hello test');
})


app.listen(8080, () => {
    console.log("Server On!");
})