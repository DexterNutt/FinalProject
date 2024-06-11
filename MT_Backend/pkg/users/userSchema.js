const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    minlength: [4, "Password must be at least 4 characters long"],
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    required: [true, "please select Mentor or Startup"],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  } else {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
