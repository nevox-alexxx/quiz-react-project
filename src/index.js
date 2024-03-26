import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { MainPage } from "./components/MainPage/MainPage"

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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
