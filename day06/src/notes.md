# 📘 React Learning — Day 07

## React TODO App - Project Notes

📌 **Project Overview:**
I built a TODO app using React basics only, without using any external state management library or Context API.

**Implemented Features:**
- Add Task
- Edit Task
- Delete Task
- Mark Task as Completed
- Display Total Tasks & Completed Tasks Count
- Dynamic Progress Bar showing completion percentage

This project helped me strengthen my understanding of `React fundamentals`, `components`, `props`, `useState`, `useEffect`, and `state-driven UI` updates.

## Features Implementation Experience

### 1. Adding a Task
- Created an input field and button to allow users to add tasks.
- Used the useState hook to manage the task and todos array.
- Ensured that empty tasks cannot be added.
*Learning*: Understanding state updates and handling user input.

### 2. Editing a Task
- Populating the input field with the selected task for editing was a challenge.
- Used task.id to update the input whenever the editTodo state changes.
- Experience gained: React state syncing and lifecycle behavior.

### 3. Deleting a Task
- Implemented deletion using filter to remove the selected task from the todos array.
- **Key takeaway**: Maintaining immutability of state rather than directly modifying arrays.

### 4. Marking Task as Completed
- Added functionality to toggle the completed property of a task.
- Used conditional rendering and inline styling (line-through) for completed tasks.
- *Learning*: Dynamic UI updates based on state.

### 5. Total Tasks & Completed Tasks Count
- Calculated total tasks using todos.length and completed tasks using todos.filter(task => task. completed).length.
- *Learning*: Derived data from state and updating the UI dynamically.

### 6. Progress Bar
- Created a dynamic progress bar to show tasks completion percentage.
- Calculated percentage using (completed / total) * 100 and updated style.width dynamically.
- *Learning*: React-driven UI updates and inline styles.

### 7. LocalStorage Integration
- All tasks (added, edited, deleted, completed) persist automatically in localStorage by useEffect
- On page reload, todos are loaded from localStorage.
*Learning*: Combining React state with browser storage for persistent data. 
## Challenges Faced

1. Props Drilling:
- Passing functions down multiple components without Context API was cumbersome.
- This helped me understand data flow in React.

2. Progress Bar Calculation:
- Handling division by zero and updating percentage correctly required careful handling.

3. State Immutability:
- Using map and filter instead of mutating arrays helped avoid unexpected bugs.

4. LocalStorage Sync:
- Ensuring that all actions (add, edit, delete, complete) immediately reflected in localStorage required careful `useEffect` setup.

## Key Learnings
- Deepened understanding of useState and useEffect.
- Gained practical experience with props drilling and component hierarchy.
- Practiced conditional rendering and dynamic styling.
- Learned how state drives UI updates in React.
- Realized how a small project integrates multiple React concepts and best practices.

## Future Improvements
 Implement Context API or Redux for cleaner state management.
 Add task filters (All / Completed / Pending).
 Enhance UI/UX with themes, animations, and better styling.

✅ **Conclusion**:
This project solidified my understanding of React fundamentals, state-driven UI, and persistent data handling using localStorage, preparing me for more advanced React concepts and projects.