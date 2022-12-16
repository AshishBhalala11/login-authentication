import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Login';
import User from './User';
import Post from './Post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/account/login',
    element: <Login />,
  },
  {
    path: '/account/user',
    element: <User />
  },
  {
    path: '/account/post/:id',
    element: <Post />
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
