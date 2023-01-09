const messageList = document.querySelector("ul");
const nickForm = document.querySelector("#nick");
const messageForm = document.querySelector("#message");

const socket = new WebSocket(`ws://${window.location.host}`);

function makeMessage( type, payload ) {
	const msg = { type, payload };
	return JSON.stringify(msg);
}

socket.addEventListener("open", () => {
	console.log("Connected to Sever ✅ ");
});

socket.addEventListener("message", ( message ) => {
	console.log("New message : ", message.data, "from the Server");
	const li = document.createElement("li");
	li.innerText = message.data;
	messageList.append(li);
});

socket.addEventListener("close", () => {
	console.log("DisConnected to Sever ❌ ");
});


// 유저가 서버로 메세지 보내기
function handleSubmit( event ) {
	event.preventDefault(); // 새로고침을 막아준다
	const input = messageForm.querySelector("input");
	socket.send(makeMessage("new_message", input.value));
	input.value = "";   // inputBox 기본값
}


function handleNickSubmit( event ) {
	event.preventDefault();
	const input = nickForm.querySelector("input");
	socket.send(makeMessage("nickname",input.value))
}

messageForm.addEventListener("submit", handleSubmit);
nickForm.addEventListener("submit", handleNickSubmit);