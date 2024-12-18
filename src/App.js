import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import ForgetPass from "./Pages/ForgetPass/ForgetPass";
import ChangePassword from "./Pages/ResetPass/ResetPass";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Team from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";
import { MyContext } from "./context/context";
import TestAuth from "./Pages/TestAuth";

export default function App() {
  let {ProtectRoute,ProtectAuth}=useContext(MyContext)
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

      <Route path="/" element={<Home />} />

      {/* Protects Routes */}
      <Route path="" element={<ProtectRoute/>} >
          <Route path="/success" element={<TestAuth />} />
          <Route path="/team" element={ <Team />} />
      </Route>

    {/* Protects Auth */}
      <Route path="" element={<ProtectAuth/>} >
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPass" element={<ForgetPass />} />
        <Route path="/changePass" element={<ChangePassword />} />
      </Route>

        <Route path="/home" element={<Home />} />
     
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

      </Route>
    </Routes>
  );
}
