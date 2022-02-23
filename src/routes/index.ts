import { Router } from 'express';
import employeesRoutes from './employees.routes';
import userRoutes from './user.routes';
import randomRoutes from './random.routes';
const allRoutes = Router();

allRoutes.use('/employees', employeesRoutes);
allRoutes.use('/user', userRoutes);
allRoutes.use('/random', randomRoutes);

export default allRoutes;