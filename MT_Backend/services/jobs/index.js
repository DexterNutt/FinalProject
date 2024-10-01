const express = require("express");
const dotenv = require("dotenv");
const jobs = require("./handlers/jobsHandler");
const applications = require("./handlers/applicationsHandler");
const db = require("./../../pkg/db/index");

dotenv.config({ path: `${__dirname}/../../pkg/config/config.env` });

const app = express();

db.init();
app.use(express.json());

//JOB ROUTES >
app.post("/api/v1/jobs", jobs.createJob);
app.get("/api/v1/jobs", jobs.getOpen);
app.get("/api/v1/jobs/:id", jobs.getMyJobs);
app.put("/api/v1/jobs/:id", jobs.updateJob);
app.delete("/api/v1/jobs/:id", jobs.deleteJob);
app.post("/api/v1/jobs/offer", jobs.offerJob);
app.get("/api/v1/jobs/company/:id", jobs.getJob);

//APPLICATION ROUTES >
app.post("/api/v1/applications", applications.createApplication);
app.get(
  "/api/v1/applications/mentor/:mentorId",
  applications.getUserApplications
);
app.get("/api/v1/applications", applications.getAll);
app.put("/api/v1/applications/:id", applications.updateApplication);
app.delete("/api/v1/applications/:id", applications.deleteApplication);
app.get(
  "/api/v1/applications/mentor/:id/pending",
  applications.getUserPendingApplications
);

//ACCEPT OR REJECT OFFERS
app.patch("/api/v1/applications/accept/:id", applications.acceptJobOffer);
app.patch("/api/v1/applications/reject/:id", applications.rejectJobOffer);

app.listen(process.env.PORT_JOBS, (err) => {
  if (err) {
    console.error("Service could not be initiated");
  }
  console.log(`Jobs service running on port ${process.env.PORT_JOBS}`);
});
