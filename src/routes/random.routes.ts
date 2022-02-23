import { Router } from 'express';
const randomRoutes = Router();
import RandomUserController from "../controllers/randomUser";

randomRoutes
  .get("/", RandomUserController.getRandomUserData);

export default randomRoutes;
