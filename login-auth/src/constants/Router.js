import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import User from '../pages/User';
import Post from '../pages/Post';
import ErrorPage from '../pages/ErrorPage';

export const Router = createBrowserRouter([
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