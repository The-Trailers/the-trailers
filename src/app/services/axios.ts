import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.SERVICE_URL
});