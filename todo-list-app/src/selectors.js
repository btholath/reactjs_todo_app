//import { createSelector } from "@reduxjs/toolkit";

//export const getTodos = state => state.todos.value;
//export const getTodosLoading = state => !state.loading.value.completed;

//export const getCompletedTodos = createSelector([getTodos], todos => todos.filter(t => t.isCompleted));
//export const getIncompleteTodos = createSelector([getTodos], todos => todos.filter(t => !t.isCompleted));


import { createSelector } from "@reduxjs/toolkit";

/**
 * Selector to retrieve all todos from the Redux store.
 * @param {Object} state - The Redux state object.
 * @returns {Array} - The array of todo items.
 *
 * This pulls out the list of all your tasks from the app's memory.
 */
export const getTodos = state => state.todos.value;
// Grabs the 'value' field inside 'todos' from the Redux state (i.e., the list of all todo items).

/**
 * Selector to check if todos are still loading.
 * @param {Object} state - The Redux state object.
 * @returns {boolean} - True if loading is still in progress, otherwise false.
 *
 * Checks if the app is still busy loading the todo list.
 */
export const getTodosLoading = state => !state.loading.value.completed;
// Returns true if loading is NOT completed yet, using the 'completed' flag from loading state.



/**
  Why Use createSelector?
  It memorizes the result so if the input (the todos list) hasn't changed, it doesn’t re-calculate.
  Improves performance in large apps by avoiding unnecessary recalculations and re-renders.

* Memoized selector to get only completed todos using reselect.
 * @returns {Array} - Array of completed todo items.
 *
 * Gives you a filtered list of only the finished tasks.
 */
export const getCompletedTodos = createSelector(
  [getTodos],                  // Input selector(s)
  todos => todos.filter(t => t.isCompleted)  // Result function
);
// Uses reselect to efficiently return only those todos where `isCompleted` is true.

/**
 * Memoized selector to get only incomplete todos using reselect.
 * @returns {Array} - Array of incomplete todo items.
 *
 * Gives you a filtered list of tasks that are still pending.
 */
export const getIncompleteTodos = createSelector(
  [getTodos],
  todos => todos.filter(t => !t.isCompleted)
);
// Uses reselect to return todos where `isCompleted` is false.
