import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'


/**
 * App Component - Root of the React application.
 * Manages the state for completed and incomplete todo items.
 * Passes these todos as props to the TodoList component for rendering.
 */
function App() {
  // List of completed todos
  const [completedTodos, setCompletedTodos] = useState([
    {text: 'Take out the garbage', isCompleted: true },
    {text: 'Make dinner', isCompleted: true}
  ]);
  
  // List of incomplete todos
  const [incompleteTodos, setIncompleteTodos] = useState([
    { text: 'Paint the house', isCompleted: false}
  ]);



 function markTodoAsComplete(text) {
  const todoToMove = incompleteTodos.find(t => t.text === text);
  if (!todoToMove) return; // optional safety check
  setIncompleteTodos(incompleteTodos.filter(t => t.text !== text));
  setCompletedTodos([...completedTodos, { ...todoToMove, isCompleted: true }]);
}

  function deleteTodo(text){
    setCompletedTodos(completedTodos.filter( t => t.text !== text));
  }

  function createTodo(text){
    setIncompleteTodos([...incompleteTodos,  { text, isCompleted: false}]);
  }

  return (
    <>
    {/* Render the TodoList with completed and incomplete todo arrays */}
     <TodoList 
      completedTodos={completedTodos} 
      incompleteTodos={incompleteTodos}
      onCompletedClicked={markTodoAsComplete}
      onDeleteClicked={deleteTodo}
      onCreateClicked={createTodo}
      />
    </>
  );
}

export default App;
