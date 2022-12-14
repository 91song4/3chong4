const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/spa_homework')
        .catch(err => console.log(err));
}

mongoose.connection.on('error', () => {
    console.error("몽고디비 연결 에러", err);
})

module.exports = connect;