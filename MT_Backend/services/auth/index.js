const express = require("express");
const auth = require("./handlers/authHandler");
const db = require("./../../pkg/db/index");

const app = express();

db.init();
app.use(express.json());

app.post("/api/v1/auth/register", auth.register);
app.post("/api/v1/auth/login", auth.login);

app.listen(process.env.PORT_AUTH, (err) => {
  if (err) {
    console.log("Service could not be initiated");
  }
  console.log(`Service initiated on port ${process.env.PORT_AUTH} `);
});
