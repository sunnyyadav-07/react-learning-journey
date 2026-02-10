import { api1, api2 } from "../../axiosInstance";
import {
  FETCH_CURRENT_WEATHER_ERROR,
  FETCH_FORCAST_WEATHER_ERROR,
  FETCH_CURRENT_WEATHER_PENDING,
  FETCH_FORCAST_WEATHER_PENDING,
  FETCH_CURRENT_WEATHER_SUCCESS,
  FETCH_FORCAST_WEATHER_SUCCESS,
  SET_CITY,
} from "../constants/weatherConstants";
export const fetchCurrentWeatherSuccess = (data) => {
  return {
    type: FETCH_CURRENT_WEATHER_SUCCESS,
    payload: data,
  };
};
export const fetchForcastWeatherSuccess = (data) => {
  return {
    type: FETCH_FORCAST_WEATHER_SUCCESS,
    payload: data,
  };
};
export const setCity = (data) => {
  return {
    type: SET_CITY,
    payload: data,
  };
};
export const fetchCurrentWeatherPending = () => {
  return {
    type: FETCH_CURRENT_WEATHER_PENDING,
  };
};
export const fetchForcasttWeatherPending = () => {
  return {
    type: FETCH_FORCAST_WEATHER_PENDING,
  };
};
export const fetchCurrentWeatherError = (data) => {
  return {
    type: FETCH_CURRENT_WEATHER_ERROR,
    payload: data,
  };
};
export const fetchForcasttWeatherError = (data) => {
  return {
    type: FETCH_FORCAST_WEATHER_ERROR,
    payload: data,
  };
};
const API_KEY = import.meta.env.VITE_API_KEY;
export const fetchWeather = (city) => {
  return async (dispatch) => {
    dispatch(fetchCurrentWeatherPending());
    try {
      const currentWeatherDetails = await api1.get(
        `/weather?q=${city}&appid=${API_KEY}`,
      );
      const forcastDetails = await api2.get(
        `/forecast?q=${city}&appid=${API_KEY}`,
      );
      dispatch(fetchCurrentWeatherSuccess(currentWeatherDetails.data));
      dispatch(fetchForcastWeatherSuccess(forcastDetails.data.list));
      // console.log(currentWeatherDetails);
      // console.log(forcastDetails);
    } catch (error) {
      dispatch(fetchCurrentWeatherError("something went wrong"));
    }
  };
};
