import React from 'react'
import { GrFormNext } from "react-icons/gr";

const Pagination = () => {
  return (
    <div className={'flex mt-[200px] items-center gap-[10px] w-full justify-center'}>
 <div className="text-[18px] bcu  rotate-180 rounded-[10px] p-[5px] bg-sec">
            <GrFormNext />
        </div>
        <p className=" fontcl main-f text-[18px]">2</p>
        <div className="bcu text-[18px] rounded-[10px] p-[5px] bg-sec">
            <GrFormNext />
        </div>
    </div>
  )
}

export default Pagination