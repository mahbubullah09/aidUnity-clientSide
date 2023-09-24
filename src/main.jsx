import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const myCreatRoute= createBrowserRouter([
  {
    path:'/',
    element:<div>my route</div>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <RouterProvider router={myCreatRoute}></RouterProvider>
  </React.StrictMode>,
)
