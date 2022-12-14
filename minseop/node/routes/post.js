const express = require("express")
const router = express.Router();

// localhost:3000/post/
router.get('/', (req,res) => {
    res.send("res.send - post.js GET Method")
})

// localhost:3000/post/about
router.get('/about', (req,res) => {
    res.send("res.send - post.js GET Method - /about")
})

module.exports = router