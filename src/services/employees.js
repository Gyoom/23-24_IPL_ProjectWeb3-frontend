import axios from 'axios'

require('dotenv').config()
const baseUrl = process.env.BACKEND_URL + "employee"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getByEmail = (email) => {
  const request = axios.delete(`${baseUrl}/email/${email}`)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}



export default { 
  getAll: getAll,
  getByEmail: getByEmail,
  create: create, 
  update: update,
  remove: remove
}