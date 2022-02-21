import { Router } from 'express';
const userRoutes = Router();
import UserController from "../controllers/user";

userRoutes
  .post("/generatetoken", UserController.generateToken)
  .get("/validatetoken", UserController.validateToken);

export default userRoutes;
