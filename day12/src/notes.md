# 📘 React Learning — Day 12

I learned `useRef` after `form handling` because it is totally connected with it and my incoming project will use this concept.

# useRef – Deep Dive Notes (My Learning Journey)

> **Topic:** React `useRef`
>
> **Goal:** Understand what `useRef` is, why it exists, how it behaves differently from state, and how it is used in real production-level scenarios.

---

## 1️⃣ What is `useRef`?

`useRef` is a React hook that returns an object with a single property:

```js
{
  current: initialValue;
}
```

- The value inside `ref.current` **persists across renders**
- Updating `ref.current` **does NOT cause a re-render**
- It is mainly used for:

  - Accessing DOM elements
  - Storing mutable values
  - Persist across re-render

---

## 2️⃣ First Use Case – Focusing an Input using `useRef`

### What I did:

- Created an input field
- Attached a `ref` to it
- Focused the input on button click

### What I learned:

- `useRef` gives direct access to the DOM element
- This is similar to `document.querySelector`, but in **React way**
- No state, no re-render required

👉 **Key learning:**

> `useRef` is the correct way to interact with DOM elements in React

---

## 3️⃣ Controlled Input vs Uncontrolled Input (Major Insight)

### Controlled Input:

```jsx
<input value={state} onChange={...} />
```

- Value stored in React state
- Component re-renders on every keystroke

### Uncontrolled Input using `useRef`:

```jsx
<input ref={inputRef} />
```

- Value stored in the DOM
- No re-render on typing

### What I realized:

- Using `useRef`, I can read input value **without causing re-render**
- But this makes the input **uncontrolled**

👉 **Important tradeoff:**

> Performance vs Control

---

## 4️⃣ DOM Manipulation using `useRef`

### What I built:

- A `div` element
- A button to change its:

  - Background color
  - Shape

### What I learned:

- `useRef` can directly mutate DOM properties
- This feels similar to:

  - `getElementById`
  - `querySelector`

But:

> This is the **React-safe way** to do DOM manipulation

---

## 5️⃣ useRef vs Normal Variable (Very Important Concept)

### Experiment:

- Created a counter using state
- Wanted to track how many times the component re-rendered
- Used `useEffect` to detect re-renders

### Observation:

- Normal variable resets on every render ❌
- `useRef` value persists across renders ✅

### Conclusion:

> `useRef` keeps data alive between renders without triggering a render itself

---

## 6️⃣ Counting Re-renders using `useRef`

### What I did:

- Used `useEffect` without dependency array
- Incremented a `useRef` counter inside it
- Used `useRef` to detect re-renders

```js
const countRerender = useRef(0);
```

- Inside `useEffect` did this

```js
countRerender.current += 1;
```

- Displayed the count on UI

### What I learned:

- `useRef` is perfect for tracking render counts
- State is not suitable for this because it would cause infinite re-renders

👉 **Key difference:**

| useState         | useRef       |
| ---------------- | ------------ |
| Causes re-render | No re-render |
| UI-driven        | Logic-driven |

---

## 7️⃣ Stopwatch / Timer using `useRef`

### What I built:

- A stopwatch using `setInterval`
- Stored interval ID inside `useRef`

### Why `useRef` here?

- Interval ID should persist across renders
- Updating interval ID should not cause re-render

### Two Major Learnings:

#### 🔴 1. Stale Closure Problem

- `setInterval` captures old state values
- Using normal state updates leads to frozen values

#### ✅ Solution:

- Use functional state updates
- Use `useRef` to store interval ID

#### 🔴 2. Proper use of `useRef`

> Store things that **do not affect UI but are required by logic**

---

## 8️⃣ When to use `useRef` (Production Rules)

### ✅ Use `useRef` when:

- You need DOM access (focus, scroll, media control)
- You need to store mutable values
- You want to avoid re-renders
- You need to persist values across renders
- You are handling intervals, timeouts, observers

### ❌ Avoid `useRef` when:

- Value directly affects UI
- You want React to re-render automatically

---

## 9️⃣ Final Mental Model (Locked 🔒)

- **State → UI control & re-render**
- **Ref → Logic, persistence & DOM access**


---

## 🔥 Final Takeaway

`useRef` is NOT a replacement for state.
It is a **complement** to state.

Understanding when to use `useRef` vs `useState` is a **production-level React skill**.

---

✅ **Status:** useRef concept CLEAR
✅ **Next Steps:** Form Validation 
