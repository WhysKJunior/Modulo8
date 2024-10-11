let appointments = []; // Armazenamento em memória para simplicidade
let currentId = 1;

const addAppointment = (appointment) => {
    const newAppointment = { id: currentId++, ...appointment };
    appointments.push(newAppointment);
    return newAppointment;
};

const getAllAppointments = () => {
    return appointments;
};

const updateAppointment = (id, updatedData) => {
    const index = appointments.findIndex(app => app.id == id);
    if (index !== -1) {
        appointments[index] = { ...appointments[index], ...updatedData };
        return appointments[index];
    }
    return null;
};

const deleteAppointment = (id) => {
    const index = appointments.findIndex(app => app.id == id);
    if (index !== -1) {
        appointments.splice(index, 1);
        return true;
    }
    return false;
};

const searchAppointments = (query) => {
    return appointments.filter(appointment => {
        return Object.keys(query).every(key => 
            appointment[key] == query[key]
        );
    });
};

module.exports = {
    addAppointment,
    getAllAppointments,
    updateAppointment,
    deleteAppointment,
    searchAppointments,
};
