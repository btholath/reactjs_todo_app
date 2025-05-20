
/**
 * TodoListItem Component - Represents a single todo item.
 * @param {Object} todo - A todo object with `text` and `isCompleted` status.
 * @param {Function} onCompletedClicked - Callback for marking todo as completed.
 * @param {Function} onDeleteClicked - Callback for deleting a completed todo.
 * 
 * Renders the todo text, and conditionally shows a status and appropriate button.
 */

export default function TodoListItem({todo, onCompletedClicked, onDeleteClicked}){
    return (
        <div>
            {/* Display the text of the todo */}
            <h3>{todo.text}</h3>

            {/* If the todo is completed, show "Complete!" */}
            {todo.isCompleted && <p>Complete!</p>}

            {/* Show either a Delete or Complete button depending on status */}
            {todo.isCompleted 
            ? <button onClick={ () => onDeleteClicked(todo.text)}>Delete Item</button>
            : <button onClick={ () => onCompletedClicked(todo.text)}>Mark as Completed</button>
            }
        </div>
    );
}