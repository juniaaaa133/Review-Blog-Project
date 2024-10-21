import React, { useEffect, useState } from 'react'
import BlogCtn from '../../components/blog/BlogCtn'
import { Params, useLocation, useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { callFindProuct } from '../../utils/apis/calls/product'
import { BLOG } from '../../utils/interfaces/blog'

const FIlteredPage = () => {

let {category} = useParams<string>();
const [searchParams, setSearchParams] = useSearchParams();
const status = searchParams.get("status")
const [filteredBlogs,setFilteredBlogs] = useState<BLOG[] | null>(null)

const fetchFilteredProduct = async () => {
const res = await callFindProuct(category,status == "offline" ? false : status == "online" ? true :null)
if(res.status !== 200){
console.log('Something went wrong')
return;
}
setFilteredBlogs(JSON.parse(res.data).blogs)
}

useEffect(()=>{
fetchFilteredProduct();
},[])

  return (
  <div className="flex flex-col gap-[20px] mt-[20px] px-[20px]">
  <p className="main-f fontcl text-[20px] mt-[30px]">{`${!status || status == 'any' ? '' : status} ${category} games`}</p>
  <BlogCtn blogs={filteredBlogs} />
  </div>
  )
}

export default FIlteredPage