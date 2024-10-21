import React from 'react'
import Blog from './Blog'
import { BLOG } from '../../utils/interfaces/blog'
import BlogButton from './BlogButton'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const BlogCtn = ({
    blogs
} : {
    blogs :BLOG[] | null
}
) => {

const {role} = useSelector((state : RootState) => state.reducer.user.user)
const token = localStorage.getItem("token")

return (
    <div className='bl-ctn justify-center mx-auto gap-[10px] px-[20px] items-center'>
      {
        role == "admin" && token && <BlogButton />
      }
      {
    blogs == null?
    'loadingblog'.split("").map((count,i) => 
<div key={i} className={'loading w-full h-[180px]'}></div>)
    :
    blogs.map((blog,index)=>(
      <Blog 
      _id={blog._id}
      key={index}
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