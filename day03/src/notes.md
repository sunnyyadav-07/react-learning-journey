# 📘 React Learning — Day 03

--Today's learning
-> What is vite ?
-> Why we use it ?
-> Installation.
-> It's folder structure.
-> Run and build command.

## 1️⃣ What is vite ?
Vite is a **modern frontend build tool** used to develop applications with frameworks like **React, Vue, and Vanilla JavaScript**.  
Its main goal is to provide a **fast development server** and an **optimized production build**.

## 2️⃣ Why we use it ?
we use vite because it helps to bulid application that can we use in production, vite gives optimized while of our projects.

-- Command to build the production ready app --
**vite run build**

## 3️⃣ Installation

Run `npm create vite@latest` command in terminal then give the `project-name` after that choose the `framework` and then the `programming-language` then go to that project using `cd project-name` and then give the command `npm i` and in the last use `npm run dev` to run your app.

## 4️⃣ Folder structure
# Vite + React Folder Structure Explained

This document explains the **folder structure of a React project created using Vite** and the **purpose of each file and directory**.

---

## 📁 Root Folder Structure

```txt
react-vite-app/
│
├── node_modules/
├── public/
├── src/
├── index.html
├── package.json
├── vite.config.js
└── README.md

📦 node_modules/
-> Contains all project dependencies
-> Installed when running npm install
-> Managed automatically by npm
-> Should not be edited manually
-> Usually ignored in Git using .gitignore

📁 public/
-> Stores static assets
-> Files here are served directly without processing
-> Used for:Images,Icons,Favicon
Example:
public/
 └── vite.svg

 
📁 src/
This is the main source folder where the React application is written.
src/
├── assets/
├── App.jsx
├── main.jsx
└── index.css

🔹 src/assets/
-> Stores images, fonts, and other assets
-> These assets are processed by Vite during build

🔹 App.jsx
-> Main React component
-> Contains the core UI logic
-> Other components are usually imported here

🔹 main.jsx
-> Entry point of the React application
-> Renders the <App /> component into the DOM
-> Connects React with index.html

Example:
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

🔹 index.css
-> Global CSS file
-> Styles applied to the entire application

📄 index.html
-> Root HTML file of the application
-> Acts as the main entry point
-> Contains the root <div> where React renders the app

Example: <div id="root"></div>

📄 package.json
Contains project metadata

Defines:

-> Project name
-> Scripts (dev, build, preview)
-> Dependencies and devDependencies

⚙️ vite.config.js
Configuration file for Vite
Used to:

-> Add plugins
-> Configure build settings
-> Set aliases and server options

Example: 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})


