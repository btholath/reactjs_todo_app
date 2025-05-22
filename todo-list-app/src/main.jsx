// main.jsx
/**
 * Entry point for the React app.
 * - Wraps the <App /> component with Redux <Provider>.
 * - Configures the Redux store with todos and loading slices.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {todosSlice} from './todoSlice';
import './index.css';
import App from './App.jsx';
import {loadingSlice} from './loadingSlice.js';

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);