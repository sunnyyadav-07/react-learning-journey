# 📘 React Learning — Day 24

#  Learning Zustand + Mini Project (Notes)

##  Introduction
In this learning session, I studied **Zustand** for global state management in React and applied it to a **mini project**.  
The goal was to understand how global state works, how multiple components can share data, and why `Zustand` is `preferred` over the `Context API` for `scalable` applications.

---

##  What I Learned First (Zustand Basics)

###  What is Zustand?
Zustand is a **lightweight state management library for React** that allows you to store global state outside components and access it from anywhere in the app.

It helps to:
- Avoid props drilling
- Remove the need for wrapping the app in Providers
- Improve performance using **selectors**
- Keep state logic simple and scalable

---

## ⚙️ How Zustand Works (Concept Flow)

Component
↓
useStore(selector)
↓
Zustand Store
↓
set() updates state
↓
Only subscribed components re-render


### Key Concepts
- **Store** → Holds global state and actions
- **Selectors** → Components subscribe to only the part of the state they need
- **Actions** → Functions that update state using `set()`

---

##  Mini Task Description
After learning the basics of Zustand, I built a **Mini Global State Project**.

### Features
- Global **Counter**
- Global **Theme Toggle (Light / Dark)**
- Two components (**Header** and **Counter**) sharing the same state
- No props drilling
- Optimized re-renders using selectors

---

##  Global Store Structure

### `useGlobalStore.js`
```js
import { create } from "zustand";

const useGlobalStore = create((set) => ({
  count: 0,
  theme: "light",

  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  decrement: () =>
    set((state) => ({
      count: Math.max(0, state.count - 1),
    })),

  reset: () =>
    set(() => ({
      count: 0,
    })),

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));

export default useGlobalStore;
```
## Using Selectors in Components

**Instead of accessing the full store:**
```js
const store = useGlobalStore();
```
**I used selectors:**
```js
const count = useGlobalStore((state) => state.count);
```
## Why This is Important
- Only the components that use count will re-render when count changes
- Better performance
- Makes the app scalable for larger projects

## Component Architecture
**Header Component**

* Displays:
- Current count
- Current theme

* Action:
- toggleTheme()

**Counter Component**
* Displays:
- Current count

* Actions:
- increment()
- decrement()
- reset()

Both components stay in sync automatically because they read data from the same global store.

### Problems with Context API

- All consuming components re-render when state changes
- Requires Provider setup and wrapping the component tree
- Becomes hard to manage in large application

**Advantages of Zustand**

| Feature     | Zustand                  | Context API         |
| ----------- | ------------------------ | ------------------- |
| Setup       | Simple                   | Boilerplate         |
| Performance | Optimized with selectors | Full tree re-render |
| Providers   | Not needed               | Required            |
| Middleware  | Persist, Devtools        | Manual              |
| Scalability | High                     | Medium              |

### Final Takeaway

*From this mini project, I learned:*
How to create and manage a global store using Zustand
How to share state between multiple components without props drilling
How to optimize performance using selectors
How to structure state and actions in a clean and scalable way