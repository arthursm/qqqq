import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.10.144/',
});

export default api;
