import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home'
import User from './pages/User';
import Post from './pages/Post';
import ErrorPage from './pages/ErrorPage'

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
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
    {
      path: '*',
      element: <ErrorPage />
    }
  ]);

  return <RouterProvider router={router} />
}
