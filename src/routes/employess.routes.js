const { Router } = require("express")
const routerEmployee = Router();

const employeeController = require("../controllers/employees")

routerEmployee.get('/', employeeController.getEmployees)
.post('/', employeeController.createEmployee)
.get('/:id', employeeController.getEmployee)
.put('/:id', employeeController.updateEmployee)
.delete('/:id', employeeController.deleteEmployee)

module.exports = routerEmployee;