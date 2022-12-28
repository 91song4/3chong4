const socketIo = require("socket.io");
const http = require("./app");

const io = socketIo(http);
io.on("connection", (sock) => {
  const { watchBuying, watchByebye } = initSocket(sock);
  watchBuying();
  watchByebye();
});

function initSocket(sock) {
  console.log("새로운 소켓을 연결했어요!");

  function watchEvent(eventName, func) {
    sock.on(eventName, func);
  }

  function sendMessageAll(eventName, data) {
    io.emit(eventName, data);
  }

  return {
    watchBuying: () => {
      watchEvent("BUY", (data) => {
        const emitData = {
          ...data,
          date: new Date().toISOString()
        };

        io.emit("BUY_GOODS", emitData);
      });

    },
    watchByebye: () => {
      watchEvent("disconnect", () => {
        console.log(sock.id, "연결이 끊어졌어용");
      });
    }
  };
}