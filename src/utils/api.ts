import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'json',
});

// instance.interceptors.request.use(
//   function (config) {
//     const token = localStorage.getItem('tk');
//     if (token) {
//       config.headers['Authorization'] = 'Bearer ' + token;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );

export default instance;