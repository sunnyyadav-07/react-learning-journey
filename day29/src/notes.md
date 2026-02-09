# 📘 React Learning — Day 29

# React Redux – Notes (with Redux Persist)

> These notes are based on today’s practice where i used **Redux**, **React-Redux**, and **Redux-Persist** together in  React 

---

## What is Redux?

Redux is a **state management library** used to manage global state in JavaScript applications (commonly with React).

### Why Redux?

* Avoid **prop drilling**
* Centralized & predictable state
* Easy debugging with **Redux DevTools**
* Good for medium to large applications

---

## Core Concepts of Redux

### 1. Store

* The **single source of truth**
* Holds the complete application state

```js
const store = createStore(reducer);
```

---

### 2. Action

* A **plain JavaScript object**
* Describes *what happened*

```js
{
  type: 'ADD_TO_PRODUCT',
  payload: { id: 1, product: 'samsung' }
}
```

Action Creators:

```js
export const addToProduct = (details) => ({
  type: 'ADD_TO_PRODUCT',
  payload: details,
});
```

---

### 3. Reducer

* A **pure function**
* Takes `state` and `action`
* Returns **new state** (never mutate state)

```js
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
};
```

---

### 4. combineReducers

* Used when you have **multiple reducers**
* Creates one root reducer

```js
const rootReducer = combineReducers({
  productReducer,
  cartReducer,
});
```

State shape becomes:

```js
state = {
  productReducer: { products: [], count: 0 },
  cartReducer: { cart: [] }
}
```

---

## React-Redux

### Provider

* Makes the Redux store available to all components

```jsx
<Provider store={store}>
  <App />
</Provider>
```

---

### useDispatch

* Used to **dispatch actions**

```js
const dispatch = useDispatch();

dispatch(addToProduct({ id: 1, product: 'samsung' }));
```

---

### useSelector

* Used to **read data** from the store

```js
const products = useSelector(
  (state) => state.productReducer.products
);
```

⚠️ Component re-renders when selected state changes

---

## Redux Persist

### What is Redux Persist?

Redux Persist is used to **save Redux state in localStorage** so that data is not lost on page refresh.

---

### Persist Configuration

```js
const persistConfig = {
  key: 'root',
  storage,
};
```

---

### persistReducer

* Wraps root reducer

```js
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);
```

---

### persistStore

* Creates a persistor

```js
const persistedStore = persistStore(store);
```

---

### PersistGate

* Delays rendering until persisted state is loaded

```jsx
<PersistGate persistor={persistedStore}>
  <App />
</PersistGate>
```

---

## Redux DevTools

```js
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

Helps in:

* Inspect actions
* Time-travel debugging
* Check state changes

---

## Important Rules

* ❌ Never mutate state directly
* ✅ Always return a **new object**
* Reducers must be **pure functions**
* One global store

---

## When to Use Redux?

✅ Use Redux when:

* State is shared across many components
* App is growing large
* You need predictable state changes

❌ Avoid Redux when:

* Small app
* Local state is enough

---

## Summary

* Redux = global state management
* Store → holds state
* Action → what happened
* Reducer → how state changes
* React-Redux → connects Redux with React
* Redux Persist → saves state after refresh

---
