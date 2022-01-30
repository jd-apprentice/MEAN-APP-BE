const employeeController = {};
const Employee = require("../models/employees");

employeeController.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.log(error);
  }
};

employeeController.getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (error) {
    console.log(error);
  }
};

employeeController.updateEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const updateEmployee = await Employee.findByIdAndUpdate(id, req.body);
    await updateEmployee.save();
    res.json({ status: "Employee updated" });
  } catch (error) {
    console.log(error);
  }
};

employeeController.deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    await Employee.findByIdAndDelete(id);
    res.json({ status: "Employee deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
employeeController.createEmployee = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

module.exports = employeeController;
