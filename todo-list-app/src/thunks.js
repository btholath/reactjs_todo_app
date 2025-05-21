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
    dispatch(loadingCompleted(response.data));
  } catch (e) {
    dispatch(loadingFailed());
  }
};

export const createTodo = (newTodoText) => async (dispatch, getState) => {
  try {
    const response = await axios.post('/api/todos', {text: newTodoText });
    const newTodo = response.data;
    const updatedTodos = getState().todos.value.concat(newTodo);
    dispatch(todosUpdated(updatedTodos));
  } catch (e) {
    console.log(e);
  }
}