const mongoose = require("mongoose");

// const note = note; 

const schema = mongoose.Schema;

const noteSchema = mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    }
});



const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
