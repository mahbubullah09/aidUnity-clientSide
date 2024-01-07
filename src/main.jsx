import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Home from "./component/home";
import Details from "./component/Details";
import Donation from "./component/Donation";
import Statistic from "./component/statistic";
import ErrorPage from "./component/ErrorPage";
import LogIn from "./component/Authentication/LogIn";
import AuthProvider from "./component/Provider/AuthProvider";
import SingUp from "./component/Authentication/SingUp";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./component/Dashboard/Dashboard";

import AddAidsDash from "./component/Dashboard/AddTaskDash";
import UpdateAids from "./component/Dashboard/UpdateAids";
import EventDash from "./component/Dashboard/manageEvent/EventDash";
import UpdateEvent from "./component/Dashboard/manageEvent/UpdateEvent";
import HelpDesk from "./helpDesk/HelpDesk";


const myCreatRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      
        loader: () => fetch('/data.json')
      },
      {
        path: '/login',
        element:<LogIn/>
      },
      {
        path: '/singup',
        element:<SingUp/>
      },
      {
        path: '/helpdesk',
        element:<HelpDesk/>
      },
      {
        path:'/Donation',
        element:<PrivateRoute>
           <Donation/>
        </PrivateRoute>
      },
      {
        path: '/Statistics',
        element: <Statistic></Statistic>,
        loader: () => fetch('/data.json')
      },
      {
        path:'/details/:id',
        element:<PrivateRoute>
          <Details/>
        </PrivateRoute>,
        loader: () => fetch('http://localhost:5000/aids')
      },
      {
        path:'/dashboard',
        element: <Dashboard/>
      },
      {
        path:'/addaids',
        element: <AddAidsDash/>
      },
      {
        path:'/manageevents',
        element: <EventDash/>
      },
      {
        path:'/updateaids/:id',
        element: <UpdateAids/>,
        loader: ({params}) => fetch(`http://localhost:5000/aids/${params.id}`)
      },
      {
        path:'/updateevents/:id',
        element: <UpdateEvent/>,
        loader: ({params}) => fetch(`http://localhost:5000/events/${params.id}`)
      }
    ],
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
    <RouterProvider router={myCreatRoute}></RouterProvider>
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
