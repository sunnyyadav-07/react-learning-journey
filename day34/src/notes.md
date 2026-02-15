# 📘 React Learning — Day 34

# React Lifecycle (Functional Component) – Notes

## 1️⃣ What is React Lifecycle?

React lifecycle refers to the different stages a component goes through during its existence:

1. 🟢 Mounting – When the component appears on the screen for the first time
2. 🟡 Updating – When state or props change
3. 🔴 Unmounting – When the component is removed from the screen

In functional components, lifecycle behavior is handled using the `useEffect()` hook.

---

# 2️⃣ Functional Component Lifecycle using useEffect

## 🟢 Mount Phase

This runs when the component renders for the first time.

```js
useEffect(() => {
  console.log("Form mounted.....");
}, []);
```

👉 An empty dependency array (`[]`) means the effect runs only once (on initial render).

---

## 🟡 Update Phase

This runs when a specific state or prop changes.

```js
useEffect(() => {
  console.log("Form updating.....");
}, [value]);
```

👉 Whenever `value` changes, this effect will run.

---

## 🔴 Unmount Phase

This runs when the component is removed from the DOM.

```js
useEffect(() => {
  return () => {
    console.log("Form unmounted.....");
    localStorage.clear();
  };
}, []);
```

👉 The function returned inside `useEffect` is called the cleanup function.
👉 It runs during unmount.

---

# 3️⃣  Example – Breakdown

## 🔹 Form Component

```js
const [value, setValue] = useState(localStorage.getItem("name") || "");
```

Explanation:

* The initial state is taken from localStorage
* If "name" exists, that value is used
* Otherwise, it defaults to an empty string

---

### Mount Effect

```js
useEffect(() => {
  console.log("Form mounted.....");
}, []);
```

The Form component mounts when `toggle` becomes true.

---

### Update Effect

```js
useEffect(() => {
  console.log("Form updating.....");
}, [value]);
```

When the input changes → `value` updates → update effect runs.

---

### Unmount Effect

```js
useEffect(() => {
  return () => {
    console.log("Form unmounted.....");
    localStorage.clear();
  };
}, []);
```

When `toggle` becomes false → Form unmounts → cleanup runs.

---

# 4️⃣ App Component Lifecycle Flow

```js
{toggle && <Form />}
```

### When toggle = true

* Form mounts
* Mount effect runs

### When toggle = false

* Form unmounts
* Cleanup function runs

---

# 5️⃣ Complete Lifecycle Flow (Based on Your Example)

### Step 1: Toggle true

➡ Form mounts
➡ "Form mounted....."

### Step 2: User types in input

➡ value changes
➡ "Form updating....."

### Step 3: Toggle false

➡ Form unmounts
➡ "Form unmounted....."
➡ localStorage clears

---

# 6️⃣ Quick Revision Table

| Phase          | useEffect Syntax             |
| -------------- | ---------------------------- |
| Mount          | useEffect(() => {}, [])      |
| Update         | useEffect(() => {}, [state]) |
| Unmount        | return () => {}              |
| Mount + Update | useEffect(() => {})          |

---

# 7️⃣ Final Understanding

Functional components do not have separate lifecycle methods like class components.

Everything is controlled through `useEffect()`.

The dependency array decides:

* When the effect runs
* How many times it runs
* When cleanup happens

---

This example is great for understanding lifecycle because it demonstrates:

* Mount
* Update
* Unmount
* Cleanup
* localStorage integration

---
