const { Router } = require("express")
const router = Router();

const employeeController = require("../controllers/employees")

router.get('/', employeeController.getEmployees)
.post('/', employeeController.createEmployee)
.get('/:id', employeeController.getEmployee)
.put('/:id', employeeController.updateEmployee)
.delete('/:id', employeeController.deleteEmployee)

module.exports = router;