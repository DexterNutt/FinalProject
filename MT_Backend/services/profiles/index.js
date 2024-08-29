const express = require("express");
const dotenv = require("dotenv");
const users = require("./handlers/profileHandler");

dotenv.config({ path: `${__dirname}/../../pkg/config/config.env` });

const app = express();

app.use(express.json());

app.get("/api/v1/dashboard/mentor/:id", users.get);

app.listen(process.env.PORT_USERS, (err) => {
  if (err) {
    console.error("Service could not be initiated");
  }
  console.log(`User service running on port ${process.env.PORT_USERS}`);
});
