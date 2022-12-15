const express = require('express');
const connect = require('./schemas');
const postRouter = require('./routes/posts.js');
const commentRouter = require('./routes/comments.js');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
connect();

app.use(express.json());
console.log('app.js test here');
// app.use('/',mongoose.Types.ObjectId);
app.use((req,res, next) =>
{
    console.log('app.js : app.get() test here');
    next();
});

// req를 인터셉트해서 다시 다음 동작이 하도록 보내주기.

app.use('/posts', postRouter);
app.use('/comments', commentRouter);

app.listen(port, () => {
    console.log(`Server On Port: ${port}`);
})