import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLoginPageVisible from "../../Hook/useLoginPageVisible"

import { FaHome } from "react-icons/fa";
import { FaUserTie, FaUsersViewfinder } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";

import profile from "../../assets/Hasan.jpg"

export default function Nav() {
  const {setvisible}=useLoginPageVisible()
  const [login, setlogin] = useState(false);
  return (
    <div className="min-w-full center text-txtnrl">
      <div className="w-[95%] pt-[2px] grid grid-cols-4 grid-rows-2 sm:w-[90%]">
        <div className="text-[25px] col-span-2 row-span-1">Blood</div>
        <div className="col-span-2">
          {login ? (
            <div className="w-[100%] flex justify-end items-center gap-[15px]">
              <button className="text-txtnrml text-[30px] p-[5px] bg-[#D8DADF] rounded-full">
                 <IoNotifications />
              </button>
              <Link
                to={"/profile"}
                className="text-[20px] hover:text-txthilted  duration-300 "
              >
                <img className={`w-[42px] rounded-full`} src={profile}/>
              </Link>
            </div>
          ) : (
            <div className="w-[100%] flex justify-end items-center">
              <Link
                onClick={()=>setvisible(true)}
                className="text-[27px] flex flex-col justify-center items-center lg:text-[25px] lg:flex-row lg:gap-[3px] hover:text-txthilted  duration-300 "
              >
                <FaUserTie /> <span className="hidden sm:inline text-[15px] lg:text-[20px]">Sign in</span>
              </Link>
            </div>
          )}
        </div>
        <div className="col-span-4 mt-[2px] border-t-2 border-b-2 border-solid border-txtnrl grid grid-cols-3">
          <div className="col-span-1 center">
            <Link
              to={"/"}
              className=" text-[20px] flex flex-col justify-center items-center lg:text-[25px] lg:flex-row lg:gap-[3px] hover:text-txthilted  duration-300 "
            >
              <FaHome /> <span className="hidden sm:inline text-[15px] lg:text-[20px]">Home</span>
            </Link>
          </div>
          <div className="col-span-1 center">
            <Link
              to={"/contact"}
              className="text-[20px] flex flex-col justify-center items-center lg:text-[25px] lg:flex-row lg:gap-[3px] hover:text-txthilted  duration-300 "
            >
              <MdContactPhone /> <span className="hidden text-[15px] sm:inline lg:text-[20px]">Contact Us</span>
            </Link>
          </div>
          <div className="col-span-1 center">
            <Link
              to={"/about"}
              className="text-[20px] flex flex-col justify-center items-center lg:text-[25px] lg:flex-row lg:gap-[3px] hover:text-txthilted  duration-300 "
            >
              <FaUsersViewfinder /> <span className="hidden text-[15px] sm:inline lg:text-[20px]">About</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
