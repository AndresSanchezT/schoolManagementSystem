import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/w1/estudiantes";

export const listStudent = async () => {
    try {
        const response = await axios.get(REST_API_BASE_URL);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const addStudent = async (student) => {
    try {
        const response = await axios.post(REST_API_BASE_URL, student);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const getStudent = async (studentId) => {
    try {
        const response = await axios.get(`${REST_API_BASE_URL}/${studentId}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const updateStudent = async (studentId, student) => {
    try {
        const response = await axios.put(`${REST_API_BASE_URL}/${studentId}`, student);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const deleteStudent = async (studentId) => {
    try {
        const response = await axios.delete(`${REST_API_BASE_URL}/${studentId}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Manejo de errores
const handleError = (error) => {
    if (error.response) {
        // El servidor respondió con un código de estado fuera del rango de 2xx
        console.error('Error response:', error.response.data);
    } else if (error.request) {
        // La solicitud se realizó pero no se recibió respuesta
        console.error('Error request:', error.request);
    } else {
        // Algo sucedió al configurar la solicitud que provocó un error
        console.error('Error message:', error.message);
    }
};
