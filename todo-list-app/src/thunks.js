// thunks.js
/**
 * Redux thunk to asynchronously fetch todos from API.
 * Dispatches loadingStarted → API call → loadingCompleted or loadingFailed.
 */
import axios from 'axios';
import { 
    loadingStarted, 
    loadingCompleted, 
    loadingFailed 
} from './loadingSlice';
import { todosUpdated } from './todoSlice';


export const loadTodos = () => async (dispatch) => {
  dispatch(loadingStarted());
  try {
    const response = await axios.get('/api/todos');
    const todos = response.data;
    console.log(todos);
    dispatch(loadingCompleted(response.data));
  } catch (e) {
    loadingFailed();
  }
};

export const createTodo = (newTodoText) => async (dispatch, getState) => {
  try {
    const response = await axios.post('/api/todos', { text: newTodoText });
    const newTodo = response.data;
    const updatedTodos = getState().todos.value.concat(newTodo);
    dispatch(todosUpdated(updatedTodos));
  } catch (e) {
    console.log(e);
  }
}

export const deleteTodo = (todoId) => async (dispatch, getState) => {
  try {
    await axios.delete('/api/todos/' + todoId);
    const updatedTodos = getState().todos.value.filter(t => t.id !== todoId);
    dispatch(todosUpdated(updatedTodos));
  } catch (e) {
    console.log(e);
  }
}

export const markTodoAsCompleted = (todoId) => async (dispatch, getState) => {
  try {
    const response = await axios.put('/api/todos/' + todoId, { isCompleted: true });
    const updatedTodo = response.data;
    const updatedTodos = getState().todos.value.map(t => t.id === todoId ? updatedTodo : t);
    dispatch(todosUpdated(updatedTodos));
  } catch (e) {
    console.log(e);
  }
}
