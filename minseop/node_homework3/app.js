const {Op} = require("sequelize");
const {User} = require("./models");

const jwt = require("jsonwebtoken")

const express = require("express");
const app = express();
const router = express.Router();

app.use(express.json())

// 회원가입
router.post("/users", async (req, res) => {
    const {nickname, password, email, confirmPassword} = req.body;



    // pw에 닉네임이 포함
    if (password === nickname || password.indexOf(nickname) !== -1) {
        console.log(password.indexOf(nickname))
        res.status(402).json({
            errorMessage: "패스워드에 닉네임이 포함되어 있습니다."
        })
        return
    }

    // pw 불일치
    if (password !== confirmPassword) {
        res.status(402).json({
            // assets/register/error: function (error)
            errorMessage: "비밀번호 불일치"
        });
        return;
    }


    // db에 일치하는 정보 찾기
    const existUser = await User.findOne({
        where : {
            [Op.or]: [{nickname}, {email}]
        }
    })
    try {
        // 닉네임 중복
        if (existUser.nickname === nickname) {
            // console.log("exist Nickname In")
            res.status(402).json({
                errorMessage: "중복된 닉네임입니다."
            })
            return
        }

        // 이메일 중복
        if (existUser.email === email) {
            // console.log("exist email In")
            res.status(402).json({
                errorMessage: "이미 사용중인 Email."
            })
            return
        }

    } catch (error) {
        await User.create({email, nickname, password});
        console.log("crreate")
    }
         res.status(201).send({})
    console.log("send")
});

// 로그인

router.post("/auth", async (req,res) => {
    const {nickname, password} = req.body;

    const user = await User.findOne({
        where : {
            nickname
        }
    });
    console.log("user",user)

    if (!user || password !== user.password) {
        res.status(412).send({
            errorMessage: "닉네임 또는 패스워드를 확인해주세요"
        });
        return;
    }

    // res.cookie("token",token)
    //     .send({
    //         token: jwt.sign({ userId: user.userId}, "minseop-key")
    // })
    const token = jwt.sign({
         userId: user.userId},
        "minseop-key",
        { expiresIn: "1m"}
    )
    res.status(200).cookie('token', token).send({token:token});
});


const authMiddleware = require("./middlewares/auth-middleware")
router.get("/users/me", authMiddleware, async (req,res) => {
        res.json({user: res.locals.user});
})




app.use("/api", express.urlencoded({extended: false}), router);
app.use(express.static("assets"));

app.listen(8080, () => {
    console.log("서버가 요청을 받을 준비가 됐어요");
});

//npm run dev