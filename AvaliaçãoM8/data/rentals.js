
const {books} = require('./books')
const {students} = require('./students')

let rentals = [];
let nextID = 1

function addRental(rental) {

  rental.id = nextID++
  rentals.push(rental);
  return rental;
}

function getRentals() {
  return rentals;
}

function updateRental(id, newDetails) {
  const index = rentals.findIndex(rental => rental.id === parseInt(id));
  if (index !== -1) {
    rentals[index] = { ...rentals[index], ...newDetails };
    return rentals[index];
  }
  return null;
}

function deleteRental(id) {
  const index = rentals.findIndex(rental => rental.id === parseInt(id));
  if (index !== -1) {
    return rentals.splice(index, 1);
  }
  return null;
}

function searchRentals({ dataAluguel, idLivro, idEstudante }) {
  return rentals.filter(rental => {
    return (!dataAluguel || rental.dataAluguel === dataAluguel) &&
      (!idLivro || rental.idLivro === parseInt(idLivro)) &&
      (!idEstudante || rental.idEstudante === parseInt(idEstudante));
  });
}

function validateRentalData({ idLivro, idEstudante, dataAluguel }) {
  if (!idLivro || isNaN(parseInt(idLivro))) return "O campo 'idLivro' deve ser um número válido.";

  const bookExists = books.find(book => book.id === parseInt(idLivro));
  if (!bookExists) {
    return {error: "Livro com esse ID não encontrado.", statusCode: 404} ;
  }


  if (!idEstudante || isNaN(parseInt(idEstudante))) return "O campo 'idEstudante' deve ser um número válido.";

  const studentsExists = students.find(student => student.id === parseInt(idEstudante));
  if (!studentsExists) {
    return {error: "Estudante com esse ID não encontrado.", statusCode: 404} ;
  }


  if (!dataAluguel) return "O campo 'dataAluguel' é obrigatório.";
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!isoDateRegex.test(dataAluguel)) return "O campo 'dataAluguel' deve estar no formato ISO (AAAA-MM-DD).";

  return null;
}
// const bookExists = books.find(book => book.id === parseInt(idLivro));
//   if (!bookExists) {
//     return res.status(404).json({ error: "Livro com esse ID não encontrado." });
//   }

//   const studentsExists = students.find(estudante => estudante.id === parseInt(idEstudante));
//   if (!studentsExists) {
//     return res.status(404).json({ error: "Estudante com esse ID não encontrado." });
//   }
module.exports = { addRental, getRentals, updateRental, deleteRental, searchRentals, validateRentalData };
