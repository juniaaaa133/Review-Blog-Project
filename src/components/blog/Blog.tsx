import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { BLOG } from '../../utils/interfaces/blog'

const Blog = ({
  _id,
  title,
  categories,
  icon,
  rating,
} : BLOG) => {

  return (
    <Link to={`/${_id}`} className='bl-main bcu shadow-lg'>
        <img src={icon} alt="" className=" trans pic bl-img" />
        <div className="bl-layout"></div>
        <div className="bl-info">
            <div className="flex flex-col gap-[2px]">

            <h3 className="fontcl main-f text-[17px]">{title}</h3>
            <p className="fontcl6 main-f text-[14px]">{categories && categories.length !== 0 && categories[0].name}</p>
            <div className="flex text-[13px] main-f fontcl6 gap-[5px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3">
  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
</svg>
                <div>{rating}</div>
            </div>
            </div>
        </div>
    </Link>
  )
}

export default Blog