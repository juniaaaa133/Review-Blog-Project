import React, { useEffect, useState } from 'react'
import UserTable from '../../../components/user/UserTable'
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from 'react-router-dom'
import Pagination from '../../../components/pagination/Pagination';
import { User } from '../../../utils/interfaces/user';
import { callFetchUsers } from '../../../utils/apis/calls/user';

const UserPage = () => {

const [users,setUsers] = useState<User[] | null>(null)
const [page,setPage] = useState<number>(1);
const [totalUserPage,setTotalUserPage] = useState<number>(1);

const fetchUsers = async () => {
const plainRes = await callFetchUsers();
if(plainRes.status !== 200){
 return;
}
const res = JSON.parse(plainRes.data)
setUsers(res.users);
setTotalUserPage(res.userInfo.pages)
}

useEffect(()=>{
fetchUsers();
},[page])

  return (
    <div className={'flex mt-[20px] flex-col px-[30px] gap-[20px]'}>
      <h2 className="main-f fontcl text-[18px] font-[600]">Users & admins</h2>
      <UserTable users={users} />
      <Pagination page={page} setPage={setPage} totalPages={totalUserPage}/>
    </div>
  )
}

export default UserPage