const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const applicationSchema = new mongoose.Schema({
  jobID: {
    type: Object,
  },
  mentorID: {
    type: Object,
  },
  companyID: {
    type: String,
  },
  applicationType: {
    type: String,
  },
  status: {
    type: String,
  },
  acceptedStatus: {
    type: String,
  },
});

// const applicationSchema = new mongoose.Schema(
//   {
//     jobId: {
//       type: mongoose.Types.ObjectId,
//       ref: "Job",
//       required: true,
//     },
//     mentorId: {
//       type: mongoose.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     companyId: {
//       type: mongoose.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     applicationType: {
//       type: String,
//       enum: ["mentorToCompany", "companyToMentor"],
//     },
//     status: {
//       type: String,
//       default: "pending",
//     },
//     acceptedStatus: {
//       type: String,
//       enum: ["done", "rejected", "in progress", "pending"],
//       default: "pending",
//     },
//   },
//   { timestamps: true }

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
