const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const User = require('./models/user.js');

const authMiddleware = require('./middlewares/auth-middleware.js');


mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/shopping-demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log('mongoDB connect success'); });

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));

const app = express();
const router = express.Router();

// 회원가입
router.post('/users', async (req, res) => {
    const { nickname, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).send({
            "errorMessage": "password와 confirmPassword가 일치하지 않습니다."
        });
    }

    const existUser = await User.findOne({
        $or: [{ email }, { nickname }]
    });

    if (existUser !== null) {
        return res.status(400).json({
            errorMessage: "Email이나 Nickname이 이미 사용 중 입니다."
        });
    }
    const salt = crypto.randomBytes(128).toString('base64');
    const hash = crypto.createHash('sha512').update(password + salt).digest('hex');
    const user = new User({ nickname, email, password: hash, salt });
    await user.save();

    res.status(201).json({});
})

// 로그인
router.post('/auth', passwordToHash, async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        $and: [{ email }, { password }]
    });
    
    // 패스워드가 일치하지 않을 때
    if (user === null) {
        return res.status(400).json({ "errorMessage": "password가 일치하지 않습니다." });
    }
    
    const token = jwt.sign({ userId: user.userId }, "sparta-secret-key");

    res.status(200).json({ token });
})

router.get('/users/me',authMiddleware, async (req, res) => {
    const user = res.locals.user;
    res.json({ user });
})

app.use('/api', express.urlencoded({ extended: false }), router);
app.use(express.static("./assets"));

app.listen(8080, () => {
    console.log("Server On!");
})

async function passwordToHash(req, res, next) {
    const { password, email } = req.body;
    const user = await User.findOne({ email });
    // 사용자가 존재하지 않을 때
    if (user === null) {
        return res.status(400).json({ "errorMessage": "사용자가 존재하지 않습니다." });
    }
    
    hash = crypto.createHash('sha512').update(password + user.salt).digest('hex');
    req.body.password = hash;
    next();
}