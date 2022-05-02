const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
//model req. to field one is name and another is schema
module.exports =mongoose.model('notes', NotesSchema);