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
    }
});

let comment = mongoose.model("Comment", commentSchema);

module.exports = comment;