import axios from "axios";

const api = axios.create({
  baseURL: "https://692d2c1fe5f67cd80a4a683d.mockapi.io",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
export default api;
