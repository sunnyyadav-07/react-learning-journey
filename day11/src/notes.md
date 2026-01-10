# 📘 React Learning — Day 11
# Form Handling in React (**Part-4**)

> **Day Focus:** file (**Production level**)

# 📁 React File Handling – Notes

## Overview
In this phase, I started from handling a single file and gradually moved to multiple file uploads. Along the way, I understood important real-world concepts like why file inputs cannot be controlled and how `useRef` is used in production to manage file inputs.

---

## 1️⃣ Handling Single File Upload

### What I did
- Created a basic file input
- Accessed the selected file using `e.target.files[0]`
- Stored the file in React state

### Key Learning
- `e.target.files` returns a **FileList**, not a normal array
- Even for a single file, data comes inside `files[0]`

### Example
```js
function handleFileChange(e) {
  const file = e.target.files[0];
  setFile(file);
}
```

## 2️⃣ Handling Multiple File Uploads

### What I did
- Added the `multiple` attribute to allow selecting more than one file
- Converted `FileList` into an array using `Array.from()`
- Stored files in an array state

### Why conversion is needed
- `FileList` is an array-like object
- It has `length` and indexes but no array methods like `.map()`
**Example:**
```js
function handleFileChange(e) {
  const selectedFiles = Array.from(e.target.files);
  setFiles(selectedFiles);
}
```

## 3️⃣ Accumulating Files (Production Pattern)
**Problem:**
- Selecting files again replaces the old selection

**Solution:**
- Append new files to previous state

**Example:**
```js
setFiles(prev => [...prev, ...selectedFiles]);
```
- This allows users to add files in multiple selections.

## 4️⃣ Understanding multiple Attribute
**Important Rule**
- Without `multiple`, only one file per selection is allowed
- With `multiple`, users can select multiple files using CTRL / CMD
Even without `multiple`, files can appear multiple if we accumulate them across multiple selections in state.

## 5️⃣ File Input is NOT Controlled
**Important Discovery**
- File inputs cannot be controlled like text inputs
- Setting `value` manually is not allowed for security reasons
 This does NOT work:
<input type="file" value={file} />

## 6️⃣ Using useRef with File Input
**Why useRef is needed**
- To reset the file input
- To allow selecting the same file again

**Example:**
```js
const fileRef = useRef(null);
fileRef.current.value = "";
```
- This clears the file input without making it controlled.

## 7️⃣ Best Practices Learned
- Always convert FileList to an array
- Never try to control file input using state
- Use useRef to reset file input value
- Append files instead of replacing for better UX
- Validate file size and type before upload

## 🧠 Final Understanding
File handling in React is different from other form inputs. It requires understanding browser security rules, uncontrolled inputs, and proper state management. Using useRef and treating file inputs as uncontrolled is the correct production-level approach