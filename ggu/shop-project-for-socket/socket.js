const socketIo = require("socket.io");
const http = require("./app");

const io = socketIo(http);

// 소켓 연결 이벤트 핸들링
io.on("connection", (sock) => {
  const { watchBuying, watchByeBye } = initSocket(sock);

  watchBuying();

  watchByeBye();
});

function initSocket(sock) {
  console.log("새로운 소켓이 연결되었어요!");

  // sock.on을 대신해서, 어떤 역할을 하는지 추상화 한 함수
  function watchEvent(eventName, func) {
    sock.on(eventName, func);
  }

  //현재 접속한 모든 클라이언트 들에게 메세지를 전송하는 구나 라고 이해할 수 있는 함수
  function sendMessageALL(eventName, data) {
    io.emit(eventName, data);
  }

  return {
    watchBuying: () => {
      watchEvent("BUY", (data) => {
        console.log(data);
        const emitData = {
          nickname: data.nickname,
          goodsId: data.goodsId,
          goodsName: data.goodsName,
          date: new Date().toISOString(),
        };

        sendMessageALL("BUY_GOODS", emitData);
      });
    },
    watchByeBye: () => {
      watchEvent("disconnect", () => {
        console.log(sock.id, "해당하는 사용자가 연결이 끊어졌어요!");
      });
    },
  };
}
