import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { MainPage } from "./pages/MainPage/MainPage"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
  },
  {
    path:"/quest",
    element: <MainPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
