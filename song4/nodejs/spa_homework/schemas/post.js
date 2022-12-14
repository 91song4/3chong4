const mongoose = require('mongoose');

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
        default: Date,
    }
})

module.exports = mongoose.model('Post', postSchema);