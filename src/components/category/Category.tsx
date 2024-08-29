import React from 'react'

const Category = ({
    name,
} : {
    name : string
}) => {
  return (
    <div className={'bg-white w-full px-[20px] main-f trans bcu hover:bg-[#f5f5f5] py-[12px] fontcl text-[16px] border-[1px] border-solid border-[#f7f7f7]'}>{name}</div>
  )
}

export default Category