let employees = [
  { id: 1, nome: "1984", cargo: "George Orwell", departamento: "1949", salario: 1990.00 },
  { id: 2, nome: "Dom Quixote", cargo: "Miguel de Cervantes", departamento: "1605", salario: 2000.00 }
];
let nextId = 3; 

function addEmployee(employee) {
  employee.id = nextId++;
  employees.push(employee);
  return employee;
}

function getEmployees() {
  return employees;
}

function getEmployeeById(id) {
  return employees.find(e => e.id === parseInt(id));
}

function updateEmployee(id, updatedEmployee) {
  const employeeIndex = employees.findIndex(e => e.id === parseInt(id));
    if (employeeIndex !== -1) {
      employees[employeeIndex] = { id: parseInt(id), ...updatedEmployee };
      return employees[employeeIndex];
    }
    return null;
}

function deleteEmployee(id) {
  const employeeIndex = employees.findIndex(e => e.id === parseInt(id));
  if (employeeIndex !== -1) {
    return employees.splice(employeeIndex, 1)[0];
  }
  return null;
}

function searchEmployees(query) {
  return employees.filter(employee => {
    return Object.keys(query).every(key => {
      return String(employee[key]).toLowerCase() === String(query[key]).toLowerCase();
    });
  });
}

function validateEmployeeData({ nome, cargo, departamento, salario }) {
  if (!nome) return "O campo 'nome' é obrigatório.";
  if (!cargo) return "O campo 'cargo' é obrigatório.";
  if (!departamento) return "O campo 'departamento' é obrigatório.";
  if (!salario) return "O campo 'salario' é obrigatório.";
  if (isNaN(parseFloat(salario))) return "O campo 'salario' deve ser um número válido.";
  return null;
}

module.exports = { addEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee, searchEmployees, validateEmployeeData };
