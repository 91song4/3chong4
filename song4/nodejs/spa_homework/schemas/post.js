const mongoose = require('mongoose');
const ADD_KOREA_TIME = 32400000;

const postSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    password: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now() + ADD_KOREA_TIME,
    }
})

module.exports = mongoose.model('Post', postSchema);