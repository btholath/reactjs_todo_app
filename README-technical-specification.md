
# ReactJS Todo Application

A simple full-stack Todo list app built using React, Redux Toolkit, and Express.js.

---

## 📘 Technical Specification

### Overview

The ReactJS Todo application is a single-page application (SPA) that enables users to manage their task list. It supports features like adding, marking complete, and deleting todos, with Redux Toolkit handling the state and an Express backend serving as the API layer.

### Architecture

- **Frontend**: React with functional components and hooks
- **State Management**: Redux Toolkit
- **Backend**: Express.js with in-memory storage
- **Styling**: CSS
- **Build Tool**: Vite

---

## 🛠️ Features

- Create new todos
- Mark todos as completed
- Delete todos
- Visual loading indicator
- API integration for persistence

---

## 🧱 Folder Structure

```
todo-list-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── todoSlice.js
│   ├── loadingSlice.js
│   ├── thunks.js
│   ├── TodoList.jsx
│   ├── TodoListItem.jsx
│   ├── NewToDoForm.jsx
│   └── index.css
├── server.js
├── vite.config.js
└── package.json
```

---

## ⚙️ Redux State Structure

### todosSlice

```js
{
  value: [
    { text: 'Sample Task', isCompleted: false }
  ]
}
```

### loadingSlice

```js
{
  value: {
    completed: true,
    successful: false
  }
}
```

---

## 🔁 API Endpoints

| Method | Endpoint          | Description             |
|--------|-------------------|-------------------------|
| GET    | /api/todos        | Fetch all todos         |
| POST   | /api/todos        | Add a new todo          |
| PUT    | /api/todos/:id    | Update a todo           |
| DELETE | /api/todos/:id    | Delete a todo           |

---

## 🚀 Getting Started

### Frontend

```bash
cd todo-list-app
npm install
npm run dev
```

### Backend

```bash
node server.js
```

---

## 🧪 Tech Stack

- React
- Redux Toolkit
- Express.js
- Vite
- Axios

---

## 📄 License

This project is licensed under the MIT License.
