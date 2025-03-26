import {ref} from 'vue'
import axios from 'axios'

const API_BACKEND = import.meta.env.VITE_API_BACKEND;

export const getAllUsers = () => {
    const data = ref([])
    
    const fetchData = async () => {
        try {
            const res = await axios.get(`${API_BACKEND}usuarios`)
            data.value = res.data
        } catch (err) {
            console.log("Error al querer obtener los datos")
        }
    }
    
    return {data, fetchData}
}

export const createNewUser = async (body) => {
    try {
        const res = await axios.post(`${API_BACKEND}usuarios`, body);
        alert(res.data.message);
        return true; 
    } catch (err) {
        console.log("Error al enviar los datos");
        return false;
    }
};

export const deleteUserFetch = async (id) => {
    try {
        const res = await axios.delete(`${API_BACKEND}usuarios/${id}`);
        alert(res.data.message);
    } catch (err) {
        console.log("Error al eliminar el usuario");
    }
}

export const updateUserFetch = async (id, body) => {
    try {
        const res = await axios.put(`${API_BACKEND}usuarios/${id}`, body);
        alert(res.data.message);
    } catch (err) {
        console.log("Error al actualizar los datos");
    }
}