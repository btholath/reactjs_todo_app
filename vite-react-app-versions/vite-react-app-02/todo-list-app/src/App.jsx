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
  function createTodo(text){
    setIncompleteTodos([...incompleteTodos,  { text, isCompleted: false}]);
  }

  return (
    <>
    {/* Render the TodoList with completed and incomplete todo arrays */}
     <TodoList />
    </>
  );
}

export default App;
