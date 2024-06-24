const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const mentorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  name: {
    type: String,
    required: [true, "Please provide your Name and Surname"],
  },
  startupName: {
    type: String,
  },
  phone: {
    type: String,
  },
  skills: {
    type: Array,
  },
  description: {
    type: String,
  },
  acceptedJobs: {
    type: Array,
  },
});

mentorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  } else {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  }
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
