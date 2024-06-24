const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const startupSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  startupName: {
    type: String,
    required: [true, "Please provide your Startup Name"],
  },
  representative: {
    type: String,
    required: [true, "Please state your Legal Representative"],
  },
  address: {
    type: String,
    required: [true, "Please state your Business Address"],
  },
  mentors: {
    type: String,
  },
  jobsPosted: {
    type: Array,
  },
});

startupSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  } else {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  }
});

const Startup = mongoose.model("Startup", startupSchema);

module.exports = Mentor;
