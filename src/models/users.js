
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  versionKey:false,
  timestamps: true
});

module.exports = mongoose.model("users", userSchema)
