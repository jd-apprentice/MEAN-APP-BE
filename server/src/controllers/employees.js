const employeeController = {};
const Employee = require("../models/employees");

employeeController.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};
employeeController.getEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
};
employeeController.updateEmployee = async (req, res) => {
  const updateEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body);
  await updateEmployee.save();
  res.json({status: "Employee updated"});
};
employeeController.deleteEmployee = async (req, res) => {
  await Employee.findOneAndDelete(req.params.id);
  res.json({status: "Employee deleted successfully"});
};
employeeController.createEmployee = async (req, res) => {
  const newEmployee = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    position: req.body.position,
    salary: req.body.salary,
  });
  await newEmployee.save();
  res.json({ message: "Employee saved successfully" });
};

module.exports = employeeController;
