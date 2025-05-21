import { useEffect } from 'react';
import {useDispatch} from 'react-redux';  // Hook to dispatch Redux actions
import { loadTodos } from './thunks';     // Async thunk to load todos from API
import './App.css';
import TodoList from './TodoList';


/**
 * App Component
 * --------------
 * This is the root React component.
 *
 * Core Responsibilities:
 * - Triggers the loading of todos from the backend API when the app starts.
 * - Uses Redux dispatch to fire an asynchronous thunk action (`loadTodos`).
 * - Renders the `TodoList` component which consumes the todos from the Redux store.
 *
 * Technical Notes:
 * - `useDispatch()` gives access to the Redux `dispatch()` function.
 * - `useEffect(..., [])` runs only once after the component mounts (similar to componentDidMount).
 *   This is ideal for triggering side effects like fetching data.
 * - The thunk `loadTodos()`:
 *     - dispatches `loadingStarted()` to update the loading state,
 *     - fetches todos using axios,
 *     - then dispatches either `loadingCompleted(todos)` or `loadingFailed(error)` depending on the result.
 */
function App() {
  const dispatch = useDispatch();   // Access to dispatch function from Redux store

  // React hook that runs once after the component mounts (because of the empty [] dependency array).
  // Perfect for triggering side effects like:
  // Calling an API
  // Dispatching Redux actions
  // Without this, the data wouldn't be fetched automatically on startup.
  useEffect( () => {
    // Side effect: load todos from server on initial render
    dispatch(loadTodos());
  },[]); // Empty dependency array = run only once on component mount

  return (
    <>
    {/* Render the TodoList with completed and incomplete todo arrays */}
     <TodoList />
    </>
  );
}

export default App;
