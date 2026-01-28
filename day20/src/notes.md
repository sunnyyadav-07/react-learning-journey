# 📘 React Learning — Day 20

# Axios & Data Fetching — Notes

This document covers **Axios Interceptors**, **Axios params**, **Promise.all**, and **Promise.allSettled** in a simple, practical, and production-focused way. 

---

## 1. Why We Need Better Data Fetching

In real React apps, we deal with:

* Multiple API calls
* Loading states
* Errors
* Authentication (tokens)
* Caching & performance

Using only `axios.get()` everywhere becomes messy. That’s why we use:

* **Interceptors** → Centralized request/response handling
* **Promise utilities** → Parallel API calls
* **React Query** → Smart server-state management

---

# 2. Axios Interceptors (Easy Explanation)

## What is an Interceptor?

Think of interceptors as **security guards** for every API call.

> Every request goes OUT → Request Interceptor runs
> Every response comes IN → Response Interceptor runs

So you don’t have to repeat logic in every API call.

---

## Why Use Interceptors?

Common real-world needs:

* Attach token in headers
* Handle errors globally
* Log API calls
* Redirect to login on 401 error

Instead of writing this in every component, you write it once.

---

## Axios Instance Setup

```js
import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

export default api;
```

---

## Request Interceptor Example

Runs **before API call goes to server**

```js
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("Request Sent:", config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```

### Why This Matters

* Automatically adds token
* Logs every request
* Centralized logic

---

## Response Interceptor Example

Runs **after server sends response**

```js
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      alert("Session expired. Please login again.");
    }

    return Promise.reject(error);
  }
);
```

### Real Use Case

* Handles authentication errors
* Shows global error message

---

# 3. Promise.all — Parallel API Calls

## Problem

Normally this is slow:

```js
await api.get("/users");
await api.get("/posts");
```

Because second API waits for first.

---

## Solution

```js
const [users, posts] = await Promise.all([
  api.get("/users"),
  api.get("/posts")
]);

console.log(users.data);
console.log(posts.data);
```

## How It Works

* Both APIs start at the same time
* Code waits until both finish
* Faster page load

---

## Behavior

> If **any one API fails** → whole Promise fails

So you must wrap in try/catch:

```js
try {
  const results = await Promise.all([
    api.get("/users"),
    api.get("/posts")
  ]);
} catch (err) {
  console.log("Something failed", err);
}
```

---

# 4. Promise.allSettled — Partial Success Allowed

## Why This Exists

Sometimes:

* Users API works
* Posts API fails

But you still want to show users.

---

## Example

```js
const results = await Promise.allSettled([
  api.get("/users"),
  api.get("/posts")
]);

const [usersResult, postsResult] = results;

if (usersResult.status === "fulfilled") {
  console.log(usersResult.value.data);
}

if (postsResult.status === "fulfilled") {
  console.log(postsResult.value.data);
}
```

---

## Difference Table

| Feature    | Promise.all       | Promise.allSettled |
| ---------- | ----------------- | ------------------ |
| Fail one   | All fail          | Others still work  |
| Partial UI | ❌                 | ✅                  |
| Best for   | Strict dashboards | User-friendly apps |

---

# 5. Axios Params 

## What Are Params?

**Params = Query String values** that go in the URL.

Example:

```
/users?_limit=5&search=sunny
```

These are mainly used for:

* Filtering
* Pagination
* Searching
* Sorting

---

## Basic Usage

```js
api.get("/users", {
  params: {
    _limit: 5,
    name: "sunny"
  }
});
```

Axios converts this into:

```
/users?_limit=5&name=sunny
```

---

## Default Params (Global Setup)

If every request needs the same params:

```js
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  params: {
    _limit: 5
  }
});
```
Now every request will automatically send:

```
/users?_limit=5
/posts?_limit=5
```

---

## Override Default Params

You can override anytime:

```js
api.get("/users", {
  params: {
    _limit: 10
  }
});
```

This will replace the default `_limit: 5`.

---

## Filtering Example (Starts With)

```js
api.get("/users", {
  params: {
    startsWith: "s"
  }
});
```

Backend receives:

```
/users?startsWith=s
```

Backend logic decides how to filter the data.

---

## Pagination Example

```js
api.get("/users", {
  params: {
    _page: 2,
    _limit: 5
  }
});
```

URL:

```
/users?_page=2&_limit=5
```

---

## Sorting Example

```js
api.get("/users", {
  params: {
    _sort: "name",
    _order: "asc"
  }
});
```
---

## Params vs Data (Important)

| Feature     | params | data       |
| ----------- | ------ | ---------- |
| Goes in URL | Yes    | No         |
| Used in     | GET    | POST / PUT |
| Visible     | Yes    | No         |

---

## Real Production Tip

Never send:

* Passwords
* Tokens
* Sensitive data

Inside params.

Use request body or headers instead.

---
# 6. Mental Models

* **Interceptor** = Security Guard
* **Promise.all** = Order everything together
* **Promise.allSettled** = Show whatever arrives

---
## End of Notes

