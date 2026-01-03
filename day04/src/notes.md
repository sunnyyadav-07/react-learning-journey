# 📘 React Learning — Day 04
## Deep dive into useState, useEffect hooks

## 📌 What is useState?
`useState` is a **React Hook** that allows functional components to store and manage **state (data)**.
It returns:
- The **current state value**
- A **function to update that state**

### Syntax:
<!-- ```js -->
const [state, setState] = useState(initialValue);

---

## ❓ Why is useState used?
In React, UI depends on data.
When data changes, the UI should automatically update.

`useState` is used because:
- Normal variables do not trigger UI updates
- State changes cause re-rendering
- It helps manage dynamic data like:
- Counters
- Form inputs
- Toggles
- API responses

---

## why we need useState hook?

**reason-1** 
If we do not use useState, we have to do lots of DOM manuplation, we can see that in this image , we had to first select `h1` and `button` and then changes its content. In this case, we are using `count` variable only at two place, if we want to use it multiple places,for this purpose we will have to first access the element then we change it's content.
![without using useState](./images/without-useState.png)

**reason-2**
`React` says that it is responsiblity of itself to interact with `DOM`,because `React` can manage `DOM interaction` better and effecient..

**reason-3**
Without `useState` if we use a component multiple times in our project, the state of each component can to be managed.

---

## ⚙️ How does useState work?

- useState initializes a state value
- React stores this value internally
- When setState is called:
  State value updates
  Component re-renders
  UI updates automatically

Example:
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
                    
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

---

## 🧠 Behind the Scenes: How useState Works Internally
React internally manages state using:
- An array
- A hook index

![bts of useState working](./images/bts-of-useState.png)

---

## ⚠️Important Rules of useState

Hooks must be called at the top level
Do not use hooks inside:
- Loops
- Conditions
- Nested functions
Never update state directly:
`count = count + 1` ❌

_Correct_:
`setCount(count + 1)` ✅

---

## 🔥 Functional Update (Best Practice)
When new state depends on previous state:

`setCount(prevCount => prevCount + 1);`


