import axios from "axios";
import { getToken } from "./authStorage";

const api = axios.create({
    baseURL: "https://trafficgru-crm.vercel.app/api",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {

    const token = getToken();

    if (token) {

        config.headers.Authorization = `Bearer ${token}`;

    }

    return config;

});

export default api;