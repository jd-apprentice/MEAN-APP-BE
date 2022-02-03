import { Router } from 'express';
import employeesRoutes from './employees.routes.mjs';
import userRoutes from './user.routes.mjs';
const allRoutes = Router;

allRoutes.use('/employees', employeesRoutes);
allRoutes.use('/user', userRoutes);

export default allRoutes;