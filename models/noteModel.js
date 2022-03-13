require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_ATLAS_DRIVER);

const noteSchema = new mongoose.Schema({
  title: String,
  body: String
});;

const Note = new mongoose.model("Note", noteSchema);

module.exports = Note;