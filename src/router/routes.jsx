import { createBrowserRouter } from "react-router-dom";

import Login from "./../page/Login";
import SignUp from "../page/SignUp";

import HomeLayout from "../layout/HomeLayout";
import Home from "../page/Home";
import Update from "../page/Update";
import Card from "../page/Card";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/task",
        element: (
          <PrivateRoute>
            <Card></Card>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            {" "}
            <Update></Update>,
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
