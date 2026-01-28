import axios from "axios";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});
export default api;

api.interceptors.request.use((config) => {
  console.log(config.url);
  return config;
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log("Request sent to : ", config.url);
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      alert("session expired, please login again");
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  },
);
