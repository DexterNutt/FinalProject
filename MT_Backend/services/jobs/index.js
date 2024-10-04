const express = require("express");
const dotenv = require("dotenv");
const jobs = require("./handlers/jobsHandler");
const applications = require("./handlers/applicationsHandler");
const db = require("./../../pkg/db/index");
const upload = require("../auth/handlers/uploadHandler");

dotenv.config({ path: `${__dirname}/../../pkg/config/config.env` });

const app = express();

db.init();
app.use(express.json());

//JOB ROUTES >
app.post("/api/v1/jobs", jobs.createJob);
app.get("/api/v1/jobs", jobs.getOpen);
app.get("/api/v1/jobs/:id", jobs.getMyJobs);
app.get("/api/v1/jobs/:id", jobs.getJobById);
app.post("/api/v1/jobs/offer", jobs.offerJob);
app.get("/api/v1/jobs/company/:id", jobs.getJobByStartup);

//APPLICATION ROUTES >
app.post("/api/v1/applications", applications.createApplication);
app.get("/api/v1/applications", applications.getAll);
app.get("/api/v1/applications/:id", applications.getApplicationsToJob);

//ACCEPT OR REJECT OFFERS
app.patch("/api/v1/applications/accept/:id", applications.acceptJobOffer);
app.patch("/api/v1/applications/reject/:id", applications.rejectJobOffer);

app.listen(process.env.PORT_JOBS, (err) => {
  if (err) {
    console.error("Service could not be initiated");
  }
  console.log(`Jobs service running on port ${process.env.PORT_JOBS}`);
});
