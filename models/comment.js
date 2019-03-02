const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    },
    note: {
        type: Schema.ObjectId,
        ref: "Note"
    }
});

let comment = mongoose.model("Note", commentSchema);

module.exports = comment;