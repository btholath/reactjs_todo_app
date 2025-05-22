import { useDispatch } from "react-redux";
import { markTodoAsCompleted , deleteTodo} from "./thunks";
import styled from 'styled-components';


/**
 * TodoListItem Component - Represents a single todo item.
 * @param {Object} todo - A todo object with `text` and `isCompleted` status.
 * @param {Function} onCompletedClicked - Callback for marking todo as completed.
 * @param {Function} onDeleteClicked - Callback for deleting a completed todo.
 * 
 * Renders the todo text, and conditionally shows a status and appropriate button.
 */

const CardContainer = styled.div`
  ${props => props.important && 'background-color: yellow;'}
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  padding: 16px;
`;


export default function TodoListItem({todo }){
    const dispatch = useDispatch();

    return (
    <CardContainer important={todo.text.endsWith('!')}>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted
        ? <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete Item</button>
        : <button onClick={() => dispatch(markTodoAsCompleted(todo.id))}>Mark as Completed</button>}
    </CardContainer>
  );
}