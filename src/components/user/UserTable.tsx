import React from 'react'
import { CiEdit } from "react-icons/ci";
import { AiOutlineUserDelete } from "react-icons/ai";
import * as moment from "moment"
import './index.css'
import { Link } from 'react-router-dom';
import { User } from '../../utils/interfaces/user';
import { callDeleteUser } from '../../utils/apis/calls/user';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const UserTable = ({users} : {users : User[] | null}) => {

const {email} = useSelector((state : RootState) => state.reducer.user.user)

const deleteUser = async (email? : string) => {
const res = await callDeleteUser(email)
if(res.status !== 204){
 return;
}
window.location.reload();
}

  return (
<div className="w-full overflow-auto">
<div className='w-full xl:w-[860px] flex-col flex bg-[#ffffff] text-center shadow-md'>
   <div className="w-full flex flex-col items-center justify-center">
   <div className="flex w-full py-[15px] px-[5px] ">
        <p className="main-f fontcl text-[15px] w-[25%]">Username</p>
        <p className="main-f fontcl text-[15px] w-[50%]">Email</p>
        <p className="main-f fontcl text-[15px] w-[25%]">Role</p>
        <p className="main-f fontcl text-[15px] w-[25%]"></p>
    </div>
    <div className="w-[90%] h-[.4px] bg-[#cfcfcf]"></div>
   </div>
   <div className="flex flex-col overflow-auto max-h-[360px] w-full">
   
{
  users !== null && 
  users.map((user,index) => (
 <div key={index} className="w-full flex flex-col items-center justify-center">
 <div className="flex w-full py-[15px] px-[5px] ">
<p className="main-f fontcl3 text-[14px] w-[25%]">{user.username}</p>
<p className="main-f fontcl3 text-[14px] w-[50%]">{user.email}</p>
<p className="main-f fontcl3 text-[14px] w-[25%]">{user.role}</p>
{
user.email == email ?
<p className="main-f fontcl3 text-[14px] w-[25%]">(You)</p>
:
<div className="text-[18px] w-[25%] justify-center flex items-center gap-[8px]">
<Link to={`/admin/users/${user.email}`} className=" bcu">
 <CiEdit />
</Link>
<div onClick={()=>deleteUser(user.email)} className="text-red-600 bcu">
 <AiOutlineUserDelete />
</div>
</div>
}
  </div>
  <div className="w-[90%] h-[.4px] bg-[#cfcfcf]"></div>
 </div>
  ))
}
  
   </div>
   
   
    </div>
</div>
  )
}

export default UserTable