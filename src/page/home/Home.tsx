import React from 'react'
import './index.css'
import Blog from '../../components/blog/Blog'
import BlogCtn from '../../components/blog/BlogCtn'
import { blogs } from '../../utils/data'
import Pagination from '../../components/pagination/Pagination'

const Home = () => {
  return (
<div className="mt-[20px]">
<BlogCtn blogs={blogs} />
<Pagination />
</div>
  )
}

export default Home