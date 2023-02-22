const socketIo = require("socket.io");
const http = require("./app");

const io = socketIo(http);

io.on("connection", (sock) => {
    const { req_user, res_shop } = initSocket(sock);
  
    req_user();
  
    res_shop();
  });
  
  function initSocket(sock) {
    // 소켓 사용자가 연결되었을때
    console.log("새로운 소켓이 연결되었습니다.");
  
    // sock.on을 대신하여 어떤 역할을 하는지 추상화 한 함수
    function watchEvent(eventName, func) {
      // 첫번째 인자에는 어떤 이벤트네임이 들어왔을때 실행할것인지? 두번째 인자에는 실제로 실행되어야할 함수
      sock.on(eventName, func);
    }
  
    // 현재 접속한 모든 클라이언트들에게 메세지를 전송하는 구나 라고 이해할수있는 함수 (추상화)
    function sendMassageAll(eventName, data) {
      io.emit(eventName, data);
    }
  
    return {
      req_user: () => {
        watchEvent("BUY", (data) => {
          // 위의 watchEvent가 있으니 sock.on 대신 watchEvent 사용
          console.log(data);
          const emitData = {
            // 데이터를 전달해야하기에 객체로 만들어준다.
            nickname: data.nickname,
            goodsId: data.goodsId,
            goodsName: data.goodsName,
            date: new Date().toISOString(),
          };
          io.emit("BUY_GOODS", emitData); // 서버와 연결된 모든 클라이언트에게보냄(buy_goods라는 이벤트를 전달할거고 emitData라는 값을 전달할거다)
        }); // 만약 특정 사용자가 우리서버에 buy이벤트를 통해 데이터를 전달하게 된다면 해당 코드가 실행되도록
      },
      res_shop: () => {
        watchEvent("disconnect", () => {
          // 위의 watchEvent가 있으니 sock.on 대신 watchEvent 사용
          // 소켓 사용자가 연결이 끊어졌을때(새로고침이나 로그아웃 등)
          console.log(sock.id, "<의 사용자의 연결이 끊어졌습니다.");
        });
      },
    };
  }