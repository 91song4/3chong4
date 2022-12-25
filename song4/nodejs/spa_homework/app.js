const express = require('express');
const mongoose = require('mongoose');

const postRouter = require('./routes/posts.js');
const commentRouter = require('./routes/comments');

const { setObjectId } = require('./routes/index');

const connect = require('./schemas');

const app = express();
const port = 3000;

connect();
app.use(express.json());


// postRouter.param('_postId', (req, res, next, id) =>
// {
//     console.log('test here');
//     setObjectId('_postId', req, id);
//     next();
// })

// commentRouter.param('_postId', (req, res, next, id) =>
// {
//     setObjectId('_postId', req, id);
//     next();
// })

// commentRouter.param('_commentId', (req, res, next, id) =>
// {
//     setObjectId('_commentId', req, id);
//     next();
// })

app.use('/posts', postRouter);
app.use('/comments', commentRouter);

app.listen(port, () =>
{
    console.log(`Server On Port: ${port}`);
})