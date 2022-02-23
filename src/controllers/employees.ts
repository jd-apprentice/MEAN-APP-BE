import Employee from '../models/employees';

class EmployeeController {

  /**
   * @description: Get all employees
   * @returns {Array<Employee>}
   */

  async getEmployees(req: any, res: any) {
    try {
      const employees = await Employee.find();
      return res.json(employees);
    } catch (error) {
      return res.status(401).send(error);    }
  }

  /**
   * @description: Get one employee
   * @returns {Employee}
   * @param {string} id
  */

  async getEmployee(req:any, res:any) {
    try {
      const employee = await Employee.findById(req.params.id);
      return res.json(employee);
    } catch (error) {
      return res.status(401).send(error);
    }
  }

  /**
   * @description: Update employee
   * @returns {Employee}
   * @param {string} id
  */

  async updateEmployee(req:any, res:any) {
    const { id } = req.params;
    try {
      const updateEmployee = await Employee.findByIdAndUpdate(id, req.body);
      await updateEmployee.save();
      return res.json({ status: "Employee updated" });
    } catch (error) {
      return res.status(401).send(error);
    }
  }

  /**
   * @description: Delete employee
   * @returns response
   * @param {string} id
  */

  async deleteEmployee(req:any, res:any) {
    const { id } = req.params;
    try {
      await Employee.findByIdAndDelete(id);
      return res.json({ status: "Employee deleted successfully" });
    } catch (error) {
      return res.status(401).send(error);
    }
  }

  /**
   * @description: Create employee
   * @returns response
   * @param {Employee} firstName, lastName, email, phone, position, salary
   */

  async createEmployee(req:any, res:any) {
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
      return res.json({ message: "Employee saved successfully" });
    } catch (error) {
      return res.status(401).send(error);
    }
  }
}

export default new EmployeeController();
