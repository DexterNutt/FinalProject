const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    startupId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: String,
    description: String,
    status: {
      type: String,
      enum: ["direct", "open"],
      default: "open",
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
