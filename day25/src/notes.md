# 📘 React Learning — Day 25-26

# 📰 React News App — Notes 

##  Project Overview

This is a **small News App built using React** to practice:

* **React Context API** (global state management)
* **Axios** (API calls)
* **Debouncing** (search optimization)
* **Environment Variables (VITE)**
* **Reusable Components**
* **Loading Skeleton UI**

The app fetches live news from **NewsAPI** and allows users to:

* Search news by keyword
* Filter news by category
* View news cards in a responsive grid
* Open full articles in a new tab

---

##  Tech Stack

* React (Vite)
* Context API
* Axios
* Tailwind CSS + DaisyUI
* NewsAPI
* react-loading-skeleton

---

##  Folder Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Category.jsx
│   ├── News.jsx
│   ├── Wrapper.jsx
│   └── Loader.jsx
│
├── context/
│   └── NewsContext.jsx
│
├── config/
│   └── axiosInstance.js
│
├── App.jsx
└── main.jsx
```

---

##  Global State (Context API)

### File: `NewsContext.jsx`

### State Variables

* `news` → Stores all fetched articles
* `loading` → Controls loader/skeleton UI

### Function

### `fetchNews(url)`

Responsible for:

1. Setting `loading = true`
2. Making API request using Axios
3. Storing response in `news`
4. Turning `loading = false`

### Why Context API?

Instead of passing `fetchNews` and `news` as props from `App → Navbar → Category → News`,
we use **Context API** to:

* Avoid prop drilling
* Make data globally available
* Keep components clean and reusable

### Context Flow

```
NewsContextProvider
        ↓
Navbar → Category → News
        ↓
   fetchNews()
        ↓
      Axios API
```

---

##  Axios Configuration

### File: `axiosInstance.js`

### Purpose

Creates a reusable Axios instance with:

* Base URL
* Timeout

### Benefits

* Clean API calls
* Centralized config
* Easy to update API base URL

### API Setup

```
Base URL: https://newsapi.org/v2
Timeout: 4000ms
```

---

##  Environment Variable

### API Key Setup

Create a `.env` file:

```
VITE_API_KEY=your_api_key_here
```

### Usage in Code

```
import.meta.env.VITE_API_KEY
```

### Why?

* Keeps API key secure
* Avoids hardcoding sensitive data

---

##  App Component

### File: `App.jsx`

### Role

Controls layout and component order

### Structure

```
<Navbar />
<Category />
<News />
```

### Sticky UI

* Navbar stays on top
* Category bar stays below Navbar

---

##  Navbar Component

### Purpose

* Displays app title
* Provides search input
* Fetches news based on user input

### Key Feature: **Debouncing**

### Problem

If user types fast, API gets called on every keystroke →
❌ Too many requests
❌ Slower performance

### Solution

Using `setTimeout` + `useRef`

### Logic

1. User types
2. Old timeout is cleared
3. New timeout starts (1 second)
4. After delay → API is called

### Benefit

* Reduces API calls
* Better performance
* Smooth UX

### Reset Logic

If input is empty:

* Fetch default news again

---

##  Category Component

### Purpose

* Displays news categories
* Fetches news based on selected category

### Categories Used

```
business
entertainment
general
health
science
sports
technology
```

### Working

On button click:

```
fetchNews(`/everything?q=category`)
```

This updates global state and refreshes news list

---

##  News Component

### Purpose

* Displays all news articles
* Shows loader while fetching data

### Lifecycle

### On Mount

```
useEffect(() => {
  fetchNews();
}, [])
```

This loads default news when app starts

### Loading State

If `loading === true`
→ Show skeleton loaders

If `loading === false`
→ Show news cards

---

##  NewsCard Component

### Purpose

Displays:

* Image
* Title
* Publish date
* Description
* Read more button

### Features

* Lazy image loading
* Line clamp for clean UI
* Opens full article in new tab

### Safety Check

If article has no image:

```
if (!urlToImage) return null
```

This prevents broken cards

---

##  Wrapper Component

### Purpose

Provides:

* Max width layout
* Center alignment

### Benefit

Keeps UI consistent across all sections

---

##  Loader Component

### Library Used

`react-loading-skeleton`

### Purpose

Shows skeleton cards while news is loading

### Benefit

* Better UX
* Prevents blank screen
* Professional UI feel

---

##  Data Flow Summary

```
User Action
   ↓
Navbar / Category
   ↓
fetchNews()
   ↓
Axios API Call
   ↓
Context State Update
   ↓
News Component Re-renders
   ↓
NewsCards Display
```

---

##  Features Implemented

* 🔍 Search with debounce
* 📂 Category filtering
* 🌍 Global state with Context API
* ⏳ Skeleton loader
* 🧩 Reusable components
* 📱 Responsive grid layout
* 🔐 Environment variable security

---

##  Learning Outcome

By building this project, I learned:

* How **Context API replaces prop drilling**
* How to create **Axios instances**
* How **debouncing improves performance**
* How to manage **global loading state**
* How to structure a **scalable React project**
* How to use **environment variables in Vite**

---

##  API Used

**NewsAPI**

Endpoint:

```
https://newsapi.org/v2/everything
```

---

##  Future Improvements

* Add pagination / infinite scroll
* Add error UI for failed API calls
* Add dark/light theme toggle
* Add bookmark feature
* Add country-based filtering

---

##  Note

This project is built **only for learning purposes** to understand:

* Axios
* Context API
* Component structure
* API handling

Not intended for production use.

---


 Keep building, keep learning. React mastery comes from projects like this!
