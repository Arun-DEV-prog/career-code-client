import React from 'react'
import {
  createBrowserRouter
 
} from "react-router";
import Rootlayout from '../layouts/Rootlayout';
import Home from '../Pages/Home/Home';
import Register from '../Pages/register/Register';
import SignIn from '../Pages/SignIn/SignIn';

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
        },
        {
            path:'/signin',
            Component:SignIn
        }
    ]
  },
]);

export default router
