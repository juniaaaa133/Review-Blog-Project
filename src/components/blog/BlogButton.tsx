import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const BlogButton = () => {
  return (
    
    <Link to='/admin/create-blog' className="bl-main gap-[10px] bcu bg-ter flex items-center justify-center">
        <div className="fontcl text-[23px]">
        <FaPlus />
        </div>
    <p className="fontcl main-f text-[18px]">Add new</p>
    </Link>
  )
}

export default BlogButton