import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import ForgetPass from "./Pages/ForgetPass/ForgetPass";
import ChangePassword from "./Pages/ResetPass/ResetPass";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Team from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";
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
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "team",
        element: <Team />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
