const express = require("express");
const dotenv = require("dotenv");
const users = require("./handlers/profileHandler");
const db = require("./../../pkg/db/index");
const path = require("path");

dotenv.config({ path: `${__dirname}/../../pkg/config/config.env` });

const app = express();

db.init();
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/api/v1/dashboard/mentor", users.findUser);
app.get("/api/v1/dashboard/startup", users.findStartup);
app.get("/api/v1/mentors", users.searchUsers);

app.listen(process.env.PORT_USERS, (err) => {
  if (err) {
    console.error("Service could not be initiated");
  }
  console.log(`User service running on port ${process.env.PORT_USERS}`);
});
