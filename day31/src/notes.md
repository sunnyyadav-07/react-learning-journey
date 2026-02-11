# 📘 React Learning — Day 31

#  Redux Toolkit (RTK) – Complete Notes

---

#  What is State Management?

State management means **managing and controlling data (state) across your entire application**.

In small apps, React's `useState` is enough.

But in large applications:

* Many components need the same data
* Props drilling becomes messy
* Data becomes hard to manage
* Debugging becomes difficult

👉 This is where **Redux Toolkit is used for global state management**.

Redux Toolkit helps us:

* Store application-wide data in one central place (store)
* Share data between unrelated components
* Keep state predictable
* Debug state changes easily

So, Redux Toolkit is mainly used for **global state management in large React applications**.

---

##  What is Redux Toolkit?

Redux Toolkit (RTK) is the **official, recommended way** to write Redux logic.

It is built on top of Redux and solves common problems like:

* Too much boilerplate code
* Complex store setup
* Manual immutable updates
* Difficult async handling

RTK provides **better defaults, simpler APIs, and built-in best practices**.

---

# ❓ Why Redux Toolkit is Easier than Traditional Redux

##  Traditional Redux Problems

1. Manually create action types
2. Manually create action creators
3. Write switch-case reducers
4. Setup Redux DevTools manually
5. Add redux-thunk manually for async
6. Handle immutable updates manually

👉 Too much repetitive code.

---

##  Redux Toolkit Solutions

Redux Toolkit provides:

* `configureStore()` → Simplified store setup
* `createSlice()` → Auto creates actions + reducers
* `createAsyncThunk()` → Handles async logic
* Built-in Redux DevTools support
* Built-in thunk middleware
* Uses **Immer** internally (write "mutating" logic safely)

---

#  Project Structure Example 

```
store/
 ├── store.js
 └── features/
      ├── counter/
      │     └── counterSlice.js
      └── user/
            └── userSlice.js
```

This is the recommended **feature-based folder structure**.

---

#  configureStore()

## ✅ What it Does:

* Creates Redux store
* Combines reducers
* Adds thunk middleware automatically
* Enables Redux DevTools

### Example:

```js
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
```

🔹 No need for `createStore()`
🔹 No need for `applyMiddleware()`
🔹 No need to configure DevTools manually

---

# 🧩 createSlice()

## ✅ What it Does:

* Creates reducer
* Creates actions automatically
* Handles immutable updates using Immer

---

## Example: Counter Slice

```js
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    changeByValue: (state, action) => {
      state.count += Number(action.payload);
    },
  },
});
```

###  Important:

We are directly modifying state:

```js
state.count += 1
```

But Redux state is immutable ❗

👉 RTK uses **Immer** internally.
Immer converts this "mutating" logic into safe immutable updates.

---

##  Auto Generated Things

From createSlice you get:

```js
export const { increment, decrement, changeByValue } = counterSlice.actions;
export default counterSlice.reducer;
```

You don't manually write action types or creators anymore.

---

#  Async Logic with createAsyncThunk()

##  Why Needed?

Redux reducers must be pure functions.
Async operations (API calls) cannot be inside reducers.

So RTK provides `createAsyncThunk()`.

---

## Example: Fetch Users

```js
export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue("something went wrong!");
    }
  }
);
```

---

##  Async Lifecycle Actions

When you dispatch:

```js
dispatch(fetchUsers())
```

RTK automatically creates 3 states:

1. `fetchUsers.pending`
2. `fetchUsers.fulfilled`
3. `fetchUsers.rejected`

---

#  extraReducers

Used to handle async thunk cases.

```js
extraReducers: (builder) => {
  builder
    .addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
}
```

---

#  State Structure Example

```js
const initialState = {
  users: [],
  loading: false,
  error: null,
};
```

This pattern is standard for async requests.

---

# 🔌 React-Redux Integration

## Provider Setup

```js
<Provider store={store}>
  <App />
</Provider>
```

---

#  Hooks Used

## 1️⃣ useSelector()

Used to read data from store.

```js
const count = useSelector((state) => state.counter.count);
```

---

## 2️⃣ useDispatch()

Used to dispatch actions.

```js
const dispatch = useDispatch();
dispatch(increment());
```

---

#  Key Advantages of Redux Toolkit

## ✅ 1. Less Boilerplate

No action types, no switch-case reducers.

## ✅ 2. Built-in Thunk

No need to install redux-thunk separately.

## ✅ 3. DevTools Enabled

Automatically works with Redux DevTools.

## ✅ 4. Safe State Updates

Thanks to Immer.

## ✅ 5. Better Folder Structure

Feature-based architecture.

## ✅ 6. Standardized Async Pattern

Using createAsyncThunk.

---

#  Redux vs Redux Toolkit Comparison

| Traditional Redux      | Redux Toolkit    |
| ---------------------- | ---------------- |
| createStore()          | configureStore() |
| switch-case reducer    | createSlice()    |
| Manual action types    | Auto generated   |
| Manual thunk setup     | Built-in         |
| Manual immutable logic | Immer handles it |

---

#  Important Concepts i Learned 

* Centralized global state
* Feature-based architecture
* Slice-based state management
* Async API handling
* Loading & error handling pattern
* Automatic action generation

---

#  Best Practices

✅ Keep one slice per feature

✅ Use async thunk for API calls

✅ Keep loading + error state for async logic

✅ Do not put business logic inside components

✅ Keep store clean and scalable

---

#  Final Understanding

Redux Toolkit is:

✔ Cleaner
✔ Simpler
✔ More scalable
✔ Production ready
✔ Official Redux standard

If you understand:

* configureStore
* createSlice
* createAsyncThunk
* useSelector
* useDispatch

👉 You understand 80% of Redux Toolkit used in real-world applications.

---

#  Next Step (Advanced Topics)

* Redux DevTools debugging deeply
* Middleware customization
* RTK Query
* Normalized state structure
* Memoized selectors (reselect)
* Performance optimization

---

#  Conclusion

Redux Toolkit removes complexity from Redux and makes state management:

👉 Predictable
👉 Maintainable
👉 Scalable
👉 Easy to write

