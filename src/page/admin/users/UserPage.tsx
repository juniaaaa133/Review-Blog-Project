import React from 'react'
import UserTable from '../../../components/user/UserTable'
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from 'react-router-dom'

const UserPage = () => {
  return (
    <div className={'flex mt-[20px] flex-col px-[30px] gap-[20px]'}>
      <h2 className="main-f fontcl text-[18px] font-[600]">Users & admins</h2>
      <Link to={'/admin/add-user'} className="flex fontcl4 text-[15px] items-center gap-[7px]">
<p className="main-f">Add new user</p>
  <AiOutlineUserAdd/>
      </Link>
      <UserTable />
    </div>
  )
}

export default UserPage