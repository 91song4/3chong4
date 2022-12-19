const express = require("express");
const Todo = require("../models/todo.js")

const router = express.Router();

router.get("/", (req, res) => {
    res.send("routes Hello");
});

router.post("/todos", async (req,res) => {
    const {value} = req.body;
    const maxOrderByUserId = await Todo.findOne().sort("-order").exec();

    const order = maxOrderByUserId ?
        maxOrderByUserId.order +1 :
        1;

    const todo = new Todo({value, order});
    await todo.save();

    res.send({todo});
})

// 조회
router.get("/todos", async (req,res) => {
    const todos = await Todo.find().sort("-order").exec();
    res.send({todos})
})

// 수정
router.patch("/todos/:todoId", async (req,res) => {
    const {todoId} = req.params;
    const {order} = req.body;

    const currentTodo = await Todo.findById(todoId);
    if (!currentTodo) {
        return res.status(400).send({"errorMessage": "존재하지 않는 할 일 입니다."})
    }

    if (order){
        const targetTodo = await Todo.findOne({order}).exec();
        if (targetTodo) { // 변경하려는 것이 존재한다면
            targetTodo.order = currentTodo.order;
            await targetTodo.save();
        }
        currentTodo.order = order;
        await currentTodo.save();
    }

    res.send();
})


module.exports = router;