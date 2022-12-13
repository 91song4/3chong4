//express 라는 라이브러리에서 라이브러리를 express라는 변수에 할당
const express = require("express")

//express.Router라는 함수를 실행해서 router라는 변수에 할당
const router = express.Router();

//반환 받은 router라는 변수를 이용해서
//GET 메서드 라는걸 들어왔을때 / 기본경로로 들어왔을때 해당코드를 실행할꺼다
//어떤코드를 반환하냐면(response) "default ~~"라는 문자열을 반환할
//API를 하나 만들거고

// localhost:3000/api/
router.get('/',(req,res) =>{
    res.send("default url for goods.js GET Method")
})

//GET 메서드로 들어온 즉, about라는 경로에 들어온 GET메서드를 실행을 할 거다
//res 우리는 반환을 할 거고 데이터는"goods.js ~~"문자열을 반환 할거다
//라는 라우터를 만들었다

// localhost:3000/api/about GET
router.get('/about',(req,res) => {
    res.send("goods.js about PATH")
})

// router 라는 변수를 밖으로 내보내 준다
module.exports = router;