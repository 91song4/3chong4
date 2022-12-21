const express = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const {Op} = require("sequelize");
const app = express();

app.use('/api', express.urlencoded({ extended: false }))

app.listen(8080, () => {
    console.log("Server On!");
})