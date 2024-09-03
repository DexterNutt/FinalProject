const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const User = require("../../../pkg/users/userSchema");
const multer = require("multer");
const path = require("path");
dotenv.config({ path: `${__dirname}/../../../pkg/config/config.env` });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2500000 },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Images Only!");
    }
  },
});

const uploadMiddleware = upload.single("image");

exports.register = async (req, res) => {
  try {
    uploadMiddleware(req, res, async (err) => {
      if (err) {
        return res.status(400).send(err.message);
      }

      const {
        email,
        password,
        role,
        mentorName,
        startupName,
        representative,
        address,
      } = req.body;

      if (!email || !password || !role) {
        return res
          .status(400)
          .json({ error: "Email, password, and role are required." });
      }

      const image = req.file ? req.file.path : null;

      const newUser = new User({
        email,
        password,
        role,
        image,
        mentorName: role === "mentor" ? mentorName : undefined,
        startupName: role === "startup" ? startupName : undefined,
        representative: role === "startup" ? representative : undefined,
        address: role === "startup" ? address : undefined,
      });

      await newUser.save();

      const token = jwt.sign(
        {
          id: newUser._id,
          email: newUser.email,
          role: newUser.role,
          image,
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES }
      );

      res.status(201).json({
        status: "success",
        token,
        data: {
          user: {
            id: newUser._id,
            email: newUser.email,
            role: newUser.role,
            image,
          },
        },
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Please provide email and password");
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).send("Invalid email or password");
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.mentorName,
        role: user.role,
        skills: user.skills,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    res.status(200).json({ status: "success", token });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
