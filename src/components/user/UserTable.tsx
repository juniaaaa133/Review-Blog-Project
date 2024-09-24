import React from 'react'
import { CiEdit } from "react-icons/ci";
import { AiOutlineUserDelete } from "react-icons/ai";

import './index.css'
import { Link } from 'react-router-dom';

const UserTable = () => {
  return (
    <div className='w-full flex-col flex bg-[#ffffff] text-center shadow-md'>
   <div className="w-full flex flex-col items-center justify-center">
   <div className="flex w-full py-[15px] px-[5px] ">
        <p className="main-f fontcl text-[15px] w-[25%]">Username</p>
        <p className="main-f fontcl text-[15px] w-[25%]">Email</p>
        <p className="main-f fontcl text-[15px] w-[25%]">Role</p>
        <p className="main-f fontcl text-[15px] w-[25%]">Joined date</p>
        <p className="main-f fontcl text-[15px] w-[25%]"></p>
    </div>
    <div className="w-[90%] h-[.4px] bg-[#cfcfcf]"></div>
   </div>
   <div className="flex flex-col overflow-auto max-h-[360px] w-full">
   
   <div className="w-full flex flex-col items-center justify-center">
   <div className="flex w-full py-[15px] px-[5px] ">
        <p className="main-f fontcl3 text-[14px] w-[25%]">Gar Gar</p>
        <p className="main-f fontcl3 text-[14px] w-[25%]">xopeofhopeness2004@gmail.com</p>
        <p className="main-f fontcl3 text-[14px] w-[25%]">Admin</p>
        <p className="main-f fontcl3 text-[14px] w-[25%]">31 Feb,2025</p>
        <div className="text-[18px] w-[25%] justify-center flex items-center gap-[8px]">
        <Link to={'/admin/users/gar-gar'} className=" bcu">
            <CiEdit />
        </Link>
        <div className="text-red-600 bcu">
            <AiOutlineUserDelete />
        </div>
        </div>
    </div>
    <div className="w-[90%] h-[.4px] bg-[#cfcfcf]"></div>
   </div>
  
   </div>
   
   
    </div>
  )
}

export default UserTable