const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: String,
    nickname: String,
    password: String
});

userSchema.virtual("userId").get(function () {
    return this._id.toHexString();
});
userSchema.set("toJSON", { virtual: true });

module.exports = mongoose.model("User", userSchema);