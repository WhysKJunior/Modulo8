//id, nome, matricula, curso, ano

let students = [
  { id: 1, nome: "Washington", matricula: "12345", curso: "SI", ano: 2001 },
  { id: 2, nome: "Alencouro", matricula: "19982", curso: "SI", ano: 2000 }
];
let nextId = 3;

function addStudent(student) {
  student.id = nextId++;
  students.push(student);
  return student;
}

function getStudents() {
  return students;
}

function searchStudents({ nome, matricula, curso, ano }) {
  return students.filter(student =>
    (nome ? student.nome.includes(nome) : true) &&
    (matricula ? student.matricula.includes(matricula) : true) &&
    (curso ? student.curso.includes(curso) : true) &&
    (ano ? student.ano == parseInt(ano) : true)

  );
}

function updateStudent(id, updatedStudent) {
  const index = students.findIndex(student => student.id === parseInt(id));
  if (index !== -1) {
    students[index] = { id: parseInt(id), ...updatedStudent}
    return students[index];
  }
  return null;
}

function deleteStudent(id) {
  const index = students.findIndex(student => student.id === parseInt(id));
  if (index !== -1) {
    students.splice(index, 1);
    return true;
  }
  return false;
}

function validateStudentData({ nome, matricula, curso, ano }) {
  if (!nome) return "O campo 'nome' é obrigatório.";
  if (!matricula) return "O campo 'matricula' é obrigatório.";
  if (!curso) return "O campo 'curso' é obrigatório.";
  if (!ano || isNaN(parseInt(ano))) return "O campo 'ano' deve ser um número válido.";
  return null;
}

module.exports = { 
  addStudent, 
  getStudents, 
  searchStudents, 
  updateStudent, 
  deleteStudent, 
  validateStudentData 
};


