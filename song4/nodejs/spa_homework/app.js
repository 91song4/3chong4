const express = require('express');
const connect = require('./schemas');
const postRouter = require('./routes/posts.js');
const commentRouter = require('./routes/comments.js');
const app = express();
const port = 3000;
connect();

app.use(express.json());

app.use('/posts', postRouter);
app.use('/comments', commentRouter);

app.listen(port, () => {
    console.log(`Server On Port: ${port}`);
})