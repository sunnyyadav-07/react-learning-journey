# 📘 React Learning — Day 02
### _JSX, Components, Props & Babel — Detailed Notes_

---

## 1️⃣ JSX — What & Why?

**Definition:**  
JSX (JavaScript XML) is a JavaScript syntax extension that allows writing UI markup inside JavaScript. It makes components more readable and structured.

**Key Points**
- Looks like HTML but is not HTML
- Browsers cannot execute JSX directly
- JSX must be compiled into JavaScript before running
- Clean, developer-friendly syntax for UI

**Example**
---jsx--
const element = <h1>Hello, React!</h1>;


---

## 2️⃣ Babel — How It Works?
**Definition:**
Babel is a JavaScript compiler that converts JSX and modern ES6+ JavaScript into browser-compatible JavaScript.
--Babel converts it to--
const heading = React.createElement("h1", null, "Welcome to JSX");


---Why Babel?
-> Browsers can't understand JSX
-> Allows React features to run in older browsers

--Process Flow
JSX / ES6 Code  ---->  Babel ---->  Browser-friendly JavaScript

---

## 3️⃣ Components
**Definition:**
Components are reusable UI building blocks. A React app is a collection of components combined together.

---Benefits---
-> Reusable
-> Maintainable
-> Easier to scale and organize UI

**Example:**  Functional Component 

function Header() {
  return <h2>This is a Header Component</h2>;
}

---

## 4️⃣ Props (Properties)
**Definition:**
Props are used to pass data from a parent component to a child component.

---Key Notes---
-> Props are read-only (immutable inside child)
-> Enable dynamic UI
-> Make components reusable with different values

**Example:**

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

<Greeting name="Sunny" />