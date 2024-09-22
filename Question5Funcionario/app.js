const express = require('express');
const app = express();

const createEmployee = require('./routes/createEmployee');
const getEmployees = require('./routes/getEmployees');
const updateEmployee = require('./routes/updateEmployee');
const deleteEmployee = require('./routes/deleteEmployee');

app.use(express.json());

// Rotas
app.use('/', createEmployee);
app.use('/', getEmployees);
app.use('/', updateEmployee);
app.use('/', deleteEmployee);

const PORT = 6000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
