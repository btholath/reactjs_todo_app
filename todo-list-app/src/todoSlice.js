// todoSlice.js
/**
 * Redux slice to manage todos.
 * - Handles creation, completion, and deletion of todos.
 * - Responds to loadingCompleted from another slice via extraReducers.
 */
import { createSlice } from '@reduxjs/toolkit';
import { loadingCompleted } from './loadingSlice';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: { value: [] },
  reducers: {
     todosUpdated: (state, action) => {
      const updatedTodos = action.payload;
      state.value = updatedTodos;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadingCompleted, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { todosUpdated } = todosSlice.actions;
// Exporting reducer for use in the Redux store