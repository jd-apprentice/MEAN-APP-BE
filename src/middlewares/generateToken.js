import jwt from "jsonwebtoken";

const generateJWT = (uid = "") => {
  return new Promise((resolve, reject) => {
    const payload = { uid };
    jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "4h",
      },
      (error, token) => {
        if (error) reject("The token could not be generated");
        resolve(token);
      }
    );
  });
};

export default generateJWT;
