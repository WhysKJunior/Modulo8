
let doctors = [
  { id: 1, nome: "Washington", especialidade: "Cardiologista" },
  { id: 2, nome: "Alencar", especialidade: "Neurologista" }
];
let nextId = 3;

function addDoctor(doctor) {
  doctor.id = nextId++;
  doctors.push(doctor);
  return doctor;
}

function getDoctors() {
  return doctors;
}

function updateDoctor(id, updatedDoctor) {
  const index = doctors.findIndex(doctor => doctor.id === parseInt(id));
  if (index !== -1) {
    doctors[index].nome = updatedDoctor.nome;
    doctors[index].especialidade = updatedDoctor.especialidade;
    return doctors[index];
  }
  return null;
}

function deleteDoctor(id) {
  const index = doctors.findIndex(doctor => doctor.id === parseInt(id));
  if (index !== -1) {
    doctors.splice(index, 1);
    return true;
  }
  return false;
}

function searchDoctors({ nome, especialidade }) {
  return doctors.filter(doctor =>
    (nome ? doctor.nome.includes(nome) : true) &&
    (especialidade ? doctor.especialidade.includes(especialidade) : true)
  );
}

module.exports = { addDoctor, getDoctors, updateDoctor, deleteDoctor, searchDoctors };
