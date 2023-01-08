const express = require("express");
const { createServer } = require("http");
const { Server } = require("http");

const app = express();
const httpServer = createServer(app);

console.log('test1',createServer);
console.log('test2',Server);
console.log('test3',require('http'));

const io = require('socket.io')(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

httpServer.listen(3000, () => {
  console.log("서버가 요청을 받을 준비가 됐어요");
});