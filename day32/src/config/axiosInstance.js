import axios from "axios";

const api = axios.create({
  baseURL: "https://698daa84b79d1c928ed6199a.mockapi.io",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
