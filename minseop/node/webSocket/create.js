var LOOPS = require('./Loop.js');

var CREATE = function () {

	console.log("CREATEReadInfo");

};

CREATE.prototype.LogMsg = function () {
	console.log("CREATEConnect");
};

CREATE.prototype.generalInformation = function (ws, rooms) {
	let obj;
	if ( ws["room"] != undefined ) {
		obj = {
			"type": "info",
			"params": {
				"room": ws["room"],
				"no-clients": rooms[ws["room"]].length,

			}
		};
	} else {
		obj = {
			"type": "info",
			"params": {
				"room": "no room",
			}
		};
	}

	ws.send(JSON.stringify(obj)); // 클라이언트에 전달해준다.
};


CREATE.prototype.create = function (params, rooms, ws, db) {  // 생성 되었을때 함수
	const room = this.genKey(5);  // 랜덤으로 방 이름을 지정해주는 함수
	console.log("room id : " + room);
	rooms[room] = [ ws ];
	ws["room"] = room;

	this.generalInformation(ws, rooms);

	var loops = new LOOPS();  // 방이 만들어진 것을 확인 후에 시간 설정하는 클래스
	loops.StartLoops(params, rooms, ws, db, room);  // 해당 루프를 실행시킨다.
};

CREATE.prototype.genKey = function (length) { // 랜덤으로 방 이름을 지정
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	for ( let i = 0; i < length; i++ ) {
		result += characters.charAt(
			Math.floor(Math.random() * characters.length));
	}
	return result;
};

module.exports = CREATE;