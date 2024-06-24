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

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
