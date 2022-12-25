const mongose = require("mongoose");

const TodoSchema = new mongose.Schema({
    value: String,
    doneAt: Date,
    order: Number
});

TodoSchema.virtual("todoId")
    .get(function (){
        return this._id.toHexString();
    });

TodoSchema.set("toJSON", {virtuals: true});


module.exports = mongose.model("Todo", TodoSchema);