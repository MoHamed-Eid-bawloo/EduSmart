import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ContextProvider from '../../context/context'

function Layout() {
  return (
    <> 
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header/>
        <div style={{ flexGrow: 1 }}>
          <Outlet/>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Layout
