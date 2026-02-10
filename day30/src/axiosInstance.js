import axios from "axios";

export const api1 = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});
export const api2 = axios.create({
  baseURL:
    "https://pro.openweathermap.org/data/2.5",
});
 