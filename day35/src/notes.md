# 📘 React Learning — Day 35

# React.memo Notes 

##  What is React.memo?

React.memo is a Higher Order Component (HOC) in React that wraps a functional component and prevents unnecessary re-renders.

In simple words:

> If props do not change → component will NOT re-render.

By default, when a parent component re-renders, all child components also re-render. React.memo solves this performance issue.

---

## 🤔 Why is React.memo needed?

Default behavior of React:

* Parent re-renders → child also re-renders
* Even if props are same
* Can slow down performance in large apps

React.memo optimization:

* Same props → skip re-render
* Different props → allow re-render

This improves performance in large applications.

---

##  How React.memo works internally

React.memo performs shallow comparison of props.

### Shallow comparison means:

* Primitive values (number, string, boolean) → compared by value
* Objects/arrays/functions → compared by reference

Internally:
Old props === New props

If equal → no re-render
If different → re-render

---

##  Basic Syntax

```jsx
import React, { memo } from "react";

const Child = ({ count }) => {
  console.log("Child rendered");
  return <h1>{count}</h1>;
};

export default memo(Child);
```

---

##  Important: Object props problem

```jsx
<Child count={{ name: "sunny" }} />
```

A new object is created on every render.
React.memo thinks props changed.
→ Child will re-render.

Why?
Because object reference changes each render.

---

##  Custom comparison function 

You can control re-render manually.

```jsx
const EnhancedChild = memo(Child, (prevProps, nextProps) => {
  if (prevProps.count === nextProps.count) {
    return true; // skip re-render
  }
  return false; // allow re-render
});
```

Return true → skip render
Return false → re-render

---

##  When to use React.memo

Use when:

* Component is large/heavy
* Complex UI
* Rendering lists
* Same props frequently passed
* Performance issues exist

---

## ❌ When NOT to use React.memo

Avoid when:

* Component is small
* Props change frequently
* No performance issue

Because memo also has comparison cost.

---


##  Real-world rule

React.memo works best when:

* Props are stable
* useMemo/useCallback are used
* App is large and needs optimization

---

