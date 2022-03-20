import axios from 'axios';

const api = axios.create({
    baseURL: 'http://coronatime-api.lukabrazi.redberryinternship.ge/api/',
    withCredentials: true,
});

export default api;
