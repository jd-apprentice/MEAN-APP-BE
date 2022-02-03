const { Router } = require("express");
const routerUser = Router();

const userController = require("../controllers/user");

routerUser
  .post("/generatetoken", userController.generateToken)
  .get("/validatetoken", userController.validateToken);

module.exports = routerUser;
