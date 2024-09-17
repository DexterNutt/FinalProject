const express = require("express");
const auth = require("./handlers/authHandler");
const db = require("./../../pkg/db/index");
const upload = require("./handlers/uploadHandler");

const app = express();

db.init();
app.use(express.json());

// Auth and registration routes >
app.post("/api/v1/auth/register", auth.register);
app.post("/api/v1/auth/login", auth.login);

// Image upload route >
app.post("api/v1/auth/upload", upload.single("photo"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  res.status(200).json({
    message: "File uploaded successfully",
    file: req.file,
    filePath: `/uploads/${req.file.filename}`,
  });
});

app.listen(process.env.PORT_AUTH, (err) => {
  if (err) {
    console.log("Service could not be initiated");
  }
  console.log(`Service initiated on port ${process.env.PORT_AUTH} `);
});
