const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  // timeStempt: {
  //   // name: { type: String, required: true, trim: true },
  //   created_at: { type: Date, required: true, default: Date.now },
  // },
},{timestamps : true
});

// collection creation
const User = mongoose.model("APPOINTMENT", userSchema);
module.exports = User;
