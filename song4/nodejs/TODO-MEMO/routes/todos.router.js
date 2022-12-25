const express = require('express');
const todo = require('../models/todo.js');
const router = express.Router();
const Todo = require('../models/todo.js');

router.get('/', (req, res) => {
    res.send('Hi');
});

router.post('/todos', async (req, res) => {
    const { value } = req.body;
    const maxOrderByUserId = await Todo.findOne({}).sort("-order").exec();

    const order =
        maxOrderByUserId
            ? maxOrderByUserId.order + 1
            : 1;

    const todo = new Todo({ value, order });
    await todo.save();

    res.send({ todo });
});

router.get('/todos', async (req, res) => {
    const todos = await Todo.find().sort('-order').exec();

    res.json({ todos });
})

router.patch('/todos/:todoId', async (req, res) => {
    const { todoId } = req.params;
    const { order } = req.body;
    const currentTodo = await Todo.findById(todoId).exec();
    if (currentTodo === null) {
        return res.status(400).json({ errorMessage: "존재하지 않는 할 일 입니다." });
    }

    if (order !== undefined) {
        const targetTodo = await Todo.findOne({ order }).exec();
        if (targetTodo !== null) {
            targetTodo.order = currentTodo.order;
            await targetTodo.save();
        }
        currentTodo.order = order;
        await currentTodo.save();
        
    }
    res.send();
})

module.exports = router;