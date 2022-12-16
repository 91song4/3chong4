const express = require('express');
const mongoose = require('mongoose');

const { postRouter } = require('./routes');
const { commentRouter } = require('./routes');

const Router = require('./routes/index.js');
const connect = require('./schemas');

const { ObjectId } = mongoose.Types;
const app = express();
const port = 3000;

connect();
app.use(express.json());

let router = Router.commentRouter;
router = Router.postRouter;

app.use('/*', (req, res, next) =>
{
    const targetRouter = req.originalUrl.split('/')[1];
    console.log(targetRouter);
    if (targetRouter === 'posts')
        router = Router.postRouter;
    else
        router = Router.commentRouter;
    
    if (router === Router.postRouter)
        console.log('postRouter');
    else if (router === Router.commentRouter)
        console.log('commentRouter');
    console.log('---------------------------------------')
    next();
})

router.param('_postId', (req, res, next, id) =>
{
    console.log('test1 here')
    try
    {
        req.params._postId = new ObjectId(id);
    } catch {        
    }
    finally
    {
        next();
    }
})

// router.param('_postId', (req, res, next, id) =>
// {
//     console.log('test3 here')
//     try
//     {
//         req.params._postId = new ObjectId(id);
//     } catch {
//     }
//     finally
//     {
//         next();
//     }
// })

Router.commentRouter.param('_commentId', (req, res, next, id) =>
{
    console.log('test2 here')
    try
    {
        req.params._commentId = new ObjectId(id);
    } catch {
    }
    finally
    {
        next();
    }
})



// req를 인터셉트해서 다시 다음 동작이 하도록 보내주기.

app.use('/posts', router);
app.use('/comments', router);

app.listen(port, () =>
{
    console.log(`Server On Port: ${port}`);
})