const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;

function addMessage( message ) {
	const ul = room.querySelector('ul');
	const li = document.createElement('li');
	li.innerText = message;
	ul.appendChild(li);
}

function handleMessageSubmit( event ) {
	event.preventDefault();
	const input = room.querySelector("#msg input");
	const value = input.value;
	socket.emit("new_message", input.value, roomName, () => {
		addMessage(`나: ${value}`);
	});
	input.value = "";
}


function handleNicknameSubmit( event ) {
	event.preventDefault();
	const input = room.querySelector("#name input");
	socket.emit("nickname", input.value);
}

function showRoom() {
	welcome.hidden = true;
	room.hidden = false;
	const h3 = room.querySelector("h3");
	h3.innerText = `Room : ${roomName}`;
	const msgForm = room.querySelector("#msg");
	const nameForm = room.querySelector("#name");
	msgForm.addEventListener("submit", handleMessageSubmit);
	nameForm.addEventListener("submit", handleNicknameSubmit);
}

function handleRoomsSubmit( event ) {
	event.preventDefault();
	const input = form.querySelector("input");
	socket.emit("enter_room", input.value, showRoom);
	roomName = input.value;
	input.value = "";

}

form.addEventListener("submit", handleRoomsSubmit);

socket.on("welcomeMsg", ( user, newCount ) => {
	const h3 = room.querySelector("h3")
	h3.innerText = `Room ${roomName} (${newCount})`
	addMessage(`${user} 참가하였습니다!!`);
});

socket.on("bye", ( user, newCount ) => {
	const h3 = room.querySelector("h3")
	h3.innerText = `Room ${roomName} (${newCount})`
	addMessage(`${user} 퇴장하셨습니다!!`);
});

socket.on("new_message", addMessage);

socket.on("room_change", ( rooms ) => {
	const roomList = welcome.querySelector("ul");
		roomList.innerText =""
	if(rooms.length === 0) {
		return;
	}
	rooms.forEach(( room ) => {
		const li = document.createElement("li")
		li.innerText = room;
		roomList.append(li);
	});
});