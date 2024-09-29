const express = require("express");
const dotenv = require("dotenv");
const jobs = require("./handlers/jobsHandler");
const applications = require("./handlers/applicationsHandler");
const db = require("./../../pkg/db/index");

dotenv.config({ path: `${__dirname}/../../pkg/config/config.env` });

const app = express();

db.init();
app.use(express.json());

app.get("/api/v1/jobs/", jobs.getOpen);
app.post("api/v1/applications", applications.createApplication);

app.listen(process.env.PORT_USERS, (err) => {
  if (err) {
    console.error("Service could not be initiated");
  }
  console.log(`User service running on port ${process.env.PORT_JOBS}`);
});
