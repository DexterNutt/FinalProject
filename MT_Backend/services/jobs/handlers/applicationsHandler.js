const Application = require("../../../pkg/jobs/applicationSchema");
const Job = require("../../../pkg/jobs/jobSchema");

const mongoose = require("mongoose");

exports.createApplication = async (req, res, next) => {
  const { jobId, mentorId, applicationType } = req.body;

  if (!jobId || !mentorId || !applicationType) {
    const error = new Error("Invalid Data");
    error.statusCode = 401;
    throw error;
  }
  try {
    const newApplication = await Application.create(req.body);
    res.status(201).json({
      application: newApplication,
    });
  } catch (err) {
    next(err);
  }
};
