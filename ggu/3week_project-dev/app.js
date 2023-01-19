// const express = require("express");
// const app = express();
// const port = 4000;

// const router = require("./routes");

// app.use(express.json()); // 클라이언트에서 제이슨형태로 보내준 형태만 파싱해준다!
// // Content-Type: application/x-www-form-urlencoded; charset=UTF-8 컨텐츠타입에서 어플리케이션/제이슨이었다면 처리가 되었을거다.
// app.use(express.urlencoded({extended: true})); // 이코드를 써줌으로써 위의 urlencoded타입도 해석하게해준다.
// app.use("/api", router);
// app.use("/", express.static("assets"));

// app.get("/", (req, res) => {
//   res.status(200).send("success");
// });

// app.listen(port, () => {
//   console.log(port, "포트로 서버가 열렸어요!");
// });

// module.exports = app;
// // 컨텐터 타입 어떤 타입으로 보낼건지 지정할수있음 (헤더)
// // https://kirkim.github.io/javascript/2021/10/16/body_parser.html

const express = require("express");
const app = express();
const port = 4000;
const logger = require("morgan");

const router = require("./routes");
const render = require("./render");
const path = require("path");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/api", router);
app.use("/", render);
app.set("views", path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "./views")));

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});

module.exports = app;
