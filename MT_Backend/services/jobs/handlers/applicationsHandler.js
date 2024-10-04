const Application = require("../../../pkg/jobs/applicationSchema");
const Job = require("../../../pkg/jobs/jobSchema");

exports.createApplication = async (req, res, next) => {
  const { jobId, mentorId, applicationType, title } = req.body;

  if (!jobId || !mentorId || !applicationType || !title) {
    return res.status(400).json({
      status: "fail",
      message: "Failed to apply: Invalid Data",
    });
  }

  try {
    const newApplication = await Application.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        application: newApplication,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error creating the application",
    });
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const applications = await Application.find({});
    res.status(200).json({
      status: "success",
      data: {
        applications,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch applications",
    });
  }
};

exports.acceptJobOffer = async (req, res, next) => {
  try {
    const applicationId = req.params.id;
    const application = await Application.findById(applicationId);

    if (!application) {
      return res.status(404).json({
        status: "fail",
        message: "Application not found",
      });
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
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to accept the job offer",
    });
  }
};

exports.rejectJobOffer = async (req, res, next) => {
  try {
    const applicationId = req.params.id;
    const application = await Application.findById(applicationId);

    if (!application) {
      return res.status(404).json({
        status: "fail",
        message: "Application not found",
      });
    }

    application.status = "rejected";
    const updatedApplication = await application.save();

    res.status(200).json({
      status: "success",
      data: {
        application: updatedApplication,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to reject the job offer",
    });
  }
};

exports.getApplicationsToJob = async (req, res, next) => {
  try {
    const jobId = req.params.id;
    const applications = await Application.find({ jobId: jobId }).populate(
      "mentorId",
      "name skills photo"
    );

    res.status(200).json({
      status: "success",
      data: {
        applications: applications || [],
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch applications for the job",
    });
  }
};

exports.getApplicationsByMentor = async (req, res, next) => {
  try {
    const mentorId = req.params.mentorId;
    const applications = await Application.find({ mentorId: mentorId });

    res.status(200).json({
      status: "success",
      data: {
        applications: applications || [],
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch applications for the mentor",
    });
  }
};
