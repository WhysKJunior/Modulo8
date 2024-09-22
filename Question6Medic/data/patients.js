let patients = [
  { id: 1, nome: "Bokinha", dataNascimento: "13-06-2000"  },
  { id: 2, nome: "Milhinho", dataNascimento: "15-05-2000" }
];
let nextId = 3;

function addPatient(patient) {
  patient.id = nextId++;
  patients.push(patient);
  return patient;
}

function getPatients() {
  return patients;
}

function updatePatient(id, updatedPatient) {
  const index = patients.findIndex(patient => patient.id === parseInt(id));
  if (index !== -1) {
    patients[index].nome = updatedPatient.nome;
    patients[index].dataNascimento = updatedPatient.dataNascimento;
    return patients[index];
  }
  return null;
}

function deletePatient(id) {
  const index = patients.findIndex(patient => patient.id === parseInt(id));
  if (index !== -1) {
    patients.splice(index, 1);
    return true;
  }
  return false;
}

function searchPatients({ nome, dataNascimento }) {
  return patients.filter(patient =>
    (nome ? patient.nome.includes(nome) : true) &&
    (dataNascimento ? patient.dataNascimento === dataNascimento : true)
  );
}

module.exports = { addPatient, getPatients, updatePatient, deletePatient, searchPatients };
