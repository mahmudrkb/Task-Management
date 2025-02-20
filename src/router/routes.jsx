import {
    createBrowserRouter,
  
  } from "react-router-dom";

import Login from './../page/Login';
import SignUp from "../page/SignUp";

import HomeLayout from "../layout/HomeLayout";
import Home from "../page/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
       
       {
        path: "/login",
        element:<Login/>
       },
       {
        path: "/signup",
        element:<SignUp></SignUp>
       }

      ],
    },
  ]);
  export default router