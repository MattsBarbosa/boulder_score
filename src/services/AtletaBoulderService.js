import axios from "axios"

const REST_API_BASE_URL = 'http://localhost:8081/api/atleta-boulder'

export const getAllBouldersFromAtleta = (atletaId) => axios.get(`${REST_API_BASE_URL}/${atletaId}`)

export const recordAttempt = (atletaBoulderId) => axios.post(`${REST_API_BASE_URL}/${atletaBoulderId}`)

export const recordSend = (atletaBoulderId) => axios.post(`${REST_API_BASE_URL}/sent/${atletaBoulderId}`)