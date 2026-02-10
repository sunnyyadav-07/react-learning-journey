# 📘 React Learning — Day 30

# Redux Weather App – Learning Notes

> **Goal**: This project was built to understand Redux concepts (store, reducer, actions, thunk, flow). UI was not the focus.

---

## 1. Why Redux is used here

Redux is used to manage **global state** like:

* Selected city
* Current weather data
* Forecast data
* Loading state
* Error state

Without Redux, this data would need to be passed via props across multiple components.

---

## 2. Global State Structure

The entire app state is managed by a single reducer (`weatherReducer`).

```js
state = {
  city: "punjab",
  current: null,
  forcast: null,
  loading: false,
  error: null
}
```

---

## 3. Store Configuration

```js
const store = createStore(
  weatherReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
```

### Key Points

* `createStore` creates the Redux store
* `weatherReducer` controls how state changes
* `redux-thunk` allows async actions (API calls)
* Redux DevTools help debug state and actions

---

## 4. Reducer (weatherReducer)

Reducer is a **pure function**:

```js
(state, action) => newState
```

### Responsibilities of Reducer

* Reads `action.type`
* Updates state immutably
* Returns a new state object

### Example

```js
if (action.type === FETCH_CURRENT_WEATHER_SUCCESS) {
  return {
    ...state,
    current: action.payload,
    loading: false
  };
}
```

### Important Rules

* Never mutate state directly
* Always return a new object
* No API calls inside reducer

---

## 5. Action Constants

Constants are used to avoid spelling mistakes.

```js
export const FETCH_CURRENT_WEATHER_SUCCESS = "FETCH_CURRENT_WEATHER_SUCCESS";
export const FETCH_FORCAST_WEATHER_SUCCESS = "FETCH_FORCAST_WEATHER_SUCCESS";
export const SET_CITY = "SET_CITY";
```

---

## 6. Action Creators

Action creators return **action objects**.

### Correct Action Structure

```js
{
  type: "ACTION_NAME",
  payload: data
}
```

### Example

```js
export const fetchCurrentWeatherSuccess = (data) => {
  return {
    type: FETCH_CURRENT_WEATHER_SUCCESS,
    payload: data
  };
};
```

⚠️ Redux always expects `type`, not `action`.

---

## 7. Async Actions using redux-thunk

Thunk allows returning a function instead of an object.

```js
export const fetchWeather = (city) => {
  return async (dispatch) => {
    dispatch(fetchCurrentWeatherPending());
    try {
      const current = await api1.get(`/weather?q=${city}&appid=${API_KEY}`);
      const forcast = await api2.get(`/forecast?q=${city}&appid=${API_KEY}`);

      dispatch(fetchCurrentWeatherSuccess(current.data));
      dispatch(fetchForcastWeatherSuccess(forcast.data.list));
    } catch (error) {
      dispatch(fetchCurrentWeatherError("something went wrong"));
    }
  };
};
```

### Flow of Async Action

1. Dispatch `PENDING`
2. Call API
3. Dispatch `SUCCESS` on response
4. Dispatch `ERROR` on failure

---

## 8. Using Redux in Components

### Reading State (useSelector)

```js
const current = useSelector((state) => state.current);
const loading = useSelector((state) => state.loading);
```

### Dispatching Actions (useDispatch)

```js
dispatch(fetchWeather(city));
```

---

## 9. Component Responsibilities

### Search Component

* Reads `city` from Redux
* Updates city using `SET_CITY`
* Dispatches `fetchWeather`

### CurrentWeather Component

* Displays current weather
* Handles loading and error states

### ForcastWeather Component

* Displays forecast list

### App Component

* Triggers initial weather fetch using `useEffect`

---

## 10. Redux Data Flow (End-to-End)

```
Component
   ↓ dispatch(action)
Action Creator
   ↓
Thunk (API call)
   ↓
Reducer
   ↓
Store updates state
   ↓
Components re-render
```

---

## 11. Key Learnings

* Redux centralizes application state
* Reducers must be pure functions
* Actions must always have `type`
* redux-thunk is required for async logic
* useSelector subscribes to store updates
* useDispatch sends actions to store

---

## 12. Notes

* This project focuses on **concept clarity**, not UI
* Forecast spelling is kept as `forcast` for consistency with code
* Redux Toolkit can reduce boilerplate (recommended for production)

---

