const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/todo-demo', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => { return console.log("connect") })
        .catch((err) => { return console.log('connect error') });
})();

const db = mongoose.connection;
mongoose.connection.on('error', (err) => { return console.error.bind(console, 'connection error:'); })

module.exports = db;