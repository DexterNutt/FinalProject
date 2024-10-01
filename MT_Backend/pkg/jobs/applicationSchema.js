const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    mentorId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    applicationType: {
      type: String,
      enum: ["mentorToCompany", "companyToMentor"],
    },
    status: {
      type: String,
      default: "pending",
    },
    acceptedStatus: {
      type: String,
      enum: ["done", "rejected", "in progress", "pending"],
      default: "pending",
    },
    title: String,
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
