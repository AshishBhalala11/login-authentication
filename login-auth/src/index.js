import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Store } from './store/configureStore';
import { RouterProvider } from 'react-router-dom';
import { Router } from './constants/Router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={Router} />
  </Provider>
);
