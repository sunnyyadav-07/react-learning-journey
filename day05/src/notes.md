# 📘 React Learning — Day 05

# React Reconciliation, Diffing, Fiber & Keys

**Without using React Dom manuplation:**
if we direct work with `DOM` the reflow and repaint cost very much because we interact with dom to manuplate it.
**Example:** I created a counter app without React to see the difference. We can see that for every change UI we have to direct interact with DOM because of this reason when count changes the whole childern of `#root` element including #root getting changed.
![counter app without React](..//../day05-without-React/images/image.png)
![result of counter app on DOM without React](..//../day05-without-React/images/Screenshot%202026-01-04%20185049.png)

---
**using React :**
If we use for counter app, React update the DOM very efficeintly and in optimized manner using Reconciliation and fiber.
we can observe that when count changes only the count variable changed not all element of #root
![counter app with React](./assets/Screenshot%202026-01-04%20183456.png)

**Now we learn about it in detail**

## 1. What is Reconciliation in React?

**Reconciliation** is the process by which React updates the UI efficiently when the state or props of a component change.

### Simple Definition
When data changes, React:
1. Creates a **new Virtual DOM**
2. Compares it with the **previous Virtual DOM**
3. Finds the minimum changes required
4. Updates only those parts in the **Real DOM**

👉 This comparison + update process is called **Reconciliation**.

---

## 2. Why Reconciliation is Needed?

Updating the real DOM directly is:
- Slow ❌
- Expensive ❌

React solves this by:
- Using **Virtual DOM**
- Updating only what has changed

### Benefits
- Faster UI updates
- Better performance
- Smooth user experience

---

## 3. What is Virtual DOM?

Virtual DOM is:
- A **lightweight JavaScript object**
- A copy of the real DOM

Whenever state/props change:
- React creates a new Virtual DOM tree
- Compares it with the old one

---

## 4. Diffing Algorithm (How React Compares DOM)

React uses a **Diffing Algorithm** to compare old and new Virtual DOM trees efficiently.

### Assumptions React Makes
1. **Different elements → different trees**
2. **Same elements → update attributes only**
3. **Keys help identify list items**

Because of these assumptions, React can compare trees in **O(n)** time instead of O(n³).

---

## 5. Diffing Rules in Detail

### Rule 1: Different Element Types
If the **element type changes**, React assumes the **entire subtree is different**.

#### Example
<div>
  <Counter />
</div>

### Rule 2: Same Element Type

<div className="a" />
<div className="b" />
👉 React updates only the changed attributes (className).

### Rule 3: Component Elements

If the component type is the same:
- React keeps the instance
- Updates props
- Calls render again

### Rule 4: Lists & Keys

Without keys:
- React re-renders unnecessary elements ❌
With keys:
- React identifies which element changed ✅

## 6. What are Keys in React?

Keys are special attributes used by React to identify elements in a list uniquely.
**Example:** Without Key (Bad Practice)
`items.map(item => <li>{item}</li>)`

**Example:** With Key (Good Practice)
`items.map(item => <li key={item.id}>{item.name}</li>)`

## 7. Why Keys are Important?
Keys help React:
- Track elements between renders
- Avoid unnecessary re-renders
- Improve performance
Problems Without Keys:
- Wrong DOM updates
- Performance issues
- Bugs in UI

## 8. Can We Use Index as Key?

items.map((item, index) => (
  <li key={index}>{item}</li>
))

❌ Not Recommended When:
- List items can be reordered
- Items can be added/removed

✅ Acceptable When:
- Static list
- No reordering
- No deletion/insertion

## 9. What is React Fiber?
Fiber is the new reconciliation engine introduced in React 16.
**Simple Definition**
React Fiber is:
- A new internal architecture
- That makes reconciliation interruptible

## 10. Why React Fiber Was Introduced?

Old React:
- Used stack-based reconciliation
- Could not pause rendering
- Caused UI freezing
React Fiber:
- Breaks rendering into small units
- Can pause, resume, and prioritize work

## 11. Features of React Fiber
1. Incremental Rendering
- Work is split into chunks
- UI remains responsive
2. Priority-based Updates
- User interactions get higher priority
- Background updates get lower priority
3. Pause & Resume Rendering
- React can stop rendering
- Resume later without losing work

## 12. How Fiber Works (Behind the Scenes)

Each Fiber is:
- A JavaScript object
- Represents a unit of work
- Linked like a tree (linked list structure)
Fiber keeps:
- Component type
- Props
- State
- Child & sibling references

## 13. Reconciliation with Fiber

**Steps:**
1. State/props change
2. Fiber tree is created
3. Diffing happens incrementally
4. Changes are committed to DOM
👉 This process is smoother and non-blocking.

## 14. Reconciliation vs Diffing vs Fiber (Comparison)
**Term**          	  |        **Meaning** 
Reconciliation	  |        Entire update process
Diffing	          |        Comparing old & new Virtual DOM
Fiber           	|        Engine that performs reconciliation

## 15. Summary (One Look Revision)

**Reconciliation** → Updating UI efficiently
**Virtual DOM** → JS representation of UI
**Diffing** → Finding minimal changes
**Keys** → Identify list items uniquely
**Fiber** → New architecture for smooth rendering