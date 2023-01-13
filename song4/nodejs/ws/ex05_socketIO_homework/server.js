var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('view engine', 'ejs'); // 랜더링 모드를 ejs 로 설정
app.set('view', __dirname + '/views'); // ejs 폴더 지정

const { initGame, gameLoop, UpdateMovement } = require('./game');

app.get('/', (req, res) => {

  res.render('index');            //index.ejs 를 사용자에 전달 
});

const state = {};
const clientRooms = {};

io.on('connection', client => {

  //해당 내용을 구현해주세요!!



});

function handleKeydown(keyCode) {    //client.on KeyDowm handleKeydown
  const roomName = clientRooms[client.id];


  UpdateMovement(state[roomName], client.number, keyCode);
}

function startGameInterval(roomName)    //게임에 Join 이 되었을 룸을 시작 할 수 있게 제작
{
  const intervalID = setInterval(() => {

    //const Winner = gameLoop(state[roomName])



  }, 1000 / 30);


}

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
}


server.listen(3000, function () {
  console.log("3000 포트 대기중 ");

});