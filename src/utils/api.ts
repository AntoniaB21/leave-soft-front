import axios from 'axios';
import { Redirect } from 'react-router-dom'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'json'
});

const responseSuccessHandler = config => {
  const token = localStorage.getItem('tk');
    if (!config?.headers) {
      throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
    }
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
  return config;
};

const responseErrorHandler = error => {
  if (error.response.status === 401 || error.response.status === 500) {
    console.log('401');
    localStorage.removeItem('xyz');
    localStorage.removeItem('tk');
    localStorage.removeItem('username');
  }
  window.location.href='/login'
  return Promise.reject(error);
};

instance.interceptors.request.use(
  response => responseSuccessHandler(response),
  error => responseErrorHandler(error)
);

export default instance;