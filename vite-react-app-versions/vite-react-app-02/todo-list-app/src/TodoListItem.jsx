import { useDispatch } from "react-redux";
import { markTodoAsCompleted, deleteTodo } from "./todoSlice";

/**
 * TodoListItem Component - Represents a single todo item.
 * @param {Object} todo - A todo object with `text` and `isCompleted` status.
 * @param {Function} onCompletedClicked - Callback for marking todo as completed.
 * @param {Function} onDeleteClicked - Callback for deleting a completed todo.
 * 
 * Renders the todo text, and conditionally shows a status and appropriate button.
 */

export default function TodoListItem({todo }){

    const dispatch = useDispatch();

    return (
        <div>
            {/* Display the text of the todo */}
            <h3 className={todo.isCompleted ? "completed" : ""}>{todo.text}</h3>


            {/* If the todo is completed, show "Complete!" */}
            {todo.isCompleted && <p>Complete!</p>}

            {/* Show either a Delete or Complete button depending on status */}
            {todo.isCompleted 
            ? <button onClick={ () => dispatch(deleteTodo(todo.text))}>Delete Item</button>
            : <button onClick={ () => dispatch(markTodoAsCompleted(todo.text))}>Mark as Completed</button>
            }
        </div>
    );
}