import React from 'react'
import {Link} from "react-router-dom"
export default function Nav() {
  return (
    <div className='center text-txtnrl'>
        <div className='w-[90%] border flex justify-between items-center'>
            <div className='w-[30%] text-[25px]'>
                Blood
            </div>
            <div className='w-[60%] flex justify-around items-center'>
               <Link to={"/"} className='text-[20px] hover:text-txthilted  duration-300 '>Home</Link>
               <Link to={"/about"} className='text-[20px] hover:text-txthilted  duration-300 '>About</Link>
               <Link to={"/profile"} className='text-[20px] hover:text-txthilted  duration-300 '>Profile</Link>
               <Link to={"/login"} className='text-[20px] hover:text-txthilted  duration-300 '>Login</Link>
            </div>
        </div>
    </div>
  )
}
