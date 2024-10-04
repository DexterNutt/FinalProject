const User = require("../../../pkg/users/userSchema");
const Job = require("../../../pkg/jobs/jobSchema");
const Application = require("../../../pkg/jobs/applicationSchema");

exports.createJob = async (req, res, next) => {
  const { startupId, title, description, photo } = req.body;

  if (!startupId || !title || !description) {
    return res.status(400).json({
      status: "fail",
      message: "Missing required fields: startupId, title, description",
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
      data: { job: newJob },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error creating job in the database",
    });
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
      data: { jobs: jobs },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error fetching open jobs",
    });
  }
};

exports.offerJob = async (req, res, next) => {
  const { startupId, title, description, mentorId, photo } = req.body;

  if (!startupId || !title || !description) {
    return res.status(400).json({
      status: "fail",
      message: "Missing required fields: startupId, title, description",
    });
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
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error offering job",
    });
  }
};

exports.getMyOffer = async (req, res, next) => {
  try {
    const mentorId = req.params.mentorId;

    const offers = await Application.find({
      mentorId,
      status: "pending",
    }).populate("jobId", "title description");

    if (!offers || offers.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No job offers found for this mentor",
      });
    }

    res.status(200).json({
      status: "success",
      data: { offers },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error retrieving offers for this mentor",
    });
  }
};

exports.getJobByStartup = async (req, res, next) => {
  try {
    const jobs = await Job.find({ startupId: req.params.id }).populate(
      "startupId",
      "startupName photo email"
    );

    if (!jobs || jobs.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No jobs found for this startup",
      });
    }

    res.status(200).json({
      status: "success",
      data: { jobs },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error retrieving jobs",
    });
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const jobs = await Job.find({ status: "open" }).sort({ createdAt: -1 });

    if (!jobs || jobs.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No jobs currently available",
      });
    }

    res.status(200).json({
      status: "success",
      data: { jobs: jobs },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Error retrieving jobs",
    });
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
      data: { job },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error retrieving job",
    });
  }
};
