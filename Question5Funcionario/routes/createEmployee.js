const express = require('express');
const router = express.Router();
const { addEmployee, validateEmployeeData } = require('../data/employees');

router.post('/funcionario', (req, res) => {
  const { nome, cargo, departamento, salario } = req.body;

  const validationError = validateEmployeeData({ nome, cargo, departamento, salario });
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const newEmployee = {
    id : null,
    nome,
    cargo,
    departamento,
    salario: parseFloat(salario) 
  };

  const addedEmployee = addEmployee(newEmployee);
  res.status(201).json(addedEmployee);
});

module.exports = router;
