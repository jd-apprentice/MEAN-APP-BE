import { Router } from 'express';
const employeesRoutes = Router();
import EmployeeController from "../controllers/employees";

employeesRoutes.get("/", EmployeeController.getEmployees)
.post('/', EmployeeController.createEmployee)
.get('/:id', EmployeeController.getEmployee)
.put('/:id', EmployeeController.updateEmployee)
.delete('/:id', EmployeeController.deleteEmployee)

export default employeesRoutes;
