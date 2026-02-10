import {
  FETCH_CURRENT_WEATHER_ERROR,
  FETCH_FORCAST_WEATHER_ERROR,
  FETCH_CURRENT_WEATHER_PENDING,
  FETCH_FORCAST_WEATHER_PENDING,
  FETCH_CURRENT_WEATHER_SUCCESS,
  FETCH_FORCAST_WEATHER_SUCCESS,
  SET_CITY,
} from "../constants/weatherConstants";

const initialState = {
  city: "punjab",
  current: null,
  forcast: null,
  loading: false,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  if (action.type === FETCH_CURRENT_WEATHER_PENDING) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  } else if (action.type === FETCH_FORCAST_WEATHER_PENDING) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  } else if (action.type === FETCH_CURRENT_WEATHER_SUCCESS) {
    return {
      ...state,
      current: action.payload,
      loading: false,
    };
  } else if (action.type === FETCH_FORCAST_WEATHER_SUCCESS) {
    return {
      ...state,
      forcast: action.payload,
      loading: false,
    };
  } else if (action.type === FETCH_CURRENT_WEATHER_ERROR) {
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  } else if (action.type === FETCH_FORCAST_WEATHER_ERROR) {
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  } else if (action.type === SET_CITY) {
    return {
      ...state,
      city: action.payload,
    };
  } else {
    return state;
  }
};

export default weatherReducer;
