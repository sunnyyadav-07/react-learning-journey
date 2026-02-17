# 📘 React Learning — Day 36

#  React Optimization Notes — useMemo & useCallback 

## 🔥 Why Optimization is Needed in React?

When a parent component re-renders in React, all of its child components also re-render by default.

But every re-render is not necessary.

Unnecessary re-renders = slower performance.

So React provides some optimization tools:

* React.memo
* useMemo
* useCallback

Today focus: **useMemo & useCallback**

---

#  useMemo — Memoized VALUE

##  Definition

useMemo is a React hook that **caches (remembers) the result of an expensive calculation**.

If dependency does not change → calculation will not run again.

## 🧪 Example ( Code)

```js
function expensiveCalculation() {
  for (let i = 1; i <= 2000000000; i++) {}
}

const expensiveCalculationResult = useMemo(() => {
  expensiveCalculation();
  return 2;
}, []);
```

## 🔍 Explanation

* expensiveCalculation is a heavy loop (slow)
* Without useMemo → runs on every render
* With useMemo → runs only once
* dependency [] = only first render

##  Real Meaning

useMemo says:

> "Calculate once and remember it until dependency changes"

##  Syntax

```js
const value = useMemo(() => {
  return heavyCalculation();
}, [dependency]);
```

##  When to use useMemo?

Use useMemo when:

* Heavy calculation
* Filtering large data
* Sorting large arrays
* Transforming API data

❌ Do NOT use everywhere
Only when performance issue exists.

---

#  useCallback — Memoized FUNCTION

##  Definition

useCallback is a hook that **caches a function reference**.

Problem in React:
Every render creates a new function.

That new function causes child component to re-render.

##   Example

```js
const handleClick = useCallback(() => {
  console.log("a function");
}, []);
```

## 🔍 Explanation

Normal function:

```js
const handleClick = () => {};
```

Parent re-render → new function created
Child receives new prop → child re-renders

With useCallback:

* Same function stored in memory
* Same reference
* Child will not re-render unnecessarily

##  Syntax

```js
const memoFunction = useCallback(() => {
  // logic
}, [dependency]);
```

---

#  React.memo + useCallback Combination

Child component:

```js
const Child = ({ handleClick }) => {
  handleClick();
  console.log("child rendering");
  return <h1>Child</h1>;
};

export default memo(Child);
```

##  Flow Understanding

1. Parent renders
2. count changes
3. Parent re-renders
4. Without useCallback → child re-renders
5. With useCallback + memo → child does NOT re-render

Because function reference is same.

---

#  useMemo vs useCallback

| Hook        | Stores   | Use Case                |
| ----------- | -------- | ----------------------- |
| useMemo     | Value    | Heavy calculation       |
| useCallback | Function | Prevent child re-render |

---

#  Golden Rules (Interview + Real Life)

## ✅ Use useMemo when:

* Heavy calculations exist
* Large list filtering/sorting
* Performance becomes slow

## ✅ Use useCallback when:

* Function passed to child
* Child is memoized
* Unnecessary re-render happening

## ❌ Avoid Overuse

Using useMemo/useCallback everywhere = over-optimization

React is already fast.
Optimize only when needed.

---

#  Final Summary

React optimization = controlling re-renders

* React.memo → memoize component
* useMemo → memoize value
* useCallback → memoize function

All three together = high performance React app

---

