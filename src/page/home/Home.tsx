import React from 'react'
import './index.css'
import Blog from '../../components/blog/Blog'
import BlogCtn from '../../components/blog/BlogCtn'
import { blogs } from '../../utils/data'

const Home = () => {
  return (
<div className="mt-[20px]">
<BlogCtn blogs={blogs} />
</div>
  )
}

export default Home