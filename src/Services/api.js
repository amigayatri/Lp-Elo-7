import axios from "axios";

const baseUrl = `https://www.mocky.io/v2/5d6fb6b1310000f89166087b`

const api = axios.create({
    baseURL: baseUrl
});

export default api;
