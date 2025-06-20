import React from 'react'
import {
  createBrowserRouter
 
} from "react-router";
import Rootlayout from '../layouts/Rootlayout';
import Home from '../Pages/Home/Home';
import Register from '../Pages/register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Rootlayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:"/register",
            Component:Register
        }
    ]
  },
]);

export default router
