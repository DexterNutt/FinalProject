const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const jobSchema = new mongoose.Schema({
  companyId: {
    type: Object,
  },
  title: {
    type: String,
    required: [true, "Must provide a job title"],
  },
  description: {
    type: String,
    required: [true, "Must provide a job description"],
  },
  skillsRequired: {
    type: Array,
    required: [true, "Which skills are needed for the job"],
  },
  status: {
    type: String,
  },
});

// const jobSchema = new mongoose.Schema(
//   {
//     companyId: {
//       type: mongoose.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     title: String,
//     jobPicture: {
//       type: String,
//       default: "default.img",
//     },
//     description: String,
//     status: {
//       type: String,
//       enum: ["direct", "open"],
//     },
//   },
//   { timestamps: true }

// const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
