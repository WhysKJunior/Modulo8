const express = require('express');
const router = express.Router();
const { getEmployees } = require('../data/employees');

router.get('/funcionarios', (req, res) => {
  const { nome, cargo, departamento, salario } = req.query; // Usando req.query para os parâmetros

  let filteredEmployees = getEmployees();

  if (nome || cargo || departamento || salario) {
    filteredEmployees = filteredEmployees.filter(funcionario =>
      (nome ? funcionario.nome.toLowerCase().includes(nome.toLowerCase()) : true) &&
      (cargo ? funcionario.cargo.toLowerCase().includes(cargo.toLowerCase()) : true) &&
      (departamento ? funcionario.departamento.toLowerCase() === departamento.toLowerCase() : true) &&
      (salario ? funcionario.salario == parseFloat(salario) : true) // Comparando salário como número
    );
  }

  res.json(filteredEmployees);
});

module.exports = router;
