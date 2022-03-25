import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_URL_API + '/api',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
    }
});

export default api;
