# 📘 React Learning — Day 33

# Custom Hooks in React – Notes

## 1️⃣ Why Do We Use Custom Hooks?

In React, we often write similar logic in multiple components. For example:

* Fetching data from an API
* Managing counters
* Handling forms
* Managing loading and error states

If we write the same logic again and again inside different components, our code becomes:

* Hard to maintain
* Repetitive (duplicate code)
* Difficult to reuse

👉 **Custom Hooks solve this problem.**

A custom hook allows us to extract reusable logic into a separate function so that multiple components can use the same logic.

---

## 2️⃣ What Is a Custom Hook?

A custom hook is just a **JavaScript function** that:

* Starts with the word `use`
* Can use other React hooks like `useState`, `useEffect`, etc.
* Returns values or functions

Example structure:

```js
function useSomething() {
  const [state, setState] = useState();
  
  // logic

  return state;
}
```

---

## 3️⃣ Benefits of Custom Hooks

✅ Code Reusability
Write logic once, use it anywhere.

✅ Clean Components
Components focus only on UI, not logic.

✅ Better Separation of Concerns
Logic and UI are separated.

✅ Easy Maintenance
If logic changes, update it in one place.

✅ Improves Readability
Cleaner and more structured code.

---

#  Example 1: useFetchUser Hook

## Purpose

Reusable logic for fetching data from an API.

## Code

```js
import { useEffect, useState } from "react";

export function useFetchUser(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError("something went wrong!");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, error, loading };
}
```

## How It Works

* `data` → stores API response
* `loading` → true while fetching
* `error` → stores error message
* `useEffect` runs when `url` changes
* Returns an object that component can use

## Usage in Component

```js
const { data, loading, error } = useFetchUser("https://jsonplaceholder.typicode.com/users");
```

Component only handles UI, not fetching logic.

---

#  Example 2: useCounter Hook

## Purpose

Reusable counter logic.

## Code

```js
import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(prev => prev + 1);
  }

  function decrement() {
    setCount(prev => prev - 1);
  }

  function reset() {
    setCount(initialValue);
  }

  return { count, increment, decrement, reset };
}
```

## How It Works

* `count` → current value
* `increment()` → increases count
* `decrement()` → decreases count
* `reset()` → resets to initial value

## Usage in Component

```js
const { count, increment, decrement, reset } = useCounter(0);
```

---

#  Improvement Suggestion

In `useCounter`, it is better to use functional updates:

```js
setCount(prev => prev + 1);
```

Why?
Because state updates are asynchronous and functional updates prevent stale state issues.

---

#  Important Rules for Custom Hooks

1. Must start with `use`
2. Can only be used inside React components or other hooks
3. Follow Rules of Hooks (no conditional hook calls)

---

#  Summary

Custom Hooks help us:

* Extract reusable logic
* Keep components clean
* Avoid code duplication
* Improve scalability of applications

