import React from 'react'
import Blog from './Blog'
import { BLOG } from '../../utils/interfaces/blog'

const BlogCtn = ({
    blogs
} : {
    blogs :BLOG[]
}
) => {
  return (
    <div className=' grid grid-cols-3 justify-center w-fit mx-auto gap-[10px] px-[20px] items-center'>
      {
        blogs.map((blog,index)=>(
          <Blog 
          title={blog.title}
          poster={blog.poster}
          isOnline={blog.isOnline}
          rating={blog.rating}
          category={blog.category}
          />
        ))
      }
    </div>
  )
}

export default BlogCtn