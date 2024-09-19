const User = require("../../../pkg/users/userSchema");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/../../../pkg/config/config.env` });

exports.findUser = async (req, res) => {
  try {
    const authToken = req.headers.authorization;

    if (authToken == null) {
      return res
        .status(401)
        .json({ message: "Authorization token is missing" });
    }

    // STEP 1: DECODE
    const token = authToken.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // STEP 2: EXTRACT ID
    const userId = decodedToken.id;

    // STEP 3: FETCH IN DATABASE BY ID WITH PROJECTIONS
    const userData = await User.findById(
      userId,
      "email phone description mentorName skills acceptedJobs role photo"
    );

    // STEP 4: SEND DATA TO FE
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(userData);
  } catch (error) {
    console.error("Error finding User:", error);
    return res.status(500).json({ message: "Error finding user in database" });
  }
};
