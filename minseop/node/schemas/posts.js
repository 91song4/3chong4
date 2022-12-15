const mongoose = require('mongoose')
// const {Schema} = require("mongoose"); / type: Schema.Types.ObjectId,



const postsSchema = new mongoose.Schema({
    // postId: {
    //     type: Number,
    //     // required: true, //not null
    //     default: 1
    // },

    user: {
        type: String,
        required: true,

    },

    password: {
        type: Number,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    content : {
        type: String,
        required: true
    },

    createdAt : {
        type: Date,
        default: Date.now()
        // default: Date.now(), 대세임
    }
})

module.exports = mongoose.model("posts", postsSchema)