const Application = require("../../../pkg/jobs/applicationSchema");
const Job = require("../../../pkg/jobs/jobSchema");

exports.createApplication = async (req, res, next) => {
  const { jobId, mentorId, applicationType, title } = req.body;

  if (!jobId || !mentorId || !applicationType || !title) {
    return res.status(400).json("Failed to apply: Invalid Data");
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

exports.getAll = async (req, res, next) => {
  try {
    const application = await Application.find({});
    res.status(200).json({
      status: "success",
      data: {
        application: application,
      },
    });
  } catch (err) {
    res.status(500).json("Failed to fetch applications");
  }
};

exports.acceptJobOffer = async (req, res, next) => {
  try {
    const applicationId = req.params.id;
    const application = await Application.findById(applicationId);

    if (!application) {
      return res.status(404).json("Application not found");
    }

    application.status = "in progress";
    const updatedApplication = await application.save();

    const job = await Job.findById(application.jobId);
    if (job) {
      job.jobStatus = "in progress";
      await job.save();
    }

    res.status(200).json({
      status: "success",
      data: {
        application: updatedApplication,
        job,
      },
    });
  } catch (err) {
    res.status(500).json("Failed to accept the job offer");
  }
};

exports.rejectJobOffer = async (req, res, next) => {
  try {
    const applicationId = req.params.id;
    const application = await Application.findById(applicationId);

    if (!application) {
      return res.status(404).json("Application not found");
    }

    application.status = "rejected";
    const updatedApplication = await application.save();

    res.status(200).json({
      status: "success",
      data: {
        application: updatedApplication,
      },
    });
  } catch (err) {
    res.status(500).json("Failed to reject the job offer");
  }
};

exports.getApplicationsToJob = async (req, res, next) => {
  try {
    const jobId = req.params.id;
    const applications = await Application.find({ jobId: jobId }).populate(
      "mentorId",
      "name skills photo"
    );

    if (!applications) {
      return res.status(404).json("No applications found for this job.");
    }

    res.status(200).json({
      status: "success",
      data: {
        applications,
      },
    });
  } catch (error) {
    res.status(500).json("Failed to fetch applications for the job");
  }
};
