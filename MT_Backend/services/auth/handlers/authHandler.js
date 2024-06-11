const User = require("../../../pkg/users/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });

    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(500).send("Internal server issue");
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
        username: user.username,
        isAdmin: user.admin,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    res.status(200).json({ status: "success", token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal server issue");
  }
};
