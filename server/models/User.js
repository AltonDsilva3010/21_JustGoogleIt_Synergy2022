const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  rollno: {
    type: Number,
    required: true,
    unique: true,
  },
  classno: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["organizer", "student", "admin"],
    default: "student",
    required: true,
  },
  events: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "event",
  },
  organized: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "event",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
