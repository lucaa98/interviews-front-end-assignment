import axios from 'axios'

export const getAll = async () => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/cuisines`)
}

export const get = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/cuisines/${id}`)
}