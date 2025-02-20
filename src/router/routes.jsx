import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Home from "../layout/Home";
import Login from './../page/Login';
import SignUp from "../page/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
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