import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import Home from "./views/Home"
import MovieDetail from "./views/MovieDetail"
import './index.scss'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


export default main