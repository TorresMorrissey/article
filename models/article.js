const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    },
    note: {
        type: String,
        ref: "Note"
    }
});

let article = mongoose.model("Article", articleSchema);

module.exports = article;