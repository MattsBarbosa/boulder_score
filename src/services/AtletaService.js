import axios from "axios"

const REST_API_BASE_URL = 'http://localhost:8081/api/atletas'

export const getAllAtletas = () => axios.get(REST_API_BASE_URL)

export const saveAtleta = (atleta) => axios.post(REST_API_BASE_URL, atleta)

export const getAtleta = (atletaId) => axios.get(`${REST_API_BASE_URL}/${atletaId}`)

export const updateAtleta = (atletaId, atleta) => axios.put(`${REST_API_BASE_URL}/${atletaId}`, atleta)

export const deleteAtleta = (atletaId) => axios.delete(`${REST_API_BASE_URL}/${atletaId}`)