const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs'); // 랜더링 모드를 ejs 로 설정
app.set('views', __dirname + '/views'); // ejs 폴더 지정

const e = require('express');
const { initGame, gameLoop, UpdateMovement } = require('./game');

app.get('/', (req, res) => {

  res.render('index');            //index.ejs 를 사용자에 전달 
});

const state = {};
const clientRooms = {};

io.on('connection', client => {
  // 핸들러 선언문
  client.on('newGame', handleNewGame);
  client.on('joinGame', handleJoinGame);
  client.on('keydown', handleKeydown);


  function handleJoinGame(roomName) {
    const room = io.sockets.adapter.rooms.get(roomName); // adapter를 통하여 room 정보를 가져옴

    let numClients = 0;

    if (room === undefined) {
      return client.emit('unknownCode');
    }

    numClients = room.size; // room 안에 몇명이 있는지 알아오는 변수

    if (numClients === 0) {
      return client.emit('unknownCode');
    } else if (numClients > 1) {
      return client.emit('tooManyPlayers');
    }

    clientRooms[client.id] = roomName;

    client.join(roomName);
    client.number = 2;
    client.emit('init', 2);

    startGameInterval(roomName);
  }

  //게임 방을 만드는 함수 핸들러
  function handleNewGame() {
    let roomName = makeid(5);
    clientRooms[client.id] = roomName;
    client.emit('gameCode', roomName);

    state[roomName] = initGame();

    client.join(roomName);
    client.number = 1;
    client.emit('init', 1);
  }

  function handleKeydown(keyCode) {    //client.on KeyDowm handleKeydown
    const roomName = clientRooms[client.id];

    if (!roomName) {
      return;
    }

    try {
      keyCode = parseInt(keyCode);
    } catch (e) {
      return console.error(e);
    }

    UpdateMovement(state[roomName], client.number, keyCode);
  }
});


function startGameInterval(roomName)    //게임에 Join 이 되었을 때 룸을 시작 할 수 있게 제작
{
  const intervalId = setInterval(() => {
    const winner = gameLoop(state[roomName]);

    if (!winner) {
      emitGameState(roomName, state[roomName]);
    } else {
      emitGameOver(roomName, winner);
      state[roomName] = null;
      clearInterval(intervalId);  // intervalId 인터벌을 종료
    }
  }, 1000 / 30);


}

function emitGameState(room, gameState) {
  io.sockets.in(room).emit('gameState', JSON.stringify(gameState));
}

function emitGameOver(room, gameState) {
  io.sockets.in(room).emit('gameOver', JSON.stringify(winner));
}


function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return result;
}


server.listen(3000, function () {
  console.log("3000 포트 대기중 ");

});