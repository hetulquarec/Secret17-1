const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: false,
  },
});

const membership = mongoose.model("MEMBERSHIP", userSchema);
module.exports = membership;
