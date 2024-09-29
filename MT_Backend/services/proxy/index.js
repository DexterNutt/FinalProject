const express = require("express");
const proxy = require("express-http-proxy");
const cors = require("cors");

const app = express();

app.use(cors());

// NEED TO VERIFY TOKENS HERE IN REAL PROJECTS!

const authProxy = proxy("http://localhost:9000", {
  proxyReqPathResolver: (req) => {
    return `/api/v1/auth${req.url}`;
  },
});

const usersProxy = proxy("http://localhost:9002", {
  proxyReqPathResolver: (req) => {
    return `/api/v1/dashboard/mentor`;
  },
});

const startupsProxy = proxy("http://localhost:9002", {
  proxyReqPathResolver: (req) => {
    return `/api/v1/dashboard/startup`;
  },
});

const imagesProxy = proxy("http://localhost:9000", {
  proxyReqPathResolver: (req) => {
    return `/api/v1/image/upload`;
  },
});

const serveImagesProxy = proxy("http://localhost:9002", {
  proxyReqPathResolver: (req) => {
    return `/uploads${req.url}`;
  },
});

const searchUsersProxy = proxy("http://localhost:9002", {
  proxyReqPathResolver: (req) => {
    return `/api/v1/mentors${req.url}`;
  },
});

const jobsProxy = proxy("http://localhost:9003", {
  proxyReqPathResolver: (req) => {
    return `/api/v1/jobs${req.url}`;
  },
});

const applicationsProxy = proxy("http://localhost:9003", {
  proxyReqPathResolver: (req) => {
    return `/api/v1/applications${req.url}`;
  },
});

app.use("/api/v1/auth", authProxy);
app.use("/api/v1/dashboard/mentor", usersProxy);
app.use("/api/v1/dashboard/startup", startupsProxy);
app.use("/api/v1/image/upload", imagesProxy);
app.use("/uploads", serveImagesProxy);
app.use("/api/v1/mentors", searchUsersProxy);
app.use("/api/v1/jobs", jobsProxy);
app.use("/api/v1/applications", applicationsProxy);

app.listen(9001, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Proxy listening on port 9001");
});
