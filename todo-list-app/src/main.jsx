import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import App from './App.jsx'
import todosSlice from './todoSlice';

// In-memory database store
const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
