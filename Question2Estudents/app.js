const express = require('express');
const app = express();

const createStudentRoute = require('./routes/createStudent');
const getStudentsRoute = require('./routes/getStudents');
const updateStudentRoute = require('./routes/updateStudent');
const deleteStudentRoute = require('./routes/deleteStudent');
const searchStudentsRoute = require('./routes/searchStudents');

app.use(express.json()); // Middleware para lidar com JSON no corpo da requisição

app.use('/', createStudentRoute);
app.use('/', getStudentsRoute);
app.use('/', updateStudentRoute);
app.use('/', deleteStudentRoute);
app.use('/', searchStudentsRoute);

const PORT = 3030
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
