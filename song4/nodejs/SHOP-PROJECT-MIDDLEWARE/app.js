const express = require('express');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/shopping-demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));

const app = express();
const router = express.Router();

router.post('/users', async (req, res) => {
    const { nickname, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        res.status(400).send({
            "errorMessage": "password와 confirmPassword가 일치하지 않습니다."
        });
        return;
    }

    res.json({});
})

app.use('/api', express.urlencoded({ extended: false }), router);
app.use(express.static("./assets"));

app.listen(8080, () => {
    console.log("Server On!");
})
