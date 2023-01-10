const WebSocket = require('ws');        // 웹소켄
var DB = require('./db.js');            // DB 관련 내용 쓰는 함수 예시
var CREATE = require('./create.js');    // 방이 만들어졌을때 하는 클래스
var db = new DB();


const wss = new WebSocket.Server({ port: 8005 });

const maxClients = 5;   // 최대 접속 인원수
let rooms = {};         // 룸 배열
let joinuserTemp = 1;   // 유저

db.LogMsg();

wss.on('connection', function connection(ws) {
    ws.user = genKey(5);        // 임시적으로 유저의 이름을 할당 시켜준다.

    var create = new CREATE();  // 방 생성 객체를 new로 선언한다.
    console.log(ws.user);


    ws.on('message', function message(data) {
        console.log(JSON.parse(data));  // 들어온 메세지를 로그로 확인한다.
        const obj = JSON.parse(data);
        const type = obj.type;
        const params = obj.params;

        switch (type) {
            case "create":          // type === create 일 때,
                //create(params);
                create.create(params, rooms, ws, db);
                break;
            case "join":            // type === join 일 때,                                       
                join(params);
                break;
            case "leave":           // type === leave 일 때,
                leave(params);
                break;
            default:                // 그 외의 경우
                console.warn(`Type: ${type} unknown`);
                break;
        }
    });

    function generalInformation(ws) {
        let obj;
        if (ws["room"] != undefined) {
            obj = {
                "type": "info",
                "params": {
                    "room": ws["room"],
                    "no-clients": rooms[ws["room"]].length,

                }
            }
        }
        else {
            obj = {
                "type": "info",
                "params": {
                    "room": "no room",
                }
            }
        }

        ws.send(JSON.stringify(obj));
    }


    // 분리하기 전에 임시로 방 이름을 할당하고 생성
    function create(params) {
        const room = genKey(5);
        console.log("room id : " + room);
        rooms[room] = [ws];
        ws["room"] = room;

        generalInformation(ws);
    }

    // 임시 유저 이름을 할당
    function genKey(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    function join(params) {
        const room = params.code;

        // 룸이 없으면 존재하지 않는다는 메세지
        if (!Object.keys(rooms).includes(room)) {
            console.warn(`Room ${room} does not exist!`);
            return;
        }

        // maxClients(5명) 이상 못들어가게 막는 코드
        if (rooms[room].length >= maxClients) {
            console.warn(`Room ${room} is full!`);
            return;
        }

        rooms[room].push(ws);
        ws["room"] = room;

        generalInformation(ws);

        var UserList = "";

        for (let i = 0; i < rooms[room].length; i++) {
            UserList += "User : " + rooms[room][i].user + " \n";
        }
        joinuserTemp += 1;

        obj = {
            "type": "info",
            "params": {
                "room": ws["room"],
                "UserList": "TTT : " + UserList

            }
        }

        for (var i = 0; i < rooms[room].length; i++) {
            rooms[room][i].send(JSON.stringify(obj));
        }

    }

    // 룸을 나가는 함수
    function leave(params) {
        const room = ws.room;

        if (rooms[room].length > 0) {
            rooms[room] = rooms[room].filter(so => so !== ws);

            ws["room"] = undefined;

            // 룸에 0명이 있을 경우
            if (rooms[room].length == 0) {
                close(room);
            }
        }

        // 룸을 제거하는 함수
        function close(room) {

            if (rooms.length > 0)
                rooms = rooms.filter(key => key !== room);
        }
    }



});