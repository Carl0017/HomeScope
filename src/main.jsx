import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/Home/App';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
