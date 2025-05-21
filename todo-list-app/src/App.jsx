import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { loadTodos } from './thunks';
import './App.css'
import TodoList from './TodoList'


/**
 * App Component - Root of the React application.
 * Manages the state for completed and incomplete todo items.
 * Passes these todos as props to the TodoList component for rendering.
 */
function App() {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(loadTodos());
  },[]);

  return (
    <>
    {/* Render the TodoList with completed and incomplete todo arrays */}
     <TodoList />
    </>
  );
}

export default App;
