import React from "react";
import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import ForgetPass from "./Pages/ForgetPass/ForgetPass";
import ChangePassword from "./Pages/ResetPass/ResetPass";

const routes = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/", 
        element: <Home />,  
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgetPass",
        element: <ForgetPass />,
      },
      {
        path: "changePass",
        element: <ChangePassword />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
