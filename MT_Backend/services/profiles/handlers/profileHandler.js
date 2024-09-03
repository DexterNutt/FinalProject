const mongo = require("mongodb");
const User = require("../../../pkg/users/userSchema");
const jwtDecode = require("");

exports.findUser = async (req, res) => {
  try {
    const authToken = req.headers.authorization;

    const token = authToken.split(" ")[1];
    console.log(token);

    // STEP 1: DECODE

    // STEP 2: EXTRACT ID

    // STEP 3: FETCH IN DATABASE BY ID WITH PROJECTIONS ( NAME; SKILLS...; JUST THE THINGS I NEED )

    // STEP 4: SEND DATA TO FE

    res.status(200).json({ DATAGOESHERE });
  } catch (error) {
    console.error("Error finding User:", error);
    return res.status(500).json({ message: "Error finding user in database" });
  }
};
