const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const User = require("../../../pkg/users/userSchema");

dotenv.config({ path: `${__dirname}/../../../pkg/config/config.env` });

exports.register = async (req, res) => {
  try {
    const {
      email,
      password,
      role,
      mentorName,
      startupName,
      representative,
      address,
      imageUrl,
    } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        error: "Email, password, and role are required.",
      });
    }

    const newUser = new User({
      email,
      password,
      role,
      image: imageUrl,
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
        image: imageUrl,
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
          image: imageUrl,
        },
      },
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
