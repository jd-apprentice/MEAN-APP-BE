import { Router } from 'express';
import employeesRoutes from './employees.routes';
import userRoutes from './user.routes';
const allRoutes = Router();

allRoutes.use('/employees', employeesRoutes);
allRoutes.use('/user', userRoutes);

export default allRoutes;