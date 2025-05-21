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


export const loadTodos = () => async (dispatch) => {
  dispatch(loadingStarted());
  try {
    const response = await axios.get('/api/todos');
    dispatch(loadingCompleted(response.data));
  } catch (e) {
    dispatch(loadingFailed());
  }
};

