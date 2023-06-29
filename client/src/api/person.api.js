
import axios from 'axios';

const personApi = axios.create({
    baseURL: 'http://localhost:8000/person/api/v1/person/',
})
export const getAllPerson=()=> personApi.get('/');

export const getPerson=(id)=>personApi.get(`/${id}/`) 

export const createPerson = (person) => personApi.post("/",person);

export const deletePerson=(id)=>personApi.delete(`/${id}`);

export const updatePerson=(id,person)=>personApi.put(`/${id}/`,person)
