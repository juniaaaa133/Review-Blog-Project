import React from 'react'
import Blog from './Blog'
import { BLOG } from '../../utils/interfaces/blog'
import BlogButton from './BlogButton'

const BlogCtn = ({
    blogs
} : {
    blogs :BLOG[]
}
) => {
  return (
    <div className='bl-ctn justify-center mx-auto gap-[10px] px-[20px] items-center'>
      <BlogButton />
      {
        blogs.map((blog,index)=>(
          <Blog 
          title={blog.title}
          icon={blog.icon}
          isOnline={blog.isOnline}
          rating={blog.rating}
          categories={blog.categories}
          />
        ))
      }
    </div>
  )
}

export default BlogCtn