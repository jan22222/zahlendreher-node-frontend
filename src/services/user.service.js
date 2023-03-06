import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://zahlendreher-node-backend-r9tg.onrender.com/';

class UserService {
  getAllTasks() {
    return axios.get(API_URL + 'tasks/all', { headers: authHeader() });
  }

  createTask() {
    return axios.post(API_URL + 'tasks/create', { headers: authHeader() });
  }

  getTaskById(id) {
    return axios.get(API_URL + `tasks/${id}`, { headers: authHeader() });
  }

  deleteTaskById(id) {
    return axios.delete(API_URL + `tasks/${id}`, { headers: authHeader() });
  }

  async getAllUsers() {
      const data = await axios.get(API_URL + 'users/all', { headers: authHeader() });
    
     return data
  }

  getUserById(id) {
    return axios.get(API_URL + `users/${id}`, { headers: authHeader() });
  }

  deleteUserById(id) {
    return axios.delete(API_URL + `users/${id}`, { headers: authHeader() });
  }

  getTableById(id) {
    return axios.get(API_URL + `tables/${id}`, { headers: authHeader() });
  }

  saveTableById() {
    return axios.post(API_URL + 'table/create', { headers: authHeader() });
  }

  getAllCoworkers() {
    return axios.get(API_URL + 'coworkers/all', { headers: authHeader() });
  }

  addCoworker() {
    return axios.post(API_URL + `coworkers/add`, { headers: authHeader() });
  }

  deleteCoworkerById(id) {
    return axios.delete(API_URL + `coworkers/${id}`, { headers: authHeader() });
  }

}

export default new UserService();