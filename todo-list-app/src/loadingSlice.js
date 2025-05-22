// loadingSlice.js
/**
 * Redux slice to track loading status.
 * - Flags for completed and successful loading.
 */

// Import createSlice from Redux Toolkit to define a Redux slice
import {createSlice} from '@reduxjs/toolkit';

/**
 * Redux slice to manage a loading state.
 * Tracks whether an operation is currently loading, completed, and successful.
 * 
 * State shape:
 * {
 *   value: {
 *     completed: boolean,   // true if loading is done
 *     successful: boolean   // true if loading succeeded
 *   }
 * }
 */

export const loadingSliceDef =  {
    name: 'loading',                    // name of the slice, used for actions
    initialState: {
        value: {
            completed: true,            // Initially, nothing is loading
            successful: false,           // And no operation has succeeded yet
        },
    },
    /** 
     * You define three reducers (actions that modify the state):
     * loadingStarted: Marks the beginning of a loading operation.
     * loadingCompleted: Marks loading as completed and successful.
     * loadingFailed: Marks loading as completed but unsuccessful.
    */
    reducers: {
        /**
        * Action: Marks the loading as started.
        * Sets `completed` to false to indicate loading is in progress.
        */
       loadingStarted: (state) => {
        state.value.completed = false;
       },
        /**
        * Action: Marks the loading as completed successfully.
        * Sets `completed` to true and `successful` to true.
        */
       loadingCompleted: (state) => {
        state.value.completed = true;
        state.value.successful = true;
       },
        /**
        * Action: Marks the loading as completed with failure.
        * Sets `completed` to true and `successful` to false.
        */
       loadingFailed: (state) => {
        state.value.completed = true;
        state.value.successful = false;
       },
    },
};

// Export the actions and reducer to be used in your app with Redux.
// Export action creators to use in components
export const loadingSlice = createSlice(loadingSliceDef);
export const { loadingStarted, loadingCompleted, loadingFailed} = loadingSlice.actions;

