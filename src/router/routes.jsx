import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Home from "../layout/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
       {
        path: "/",
        element:<></>
       }

      ],
    },
  ]);
  export default router