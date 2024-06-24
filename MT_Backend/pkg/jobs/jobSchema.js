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

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
