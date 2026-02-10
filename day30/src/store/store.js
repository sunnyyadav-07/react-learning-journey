import { applyMiddleware, compose, createStore } from "redux";
import weatherReducer from "./reducer/weatherReducer";
import { thunk } from "redux-thunk";
export const store = createStore(
  weatherReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
