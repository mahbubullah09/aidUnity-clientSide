import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Home from "./component/home";
import Details from "./component/Details";


const myCreatRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
        loader: () => fetch('../public/data.json')
      },
      {
        path:'/Donation',
        element: <div>donation</div>
      },
      {
        path: '/Statistics',
        element: <div>statistic</div>
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader: () => fetch('../public/data.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myCreatRoute}></RouterProvider>
  </React.StrictMode>
);
