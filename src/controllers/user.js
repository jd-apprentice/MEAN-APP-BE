const userController = {};
const jwt = require('jsonwebtoken');

userController.generateToken = async (req, res) => {
  try {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
      time: Date(),
      userId: 12,
    };

    const token = jwt.sign(data, jwtSecretKey);

    res.send(token);
  } catch (error) {
    console.log(error);
  }
};

userController.validateToken = (req, res) => {
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  try {
    const token = req.header(tokenHeaderKey);

    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      return res.send("Successfully Verified");
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    // Access Denied
    return res.status(401).send(error);
  }
};

module.exports = userController;
