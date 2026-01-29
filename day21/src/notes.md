# 📘 React Learning — Day 21

# React Router Basics — Notes (createBrowserRouter)

This file documents what I built today: **Home, Users, Login, UserDetails pages**, a **Root Layout**, **nested routes**, **Outlet usage**, and **dynamic routing with params** using the **modern `createBrowserRouter` API**.

---

## 1. Goal of Today’s Work

Build a **multi-page React app (SPA)** with:

* Home page
* Users list page
* User details page (dynamic route)
* Login page
* Root layout (Navbar + Outlet)

The app should:

* Change URLs without reloading the page
* Load different components based on the route
* Use route params for dynamic user pages

---

## 2. Mental Model

```
Browser URL
   ↓
Router (createBrowserRouter)
   ↓
Root Layout (Navbar / Common UI)
   ↓
Outlet (renders child page)
   ↓
Page Component (Home / Users / Login / UserDetails)
```

---

## 3. Folder Structure

```
src/
  main.jsx
  router.jsx
  layouts/
    RootLayout.jsx
  pages/
    Home.jsx
    Users.jsx
    UserDetails.jsx
    Login.jsx
```

---

## 4. Router Setup (Map of the App)

The router defines:

* Which URL loads which component
* Which routes are nested
* Which routes are dynamic

### `router.jsx`

```js
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "users",
        element: <Users />
      },
      {
        path: "users/:id",
        element: <UserDetails />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
]);

export default router;
```

---

## 5. Attach Router to React App

### `main.jsx`

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```

This makes routing work across the entire app.

---

## 6. Root Layout (Common UI for All Pages)

The Root Layout contains UI that should appear on every page:

* Navbar

### `RootLayout.jsx`

```js
import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/users">Users</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>


      <Outlet />
    </>
  );
}
```

### What is `Outlet`?

`Outlet` is a **placeholder**.

> It tells React Router: "Render the active child route here."

---

## 7. Home Page

### `Home.jsx`

```js
export default function Home() {
  return <h2>Home Page</h2>;
}
```

---

## 8. Users Page (List + Dynamic Links)

This page:

* Shows a list of users
* Clicking a user navigates to `/users/:id`

### `Users.jsx`

```js
import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Sunny" },
  { id: 2, name: "Aman" },
  { id: 3, name: "Rohit" }
];

export default function Users() {
  return (
    <>
      <h2>Users Page</h2>
      {users.map(user => (
        <p key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </p>
      ))}
    </>
  );
}
```

---

## 9. Dynamic Route (User Details)

This page reads the `id` from the URL.

URL Example:

```
/users/2
```

### `UserDetails.jsx`

```js
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams();

  return (
    <>
      <h2>User Details Page</h2>
      <p>User ID: {id}</p>
    </>
  );
}
```

### What is `useParams()`?

`useParams()` reads **dynamic values from the URL**.

If route is:

```
/users/:id
```

Then:

```
const { id } = useParams();
```

Gives the actual value from the browser URL.

---

## 10. Login Page

### `Login.jsx`

```js
export default function Login() {
  return <h2>Login Page</h2>;
}
```

---

## 11. How Navigation Works

### Correct Way (SPA Navigation)

```js
import { Link } from "react-router-dom";

<Link to="/users">Users</Link>
```

### Why Not `<a>` Tag?

`<a>` reloads the whole page.

`Link` changes the URL **without reloading** → fast UI.

---

## 12. Route Types Used

| Route Type | Example      | Purpose             |
| ---------- | ------------ | ------------------- |
| Static     | `/login`     | Fixed page          |
| Nested     | Inside `/`   | Layout system       |
| Dynamic    | `/users/:id` | User-specific pages |
| Index      | `/`          | Default child route |

---

## 13. Full Flow (Real App Behavior)

```
User clicks link
 → URL changes
 → Router finds matching route
 → RootLayout loads
 → Outlet renders page
 → Page reads params if needed
```

---

## 14. Key Concepts Learned

* `createBrowserRouter` = App route map
* `RouterProvider` = Connect router to React
* `RootLayout` = Common UI wrapper
* `Outlet` = Child route placeholder
* `Link` = SPA navigation
* `useParams` = Read dynamic URL values

---

## End of Notes

This setup represents a **modern React Router architecture** using nested routes and dynamic parameters, suitable for real-world applications.
