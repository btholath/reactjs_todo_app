
# 🧩 Detailed Design Document: ReactJS Todo Application

This document provides a comprehensive design overview of the ReactJS Todo Application hosted at [GitHub Repo](https://github.com/btholath/reactjs_todo_app/tree/main/todo-list-app).

---

## 📐 Component Architecture

```
App
├── TodoList
│   ├── NewToDoForm
│   └── TodoListItem
```

- `App.jsx`: Initializes the app and dispatches async actions to fetch todos.
- `TodoList.jsx`: Splits todos into completed and incomplete, and renders the list.
- `NewToDoForm.jsx`: Handles new todo input.
- `TodoListItem.jsx`: Renders individual todo item and handles complete/delete actions.

---

## 🔄 State Management (Redux Toolkit)

### `todosSlice.js`

Manages the list of todos.

**State Shape:**
```js
{
  value: [ { text: 'Buy Milk', isCompleted: false } ]
}
```

**Reducers:**
- `createTodo`: Adds a todo
- `markTodoAsCompleted`: Marks a todo as completed
- `deleteTodo`: Deletes a todo
- `todosUpdated`: Bulk update (used in async loading)

**Extra Reducers:**
- Reacts to `loadingCompleted` to populate todos from async call.

### `loadingSlice.js`

Tracks loading and success status.

**State Shape:**
```js
{
  value: { completed: true, successful: false }
}
```

**Reducers:**
- `loadingStarted`: Loading begins
- `loadingCompleted`: Successfully completed
- `loadingFailed`: Loading failed

### `thunks.js`

Async thunk for loading todos:
- Calls `/api/todos`
- Dispatches `loadingStarted`, then `loadingCompleted` or `loadingFailed`

---

## 🌐 Backend Design (Express.js)

### File: `server.js`

A basic Express server that handles todo list data in-memory.

**API Endpoints:**

| Method | Route            | Description            |
|--------|------------------|------------------------|
| GET    | `/api/todos`     | Fetch all todos        |
| POST   | `/api/todos`     | Add a new todo         |
| PUT    | `/api/todos/:id` | Update a todo by ID    |
| DELETE | `/api/todos/:id` | Delete a todo by ID    |

**Example Response:**
```json
[
  {
    "id": "1716322740000",
    "text": "Sample Todo",
    "isCompleted": false
  }
]
```

---

## 📊 Data Flow Overview

### On Initial Load:
1. `App.jsx` mounts.
2. Dispatch `loadTodos()`.
3. Thunk performs GET `/api/todos`.
4. On success, updates Redux via `loadingCompleted()` and `todosUpdated()`.

### Adding a Todo:
1. User enters text and submits via `NewToDoForm.jsx`.
2. Dispatch `createTodo()` → updates Redux state.
3. Optionally send a POST request to backend (not shown here).

### Mark as Complete:
1. Click on a todo triggers `markTodoAsCompleted()` → updates Redux state.

### Delete Todo:
1. Dispatch `deleteTodo()` → removes from Redux state.

---

## ⚙️ Build & Dev Tools

- **Vite**: For fast dev server and builds.
- **Axios**: For API requests.
- **Redux Toolkit**: Simplifies state logic.

---

## 📦 Future Enhancements

- Add persistent storage (MongoDB, Firebase, etc.)
- Add authentication (login/signup)
- Use React Query or RTK Query for advanced data fetching
- Enhance UI with TailwindCSS or styled-components

---

## 📄 Summary

This app is a lightweight, well-structured full-stack project built with modern JavaScript frameworks. It can serve as a boilerplate or be expanded for more complex use cases.

