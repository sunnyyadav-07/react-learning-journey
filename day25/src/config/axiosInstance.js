import axios from "axios";
const api = axios.create({
  baseURL:
    "https://newsapi.org/v2",
    timeout:4000
});
export default api;
