import React from 'react';
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
// pages
import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import SingleProductPage from './pages/SingleProductPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
// css
import './index.css';

// createRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/Product',
        element: <ProductPage />
      },
      {
        path: '/single/:id',
        element: <SingleProductPage />
      },
      {
        path: '/about', 
        element: <AboutPage />
      },
    ],
  }
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);