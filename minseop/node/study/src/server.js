import express from "express";
import path from 'path';
import http from "http";
// import WebSocket, { WebSocketServer } from "ws";
import { Server } from "socket.io";

const __dirname = path.resolve();

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");

app.use("/public", express.static(__dirname + "/src/public"));

app.get('/', ( req, res ) => res.render("home"));
app.get('/*', ( req, res ) => res.redirect('/'));


const httpServer = http.createServer(app);
const wsServer = new Server(httpServer);

wsServer.on("connection", ( socket ) => {
	socket.onAny(( event ) => {
		console.log(`Socket Event: ${event}`);
	});
	socket.on("enter_room", ( roomName, done ) => {
		socket.join(roomName);
		done();
		socket.to(roomName).emit("welcomeMsg");
	});
	socket.on("disconnect", () => {
		socket.rooms.forEach(room => socket.to(room).emit("bye"));
	});
	socket.on("new_message", ( msg, room, done ) => {
		socket.to(room).emit("new_message", msg);
		done();
	});
});

//const wss = new WebSocketServer({ server });
//
// const sockets = [];
//
//
// wss.on("connection", ( socket ) => {
// 	sockets.push(socket);
// 	socket["nickname"] = "Anon";
// 	console.log("Connected to Browser ✅ ");
// 	socket.on("close", () => console.log("DisConnected from the Browser ❌ "));
// 	socket.on("message", ( msg ) => {
// 		const message = JSON.parse(msg);
// 		switch ( message.type ) {
// 			case "new_message":
// 				sockets.forEach(aSocket => aSocket.send(`${socket.nickname}: ${message.payload}`.toString()));
// 				break
// 			case "nickname":
// 				socket["nickname"] = message.payload;
// 				break
// 		}
// 	});
// });

const handleListen = () => console.log(`listening on http://localhost:3000`);
httpServer.listen(3000, handleListen);

