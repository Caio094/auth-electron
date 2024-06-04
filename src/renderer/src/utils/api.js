import axios from "axios";

const API = axios.create({
    baseURL: 'https://auth-api-zyji.onrender.com/',
    timeout: 10000
});

export default API;