import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import React from 'react'

export default main

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)