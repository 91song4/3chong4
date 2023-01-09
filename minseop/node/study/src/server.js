import express from "express";
import path from 'path';
import http from "http";
import WebSocket, { WebSocketServer } from "ws";

const __dirname = path.resolve();

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");

app.use("/public", express.static(__dirname + "/src/public"));

app.get('/', ( req, res ) => res.render("home"));
app.get('/*', ( req, res ) => res.redirect('/'));


const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const sockets = [];


wss.on("connection", ( socket ) => {
	sockets.push(socket);
	console.log("Connected to Browser ✅ ");
	socket.on("close", () => console.log("DisConnected from the Browser ❌ "));
	socket.on("message", ( message ) => {
		sockets.forEach(aSocket => aSocket.send(message.toString()));
	});
});

const handleListen = () => console.log(`listening on http://localhost:3000`);
server.listen(3000, handleListen);

