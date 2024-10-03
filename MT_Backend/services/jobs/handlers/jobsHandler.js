const User = require("../../../pkg/users/userSchema");
const Job = require("../../../pkg/jobs/jobSchema");
const Application = require("../../../pkg/jobs/applicationSchema");

exports.createJob = async (req, res, next) => {
  const { startupId, title, description, photo } = req.body;

  if (!startupId || !title || !description) {
    return res.status(400).json({
      error: "Could not create job",
    });
  }

  try {
    const newJob = await Job.create({
      startupId,
      title,
      description,
      photo,
    });

    res.status(201).json({
      status: "success",
      data: {
        job: newJob,
      },
    });
  } catch (error) {
    res.status(500).json("Error creating job in database");
  }
};

exports.deleteJob = async (req, res, next) => {
  try {
    const deletedApplications = await Application.deleteMany({
      jobId: req.params.id,
      companyId: req.body.companyId,
    });

    const deletedJob = await Job.findByIdAndDelete(req.params.id);

    if (!deletedJob) {
      const error = new Error("Job not found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      status: "success",
      data: {
        job: deletedJob,
        deletedApplications: deletedApplications,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getOpen = async (req, res, next) => {
  try {
    const jobs = await Job.find({ status: "open" }).populate(
      "startupId",
      "startupName"
    );
    res.status(200).json({
      status: "success",
      data: {
        jobs: jobs,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getMyJobs = async (req, res, next) => {
  const companyId = req.params.id;
  const status = "open";

  try {
    const jobs = await Job.find({ companyId: companyId, status: status })
      .populate("companyId", "startupName")
      .sort({ createdAt: -1 });

    res.status(200).json({
      status: "success",
      data: {
        jobs: jobs,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.offerJob = async (req, res, next) => {
  const { startupId, title, description, mentorId, photo } = req.body;

  if (!startupId || !title || !description) {
    res.status(400).json("Error, Invalid Data, please try again.");
  }

  try {
    const newJob = await Job.create({
      startupId: startupId,
      title: title,
      description: description,
      photo: photo,
      status: "direct",
    });

    const newApplication = await Application.create({
      mentorId: mentorId,
      startupId: startupId,
      jobId: newJob._id,
      title: title,
      status: "pending",
      acceptedStatus: "pending",
      applicationType: "companyToMentor",
    });

    res.status(201).json({
      status: "success",
      data: {
        job: newJob,
        newApplication: newApplication,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteOffer = async (req, res, next) => {
  try {
    const deletedApplication = await Application.findByIdAndDelete(
      req.params.id
    );

    const deletedJob = await Job.findByIdAndDelete(deletedApplication.jobId);

    if (!deletedApplication) {
      const error = new Error("Job not found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      status: "success",
      data: {
        application: deletedApplication,
        job: deletedJob,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getMyOffer = async (req, res, next) => {
  try {
    const mentorId = req.params.mentorId;

    const offers = await Application.find({
      mentorId: mentorId,
      status: "pending",
    }).populate("jobId", "title description");
    if (!offers) {
      return res.status(404).json({
        status: "fail",
        message: "No job offers found for this mentor",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        offers,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json(error, "Error finding job in database, please try again later");
  }
};

exports.getJobByStartup = async (req, res, next) => {
  try {
    const jobs = await Job.find({ startupId: req.params.id }).populate(
      "startupId",
      "startupName photo email"
    );

    if (!jobs || jobs.length === 0) {
      res.status(404).json("There are no jobs by this startup");
    }

    res.status(200).json({
      status: "success",
      data: {
        jobs,
      },
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(error, "Error finding job in database, please try again later");
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const jobs = await Job.find({ status: "open" }).sort({ createdAt: -1 });

    if (!jobs || jobs.length === 0) {
      const error = new Error("There are no Jobs currently");
      error.statusCode = 404;
      return next(error);
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

exports.getJobById = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id).populate(
      "startupId",
      "startupName"
    );

    if (!job) {
      return res.status(404).json({
        status: "fail",
        message: "Job not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        job,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error retrieving job",
    });
  }
};
