const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Types.ObjectId,
        required:true,
    },
    user: {
        type: String,
        required: true,
    },
    password: {
        type: Number,
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

module.exports = mongoose.model('Comment', commentSchema);