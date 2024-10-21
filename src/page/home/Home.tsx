import React, { useEffect, useState } from 'react'
import './index.css'
import Blog from '../../components/blog/Blog'
import BlogCtn from '../../components/blog/BlogCtn'
import Pagination from '../../components/pagination/Pagination'
import { BLOG } from '../../utils/interfaces/blog'
import { callFetchProduct } from '../../utils/apis/calls/product'
import { AxiosResponse } from 'axios-typescript/dist/types/types'
import { useSelector } from 'react-redux'
import { User } from '../../utils/interfaces/user'
import { RootState } from '../../redux/store'

const Home = () => {

const [blogs,setBlogs] = useState<BLOG[] | null>(null);
const [currentPage,setCurrentPage] = useState<number>(1)
const [blogPage,setBlogPage] = useState<number>(1)
const user = useSelector((state :RootState) => state.reducer.user )

const fetchBlogs = async () => {
const res  = await callFetchProduct();
setBlogPage(JSON.parse(res.data).blogInfo.pages)
setBlogs(JSON.parse(res.data).blogs)
}
useEffect(()=>{
fetchBlogs();
},[currentPage])

  return (
<div className="mt-[20px]">
{
  <>
  <BlogCtn blogs={blogs} />
  <Pagination page={currentPage} setPage={setCurrentPage}  totalPages={blogPage}/>
  </>
}
</div>
  )
}

export default Home