const socketIo = require('socket.io');
const httpServer = require('./app.js');

const io = socketIo(httpServer);

io.on('connection', (sock) => {
  const { watchBuying, watchByebye } = initSocket(sock);
  watchBuying();
  watchByebye();
})

function initSocket(sock) {
  console.log(sock.id, '님이 연결되었습니다!');

  function watchEvent(event, func) {
    sock.on(event, func);
  }

  function notifyEveryone(event, emitData) {
    io.emit(event, emitData);
  }

  return {
    watchBuying: () => {
      watchEvent('BUY', (data) => {
        const emitData = {
          ...data,
          date: Date()
        };
        notifyEveryone('BUY_GOODS', emitData);
      })
    },
    watchByebye: () => {
      watchEvent('disconnect', () => {
        console.log(sock.id, "님의 연결이 끊어졌습니다!");
      })
    }
  }
}