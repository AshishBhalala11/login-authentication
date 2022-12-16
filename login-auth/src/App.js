import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import User from './pages/User';
import Post from './pages/Post';
import ErrorPage from './pages/ErrorPage'
import { checkUserAuth } from './middleware/middleware';

export default function App() {
  useEffect(() => {
    if (window.location.pathname.split("/").includes('post') || window.location.pathname.split("/").includes('user')) {
      checkUserAuth();
    }
  }, [])

  const router = createBrowserRouter([
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
