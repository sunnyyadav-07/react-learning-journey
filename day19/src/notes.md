# 📘 React Learning — Day 19

# 📒 React + Axios CRUD Learning Notes

##  Project Overview
This project focuses on learning how to connect a React frontend with a backend (Mock API) using **Axios** and implement full **CRUD functionality**:
- Create users
- Read users
- Update users
- Delete users

The main goal was to understand the **complete data flow** between:
> React UI → Axios → API → Backend → Response → React State → UI

---

##  Tech Stack
- React (useState, useEffect)
- Axios (Custom Instance)
- Mock API
- CSS / Tailwind (UI)

---

##  Folder Structure
src/
├─ App.jsx
├─ axiosInstance.js


---

##  Axios Instance (Why & How)

###  Problem
If we write the same configuration in every API call:
- Base URL
- Headers
- Timeout
It becomes repetitive and hard to maintain.

### ✅ Solution
Create a **custom Axios instance** with pre-configured settings and reuse it everywhere.

###  Code
```js
import axios from "axios";

const api = axios.create({
  baseURL: "https://mockapi.io/api",
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
```
###  Benefits

- Cleaner API calls
- Centralized configuration
- Industry-standard pattern
- Easy to add tokens or interceptors later

## State Design
**Form State**
```js
const [userDetails, setUserDetails] = useState({
  name: "",
  age: ""
});
```
**Why?**
* Makes inputs controlled
* Stores form data inside React
* Same state is reused for both `POST` and `PUT`

**Users State**
```js
const [users, setUsers] = useState([]);
```
**Why?**
* Stores API response
* Used to render the UI using .map()

## Input Handling Logic
```js
function handleChange(e) {
  const { name, value } = e.target;
  setUserDetails({ ...userDetails, [name]: value });
}
```
## Concept

* `name` attribute tells which field changed
* Spread operator keeps old values
* Only the changed field is updated

 **Benefit**
One function can handle multiple inputs.

### GET — Fetch Users (READ)
```js
async function getData() {
  const res = await api.get("/users");
  setUsers(res.data);
}
```
## Why use useEffect?
```js
useEffect(() => {
  getData();
}, []);
```
- So the API is called automatically when the component mounts.

## POST — Add User (CREATE)
```js
async function postData() {
  await api.post("/users", userDetails);
  setUserDetails({ name: "", age: "" });
  getData();
}
```

**Flow**
- User fills the form
- Data is sent to backend using POST
- Form is reset
- Users list is refreshed

`Why re-fetch?`
To keep the UI in sync with the backend data.

## PUT — Edit User (UPDATE)
```js
async function editData() {
  await api.put(`/users/${userDetails.id}`, userDetails);
  setUserDetails({ name: "", age: "" });
  getData();
}
```
*Concept*
- Backend needs the `id` to know which user to update
- Form state is reused as update payload

## DELETE — Remove User
```js
async function handleDelete(id) {
  await api.delete(`/users/${id}`);
  getData();
}
```
# Logic
Button sends user `id`
Backend deletes that user
UI refreshes with latest data

## Edit Mode Logic
```js
{userDetails.editMode ? (
  <button onClick={editData}>Save Changes</button>
) : (
  <button onClick={postData}>Post Data</button>
)}
```
*Why?*
- The same form is reused for:
- Creating a new user
- Editing an existing user

## Edit Button Logic
```js
setUserDetails({ ...user, editMode: true });
```
Loads selected user data into the form and switches the mode.

### Full Data Flow
Form Input
   ↓
React State
   ↓
Axios Request
   ↓
Mock API / Backend
   ↓
Response
   ↓
Users State
   ↓
UI Render

### Axios vs Fetch (Learning Note)

- Axios was chosen because:
- Automatically parses JSON
- Cleaner syntax
- Supports interceptors
- Supports global configuration
- Industry standard

### What I Learned

- How frontend connects with backend
- Real-world CRUD flow
- How to structure API calls using Axios
- How to sync UI state with backend data