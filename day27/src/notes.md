# 📘 React Learning — Day 27-28

#  Expense Tracker Project (React + Zustand)

> **Purpose:** This project is built to understand real-world React concepts like global state management, form handling, validation, derived state, and UI flow. It is created purely for **learning and practice purposes**.

---

##  Tech Stack Used

* **React** (Functional Components)
* **Zustand** – global state management
* **Zustand Persist Middleware** – store data in `localStorage`
* **React Hook Form** – form handling & validation
* **Tailwind CSS** – styling

---

##  Project Features

* Add income and expense transactions
* Persist transactions using Zustand + localStorage
* Calculate:

  * Total Income
  * Total Expense
  * Current Balance
* Search transactions by date
* Remove transactions
* Modal-based form UI

---

##  Application Architecture

```
App
 ├── Navbar (Balance + Add Button)
 ├── Main
 │    ├── TotalIncome
 │    ├── TotalExpense
 │    ├── SearchTransaction
 │    └── TransactionList
 └── Form (Modal)
```

---

##  Global State (Zustand Store)

### State Variables

* `isFormOpen` → controls form modal
* `transactionList` → stores all transactions
* `transactionId` → unique id counter
* `searchedDate` → date filter

### Actions

* `setIsFormOpen(boolean)`
* `setTransactionsList(formData)`
* `removeTransactions(id)`
* `setSearchedDate(date)`
* `getTotalBalance`
* `getTotalByType(type)`

---

## 🧮 Derived State (Best Practice)

Instead of duplicating `reduce()` logic in multiple components, derived calculations are moved into the store.

### Example Selectors

```js
getTotalByType: (type) => {
  const { transactionList } = get();
  return transactionList.reduce((acc, curr) => {
    if (curr.type === type) acc += Number(curr.amount) || 0;
    return acc;
  }, 0);
},

getTotalBalance: () => {
  const { transactionList } = get();
  return transactionList.reduce((acc, curr) => {
    curr.type === "expense"
      ? (acc -= Number(curr.amount))
      : (acc += Number(curr.amount));
    return acc;
  }, 0);
},
```

### Usage in Components

```js
const totalExpense = useMyStore((state) => state.getTotalByType("expense"));
const totalIncome = useMyStore((state) => state.getTotalByType("income"));
const balance = useMyStore((state) => state.getTotalBalance());
```

✔ Follows DRY principle
✔ Clean UI components
✔ Better performance & maintainability

---

##  Form Handling (React Hook Form)

* Used `useForm()` for better performance
* Validation added for all fields

### Example Validation

```js
register("amount", {
  required: "Amount is required",
  validate: (value) =>
    !isNaN(value) && Number(value) > 0 || "Enter valid amount",
});
```

✔ Prevents invalid input
✔ Clean error handling

---

##  Search Functionality

* Date-based filtering
* Implemented using derived list

```js
searchedDate === ""
  ? transactionList
  : transactionList.filter((item) => item.date.includes(searchedDate));
```

---

## ✅ What This Project Demonstrates

* Real-world React component flow
* Zustand global store with persistence
* Handling derived state correctly
* Form validation using React Hook Form
* Clean UI + UX logic

---
