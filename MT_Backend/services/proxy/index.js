const express = require("express");
const proxy = require("express-http-proxy");
const cors = require("cors");

const app = express();

app.use(cors());

const authProxy = proxy("http://localhost:9000", {
  proxyReqPathResolver: (req) => {
    return `/api/v1/auth${req.url}`;
  },
});

app.use("/api/v1/auth", authProxy);

app.listen(9001, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server initiated on port 9001");
});
