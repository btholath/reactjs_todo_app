// Import the Express framework to build the HTTP API
import express from 'express';

// Initialize the Express app
const app = express();

// Define the port where the server will run
const port = 3000;



// In-memory array to store todo items
// setup test data to test out the API
let todos = [{
    id: '123',
    text: 'Add a server',
    isCompleted: true,
}]

// Enable the app to parse JSON request bodies (e.g., for POST and PUT)
app.use(express.json());


/**
 * GET /todos
 * Returns the full list of todo items in JSON format.
 * Example: Visiting http://localhost:3000/todos returns the current list.
 */
app.get('/api/todos', (req, res) => {
    res.json(todos);
});


/**
 * POST /todos
 * Adds a new todo item to the list.
 * Expects a JSON body with a "text" field.
 * Sets the ID based on current timestamp and marks it as not completed.
 */
app.post('/api/todos', (req, res) => {

    const newTodo = {
        id: `${Date.now()}`,    // Unique ID based on timestamp
        text: req.body.text,    // Todo text from client
        isCompleted: false,     // Default to not completed       
    };

    todos.push(newTodo);        // Add to in-memory list
    res.json(newTodo);          // Return the created todo
});


/**
 * DELETE /todos/:id
 * Deletes a todo item based on its ID.
 * Example: DELETE /todos/123456789 removes the todo with that ID.
 */
app.delete('/api/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== todoId);
    res.send(); // Respond with empty 200 OK
});


/**
 * PUT /todos/:id
 * Updates an existing todo by ID.
 * Expects JSON body with updated fields (e.g., text, isCompleted).
 * Returns 404 if no matching todo is found.
 */
app.put('/api/todos/:id', (req, res) => {
    const todoId = req.params.id;
    const updatedTodo = req.body;

    // Find the index of the todo with the matching ID
    const todoIndex = todos.findIndex( todo => todo.id === todoId);

    // If not found, send a 404 error
    if (todoIndex === -1){
        return res.status(404).json({ message: 'Todo not found'});
    }
    
    // Merge the existing todo with updated fields
    todos[todoIndex] = {...todos[todoIndex], ...updatedTodo};
    res.json(todos[todoIndex]);
});


/**
 * Starts the server and listens for HTTP requests on the defined port.
 */
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

