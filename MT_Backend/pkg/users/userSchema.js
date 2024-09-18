const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    enum: ["mentor", "startup"],
    required: [true, "Role is required"],
  },
  phone: {
    type: String,
  },
  description: {
    type: String,
  },
  mentorName: {
    type: String,
    required: function () {
      return this.role === "mentor";
    },
  },
  skills: {
    type: [String],
  },
  acceptedJobs: {
    type: [String],
  },
  startupName: {
    type: String,
    required: function () {
      return this.role === "startup";
    },
  },
  representative: {
    type: String,
    required: function () {
      return this.role === "startup";
    },
  },
  address: {
    type: String,
    required: function () {
      return this.role === "startup";
    },
  },
  mentors: {
    type: [String],
  },
  jobsPosted: {
    type: [String],
  },
  photo: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
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
