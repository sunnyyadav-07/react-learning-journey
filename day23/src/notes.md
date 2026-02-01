# 📘 React Learning — Day 23

# React Context API

## Problem (Why Context API?)

I built a **Counter App** with 3 components:
- `Header`
- `Main`
- `Counter`

I wanted:
- To show the `count` value in the **Counter component**
- And also display the same `count` in the **Header component**

### Without Context (Props Drilling Problem)

If I don’t use Context API, the data flow looks like this:
├── Header ← count, setCount (props)
└── Main
└── Counter ← count, setCount (props)


This means:
- `count` and `setCount` are created in `App`
- Then passed to `Header`
- Then passed to `Main`
- And finally passed to `Counter`

This is called **Props Drilling**.  
When the app grows, this:
- Makes the code messy
- Harder to maintain
- Forces you to pass unnecessary props through components

---

## Why Context API is Used

Context API is used to **share data globally across components without passing props manually at every level**.

### Main Reasons

- **Avoid Props Drilling**  
  You don’t need to pass the same props through multiple intermediate components.

- **Centralized State**  
  The state is stored in one place and can be accessed by any component that needs it.

- **Better Code Readability**  
  Components stay clean and focused on UI instead of handling data passing.

- **Scalability**  
  As the app grows, managing shared state becomes easier.

- **Reusability**  
  The same context can be reused in different parts of the app.

---

## Solution (Using Context API)

With Context API, I:
- Made `count` and `setCount` **globally available**
- Any component can access them directly
- No need to pass props through intermediate components

### New Flow
Context Provider
├── Header ← directly uses count
└── Main
└── Counter ← directly uses count & setCount

---

## Context Code (Global State Setup)

```js
import { createContext, useContext, useState } from "react";

const counterContext = createContext();

function ContextProvider({ children }) {
  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount,
  };

  return (
    <counterContext.Provider value={value}>
      {children}
    </counterContext.Provider>
  );
}

function useCounterContext() {
  return useContext(counterContext);
}

export { useCounterContext, ContextProvider };
```

## How It Works (Step by Step)
1. Create Context
```js
const counterContext = createContext();
```
This creates a global store for sharing data across components.

2. Create Provide
```js
function ContextProvider({ children }) {
```
This component wraps the app and provides count and setCount to all child components.

3. Store State
```js
const [count, setCount] = useState(0);
```
This is the actual global state

4. Pass Value
```js
<counterContext.Provider value={{ count, setCount }}>
```
This defines what data is available to all components.

5. Custom Hook
```js
function useCounterContext() {
  return useContext(counterContext);
}
```
This makes consuming the context clean and simple:
```js
const { count, setCount } = useCounterContext();
```
Wrap App with Provider

## Key Learnings

- Context API = Global State Management Tool
- Avoids Props Drilling
- Makes the code:
* Cleaner
* More scalable
* Easier to maintain

## When to Use Context API

**Use it when:**
- The same data is needed in multiple unrelated components
- Global state (like theme, user info, auth, counters, language) is required

**Avoid it when:**
- State is only shared between a parent **and its direct child**
- Frequent updates may cause unnecessary re-renders (consider Redux/Zustand for large-scale apps)