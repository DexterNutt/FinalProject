const Application = require("../../../pkg/jobs/applicationSchema");
const Job = require("../../../pkg/jobs/jobSchema");

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

exports.updateApplication = async (req, res, next) => {
  try {
    if (req.body.jobId) {
      const updatedJob = await Job.findByIdAndUpdate(req.body.jobId, {
        status: "direct",
      });
    }

    const updatedApplication = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );

    if (!updatedApplication) {
      const error = new Error("Job not found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      status: "success",
      data: {
        application: updatedApplication,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteApplication = async (req, res, next) => {
  try {
    if (req.body.mentorId) {
      const deletedApplication = await Application.findOneAndDelete({
        jobId: req.params.id,
        mentorId: req.body.mentorId,
      });
      res.status(200).json({
        status: "success",
        data: {
          application: deletedApplication,
        },
      });
    }

    const deletedApplication = await Application.findByIdAndDelete(
      req.params.id
    );

    if (!deletedApplication) {
      const error = new Error("Job not found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      status: "success",
      data: {
        application: deletedApplication,
      },
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
    next(err);
  }
};

exports.getUserApplications = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const status = req.query.status || false;

    if (status) {
      const jobs = await Application.find({
        mentorId: userId,
        $and: [{ status: { $ne: "pending" } }, { status: status }],
      })
        .populate("jobId", "title")
        .sort({ createdAt: -1 });

      if (!jobs) {
        const error = new Error("This User doesn't exist");
        error.statusCode = 404;
        next(error);
      }

      res.json({
        data: {
          jobs: jobs,
        },
      });
      return;
    }

    const jobs = await Application.find({
      mentorId: userId,
      status: { $ne: "pending" },
    })
      .populate("jobId", "title")
      .sort({ createdAt: -1 });

    if (!jobs) {
      const error = new Error("This User doesn't exist");
      error.statusCode = 404;
      next(error);
    }

    res.json({
      data: {
        jobs: jobs,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getUserPendingApplications = async (req, res, next) => {
  try {
    const userId = req.params.id;

    if (req.query.applicationType) {
      const pending = await Application.find({
        mentorId: userId,
        status: "pending",
        applicationType: req.query.applicationType,
      })
        .populate("jobId", "title")
        .sort({ createdAt: -1 });

      return res.json({
        data: {
          pending: pending,
        },
      });
    }

    const pending = await Application.find({
      mentorId: userId,
      status: "pending",
    })
      .populate("jobId", "title")
      .sort({ createdAt: -1 });

    if (!pending) {
      const error = new Error("This User doesn't exist");
      error.statusCode = 404;
      next(error);
    }

    res.json({
      data: {
        pending: pending,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.acceptJobOffer = async (req, res, next) => {
  try {
    const applicationId = req.params.id;
    const application = await Application.findById(applicationId);

    if (!application) {
      const error = new Error("Application not found");
      error.statusCode = 404;
      return next(error);
    }

    application.status = "in progress";

    const updatedApplication = await application.save();

    res.status(200).json({
      status: "success",
      data: {
        application: updatedApplication,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.rejectJobOffer = async (req, res, next) => {
  try {
    const applicationId = req.params.id;
    const application = await Application.findById(applicationId);

    if (!application) {
      const error = new Error("Application not found");
      error.statusCode = 404;
      return next(error);
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
    next(err);
  }
};
