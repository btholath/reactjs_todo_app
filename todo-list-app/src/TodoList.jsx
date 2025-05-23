// TodoList.jsx
/**
 * Component to display completed and incomplete todos.
 * Uses Redux state for loading and todos.
 */
import { useSelector } from 'react-redux';
import NewToDoForm from './NewToDoForm';
import TodoListItem from './TodoListItem';
import { getCompletedTodos, getIncompleteTodos, getTodosLoading } from './selectors';

export default function TodoList() {
  const todosAreLoading = useSelector(getTodosLoading);
  const completedTodos = useSelector(getCompletedTodos);
  const incompleteTodos = useSelector(getIncompleteTodos);


 return (
    <div>
      <h1>My Todos</h1>
      <NewToDoForm />
      {todosAreLoading
        ? <p>Loading...</p>
        : (
          <>
          <h3>Completed:</h3>
          {completedTodos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} />
          ))}
          <h3>Incomplete:</h3>
          {incompleteTodos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} />
          ))}
          </>
        )}
    </div>
  )
}