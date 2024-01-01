import React from 'react'
import {Routes,Route} from "react-router-dom"

import useLoginPageVisible from "./Hook/useLoginPageVisible"

import Nav from './Web/Global_Components/Nav'
import Login from "./Web/Pages/Login&Sign/Login"
import Home from './Web/Pages/Home/Home'
import About from "./Web/Pages/AboutUs/About"
import Profile from "./Web/Pages/Profile/Profile"
import Contact from './Web/Pages/ContactUS/Contact'
export default function Layout() {
  const {visible}=useLoginPageVisible()
  return (
    <div className='min-w-full min-h-full bg-bgnrl font-mainfnt font-bold'>
      {visible ? <div><Login/></div>
         :
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
</div>}
    </div>
  )
}
