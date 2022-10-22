const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["organizer", "customer", "admin"],
    default: "customer",
    required: true,
  },
  idproof: {
    type: String,
    unique: true,
  },
  verified: {
    type: Boolean,
  },
  events: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "event",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
