import axios from 'axios'

export const getAll = async () => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/difficulties`)
}

export const get = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/difficulties/${id}`)
}