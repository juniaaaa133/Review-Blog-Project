import React from 'react'
import UserTable from '../../../components/user/UserTable'

const UserPage = () => {
  return (
    <div className={'flex mt-[20px] flex-col px-[30px] gap-[20px]'}>
      <h2 className="main-f fontcl text-[18px] font-[600]">Users & admins</h2>
      <UserTable />
    </div>
  )
}

export default UserPage