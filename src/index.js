import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
