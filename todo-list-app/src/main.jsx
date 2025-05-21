// main.jsx
/**
 * Entry point for the React app.
 * - Wraps the <App /> component with Redux <Provider>.
 * - Configures the Redux store with todos and loading slices.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './App.jsx';
import todosSlice from './todoSlice';
import loadingSlice from './loadingSlice.js';

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