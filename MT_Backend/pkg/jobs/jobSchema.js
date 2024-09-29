const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    companyId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: String,
    jobPicture: {
      type: String,
      default: "default.img",
    },
    description: String,
    status: {
      type: String,
      enum: ["direct", "open"],
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
