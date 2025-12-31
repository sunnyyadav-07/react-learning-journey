# 📅 Day 01 — React Basics 

## -> I have made own React and ReactDom object to see the behind the scene working and also used CDN to get knowledge that how actual React work..

## 🧠 What I learned today
- What is React
- Why React is used
- How ReactDOM works and why rendering is separate
- Difference between React & ReactDOM

---

## 🧾 Answers (Short, clear explanations)

### 🟦 What is React?
React is a **JavaScript library** used to build **user interfaces (UI)** by breaking the UI into **reusable components**.  
It helps create Single Page Applications (SPA) that update dynamically without fully reloading the page.

### 🟩 Why React is used?
React is used because:
- It is **fast** (uses Virtual DOM to update UI efficiently)
- It allows **component-based** development (write once — reuse anywhere)
- It improves **code maintainability**
- It is backed by a big community + ecosystem
- Most companies use it for modern web apps

### 🟡 What is ReactDOM & How rendering works?
ReactDOM is a **separate package** that connects React to the browser's real DOM.  
React handles UI logic → ReactDOM takes that UI and **renders it into the actual HTML page**.

### 🟩 Difference between React & ReactDOM
**React's Job** : It's job is only to describe what the UI should look like. It doesn't create DOM  elements. It creates lightweight JavaScript objects that act as blueprints.

**ReactDOM's Job** : This is the renderer. It's job is to take the blueprint from React and anctually build the UI for a specific platform (in this case , a web browser's DOM). 
Example:
```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
