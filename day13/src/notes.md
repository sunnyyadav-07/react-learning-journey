# 📘 React Learning — Day 13 

> Today's progress: Created form UI and made single state and handler to handle the form

# 📘 React Form Handling(**Project**) – Smart Registration Form (Notes)

## 🎯 Project Overview
**Project Name:** Smart Registration Form  
**Goal:** Master real-world form handling in React using:
- Controlled inputs
- Single state object
- Clean handlers
- Submit-only validation
- Scalable architecture (component-based)

This project is intentionally built **without form libraries** to deeply understand core React form logic.

---

## 🧩 Form UI Structure
The form contains the following inputs:

- Text → Name  
- Email  
- Password  
- Confirm Password  
- Radio → Gender  
- Checkbox → Skills (multiple selection)  
- Select → Country  
- File → Profile Picture  
- Buttons → Submit, Reset  

UI is built using **JSX + Tailwind CSS**, focusing on:
- Clean layout
- Proper labels
- Accessibility
- Reusability

> At this stage, UI is static (no validation feedback yet).

---

## 🧠 State Management Strategy

### ✅ Single State Object (Industry Standard)
All form values are stored in **one object**.

```js
const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "",
  skills: {},
  country: "",
  profile: null
});
