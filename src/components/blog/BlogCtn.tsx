import React from 'react'
import Blog from './Blog'

const BlogCtn = ({
    blogs
} : {
    blogs : any
}
) => {
  return (
    <div className=' grid grid-cols-3 justify-center w-fit mx-auto gap-[10px] px-[20px] items-center'>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />

        
    </div>
  )
}

export default BlogCtn