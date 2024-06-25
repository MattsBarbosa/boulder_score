import axios from "axios"

const REST_API_BASE_URL = 'http://localhost:8081/api/boulders'

export const getAllBoulders = () => axios.get(REST_API_BASE_URL)

export const saveBoulder = (boulder) => axios.post(REST_API_BASE_URL, boulder)

export const getBoulder = (bouderId) => axios.get(`${REST_API_BASE_URL}/${bouderId}`)

export const updateBoulder = (bouderId, boulder) => axios.put(`${REST_API_BASE_URL}/${bouderId}`, boulder)

export const deleteBoulder = (bouderId) => axios.delete(`${REST_API_BASE_URL}/${bouderId}`)

export const assignBouldersToAtletas = (bouldersId) => axios.post(`${REST_API_BASE_URL}/${"assign-to-atletas"}`, bouldersId)