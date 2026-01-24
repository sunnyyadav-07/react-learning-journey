# 📘 React Learning — Day 17

 **React hook Form** (**Part-3**):
> Covered-> `Controller` and `custom inputs`

# React Hook Form — Controller & Custom Input Notes 

> Topic: Using `Controller` to connect Custom UI Components with React Hook Form

---

## 1. Why I Learned This

When I was using normal inputs (`<input />`, `<select />`) with `register()`, everything worked smoothly.

But when I started:

* Creating Custom UI Components (TextInput, CheckboxGroup, DatePicker)

I faced a problem:

> `register()` does not work properly when the actual input is hidden inside a custom component.

To solve this problem, React Hook Form provides **Controller**.

---

## 2. Problem With register() in Custom Components

### What register() Does

```js
<input {...register("name")} />
```

This works because:

* The input is directly in the DOM
* React Hook Form can attach `ref`, `onChange`, and `onBlur` to it

### Issue in Custom Components

```jsx
<TextInput />
```

Here, React Hook Form cannot directly access the real `<input />`
So:

* `ref` is not attached
* Validation can break
* Focus and error handling may fail

---

## 3. What is Controller

### Simple Definition

> `Controller` is a bridge
> Between React Hook Form and your Custom Input

### Visual Flow

```
React Hook Form
      ↓
  Controller
      ↓
 Custom Input
      ↓
    <input />
```

---

## 4. How Controller Works (Behind the Scenes)

When we write:

```jsx
<Controller
  name="name"
  control={control}
  render={({ field }) => (
    <TextInput {...field} />
  )}
/>
```

React Hook Form gives us an object:

```js
field = {
  name: "name",
  value: "",
  onChange: function,
  onBlur: function,
  ref: function
}
```

We pass all of these into our custom input.

---

## 5. Why We Use `{...field}`

### Spread Operator

```jsx
<TextInput {...field} />
```

This means:

```jsx
<TextInput
  name={field.name}
  value={field.value}
  onChange={field.onChange}
  onBlur={field.onBlur}
  ref={field.ref}
/>
```

### Benefits

* Input stays connected to RHF
* Validation works
* Focus handling works
* `touched` and `dirty` states are tracked

---

## 6. Why ForwardRef is Important

Custom inputs must accept `ref`.

---

## 7. Controlled vs Uncontrolled (Core Concept)

### register() → Uncontrolled

* Input manages its own state
* RHF reads value using `ref`
* Better performance

### Controller → Controlled

* RHF controls the value
* Every change updates form state
* Required for:

  * UI libraries
  * Custom components
  * Date pickers
  * File uploads

---

## 8. Why UI Libraries Need Controller

UI library components:

* Are not real HTML inputs
* Manage their own internal state

Examples:

* MUI DatePicker
* Ant Design Select

So `register()` fails, and `Controller` is required.

---

## 9. Role of onBlur

### onBlur = When user leaves the input field

RHF uses this to:

* Track `touchedFields`
* Trigger validation (when mode = `onBlur`)

### Flow

```
User types → no validation
User clicks outside → onBlur fires
RHF validates → error shows
```

---

## 10. Re-render Behavior

### register()

* Minimal re-render
* Faster

### Controller

* Re-renders on field change
* Acceptable for UI components

### Optimization Tools

* `useFormState()`
* `useWatch()`

---

## 11. My Practice Form Structure

```txt
Form
 ├─ Controller (name)
 │   └─ TextInput
 ├─ Controller (email)
 │   └─ TextInput
 ├─ Controller (skills)
 │   └─ CheckboxGroup
 └─ Controller (date)
     └─ DatePicker
```

---

## 12. When to Use What

| Case                 | Use        |
| -------------------- | ---------- |
| Normal HTML input    | register() |
| Custom input         | Controller |
| UI library component | Controller |
| File upload          | Controller |
| Date picker          | Controller |

---

## 13. Learning Outcome

After this task, I learned:

* How RHF connects with custom UI
* Difference between controlled and uncontrolled inputs
* How validation works with Controller
* How arrays and date values are handled

---

