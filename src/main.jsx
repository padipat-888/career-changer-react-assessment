import React from 'react'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import Home_admin from './Home_admin.jsx';
import Home_user from './Home_user.jsx';
import Owner from './Owner.jsx';
import Navbar from './Navbar.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/owner",
    element: <Owner/>
  },
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
