# 📘 React Learning — Day 18

> Task: Multi Step Form (React Hook Form + Zod + Controller + Toaster)

## 📌 Project Overview

Today I built a **modern multi-step form** using:

* **React Hook Form (RHF)** for form state management
* **Controller** for custom and UI-based inputs
* **Zod** for schema-based validation
* **react-hot-toast** for user feedback (success, loading toasts)

---

##  Why I Built This

The goal was to:

* Learn how **Controller works with custom components**
* Implement **schema validation using Zod**
* Practice **step-wise validation and UX feedback**
* Build a **production-style form architecture**

---

##  Folder Structure

```
src/
 ├─ components/
 │   ├─ MultiStepForm.jsx
 │   ├─ Step1.jsx
 │   ├─ Step2.jsx
 │   ├─ Step3.jsx
 │
 ├─ ui/
 │   ├─ TextInput.jsx
 │   ├─ CheckboxGroup.jsx
 │   └─ DatePicker.jsx
 │
 ├─ validation/
 │   └─ formSchema.js
 │
 └─ App.jsx
```

---

##  Core Concepts Learned

### 1️⃣ React Hook Form

RHF manages form state **without forcing re-render on every keystroke** (uncontrolled by default).

Main hooks used:

* `useForm()` → creates form instance
* `handleSubmit()` → handles form submission
* `control` → required for Controller
* `trigger()` → manually runs validation
* `getValues()` → gets form data for preview step

---

## 2️⃣ Why Controller is Needed

### Problem:

Custom inputs or UI library components:

* Don’t expose `ref`
* Don’t behave like native inputs

So `register()` **cannot track them properly**.

### Solution:

`Controller` acts as a **bridge** between:

* React Hook Form
* Custom controlled component

It gives us:

* `value`
* `onChange`
* `onBlur`
etc.

Which we manually pass into the custom component.

---

##  How Controller Works (Flow)

```
User types → Custom Input
        ↓
onChange()
        ↓
Controller
        ↓
React Hook Form State
        ↓
Validation (Zod / Rules)
        ↓
Errors / UI Update
```

---

##  Example – Step1 Controller Usage

```jsx
<Controller
  name="name"
  control={control}
  rules={{ required: "Name required" }}
  render={({ field, fieldState }) => (
    <>
      <TextInput
        {...field}
        label="Name"
        placeholder="Enter name"
        type="text"
      />
      {fieldState.error && <p>{fieldState.error.message}</p>}
    </>
  )}
/>
```

### What Happens Here

* `field.value` → current form value
* `field.onChange` → updates RHF state
* `fieldState.error` → shows validation error

---

## 3️⃣ Custom Input Component

```jsx
const TextInput = ({ label, value, onChange, type, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
```

### Why This Works

Controller supplies:

* `value`
* `onChange`

So RHF fully controls this custom input.

---

## 4️⃣ Zod Validation

### Why Zod

* Central validation logic
* Clean error messages

### Schema Example

```js
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1,'Email is required').email(),
  skills: z.array(z.string()).min(1, "Select at least one skill"),
  date: z.string().min(1, "Date is required")
});
```
---

## 5️⃣ Step-wise Validation (Important)

By default, RHF only validates on submit.

So for multi-step form:
We manually validate before going next:

```js
const isValid = await trigger(["name", "email"]);

if (isValid) {
  nextStep();
} else {
  toast.error("Fix errors before continuing");
}
```

---

## 6️⃣ Final Review Step

We show user data before submit:

```js
const data = getValues();
```

This simulates:

> "Confirm your information before submitting"

---

##  Toaster Integration

### Install

```bash
npm install react-hot-toast
```

### Mount in App

```jsx
import { Toaster } from "react-hot-toast";

<Toaster  />
```

### Usage

```js
toast.success("Your data added to database successfully!");
toast.loading("Submitting...");
```

---

## 7️⃣ Controlled vs Uncontrolled

| Type         | Behavior                                      |
| ------------ | --------------------------------------------- |
| Uncontrolled | RHF reads value from DOM (register)           |
| Controlled   | RHF manages value in React state (Controller) |

### When to Use Controller

* UI Libraries (MUI, AntD, Chakra)
* Custom Inputs
* Date Pickers
* File Uploads
* Checkbox Groups

---

##  Production Best Practices

* Use **Zod schema** instead of inline rules
* Use **Controller only for complex inputs**
* Use **trigger() for step validation**
* Show **toast feedback** for better UX
* Add **final review step**
* Keep form schema in separate folder

---

## ✅ What I Achieved Today

✔ Built a modern multi-step form
✔ Learned Controller deeply
✔ Used Zod for schema validation
✔ Implemented step-based validation
✔ Integrated toaster notifications
✔ Used custom reusable input components

---

## 🏁 Summary

This project helped me understand how **React Hook Form, Controller, Zod, and UI components work together in real production apps**.

**I now know:**

* How form state flows
* How validation is triggered
* How custom inputs connect to RHF
* How UX feedback improves usability

---

