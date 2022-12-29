import express from "express";
import path from 'path';
const __dirname = path.resolve();

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");

app.use("/public", express.static(__dirname + "/src/public"));

app.get('/', (req,res) => res.render("home"))
app.get('/*', (req, res) => res.redirect('/'))

app.listen(3000, () => {
  console.log('서버가 요청을 받을 준비가 됐어요');
});