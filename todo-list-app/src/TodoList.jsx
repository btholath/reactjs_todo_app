import NewToDoForm from "./NewToDoForm"
import TodoListItem from "./TodoListItem"

/**
 * TodoList Component - Displays the list of completed and incomplete todos.
 * @param {Array} completedTodos - List of completed todo items.
 * @param {Array} incompleteTodos - List of incomplete todo items.
 * Each item is rendered using the TodoListItem component.
 */
export default function TodoList({completedTodos, incompleteTodos, onCompletedClicked, onDeleteClicked, onCreateClicked}){
    return (
        <div>
        <h1>My Todos</h1>
        
        {/* Placeholder text where a todo input form might go in future */}
        <NewToDoForm onCreateClicked={onCreateClicked}/>

        <h3>Completed:</h3>
        {/* Render each completed todo */}
        {completedTodos.map((todo, index) => (
            <TodoListItem 
                todo={todo} 
                key={index} 
                onDeleteClicked={onDeleteClicked} 
            />
        ))}

        <h3>Incomplete:</h3>
        {/* Render each incomplete todo */}
        {incompleteTodos.map((todo, index) => (
            <TodoListItem 
                todo={todo} 
                key={index} 
                onCompletedClicked={onCompletedClicked}
            />
        ))}
        </div>
    )
}
