import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Navigate ,Outlet } from "react-router-dom";
export const MyContext = createContext(0); // Context creation

export default function ContextProvider({ children }) {
  const host = "http://localhost:3000/api/v1/smart-school";
    const token=localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(null);
  async function checkLogin() {
    try {
      let res = await axios.get(`${host}/auth/protectRoute`, {
        headers: {
            token
        },
      });
      if(res.data.status==true){
        setIsLogin(true);
      }else {
        setIsLogin(false)
      }
    } catch (error) {
      setIsLogin(false);
    }
  }


  function ProtectRoute({children}){
    if(isLogin==null) return <div>  Loading.. </div>
    return isLogin?<Outlet/>:<Navigate to="/login"/>
  }

  function ProtectAuth({children}){
    if(isLogin==null) return <div>  Loading.. </div> 
    return isLogin?<Navigate to="/home"/>:<Outlet/>

  }



  useEffect(()=>{
    checkLogin();

  },[token])
  return <MyContext.Provider value={{ host,isLogin,ProtectRoute,setIsLogin,ProtectAuth }}>{children}</MyContext.Provider>;
}
