// TodoList.jsx
/**
 * Component to display completed and incomplete todos.
 * Uses Redux state for loading and todos.
 */
import { useSelector } from 'react-redux';
import NewToDoForm from './NewToDoForm';
import TodoListItem from './TodoListItem';

export default function TodoList() {
  const todosAreLoading = useSelector((state) => state.loading.value.completed);
  const todos = useSelector((state) => state.todos.value);

  return (
    <div>
      <h1>My Todos</h1>
      <NewToDoForm />
      {todosAreLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <h3>Completed:</h3>
          {todos.filter(t => t.isCompleted).map((todo, index) => ( <TodoListItem todo={todo} key={index} />  ))}
          <h3>Incomplete:</h3> 
          {todos.filter(t => !t.isCompleted).map((todo, index) => ( <TodoListItem todo={todo} key={index} /> ))}
        </>
      )}
    </div>
  )
}