const mainUrl = 'http://localhost:8000';

module.exports = {
    loginEndpoint: `${mainUrl}/auth/login`,
    addPatient:  `${mainUrl}/patient/create`,
    allPatient: `${mainUrl}/patient/allPatient`,
    dashboard: `${mainUrl}/user/dashboard`,
    addAppointment: `${mainUrl}/appointment/create`
}