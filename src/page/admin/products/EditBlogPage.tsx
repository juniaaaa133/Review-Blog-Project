import React, { useEffect, useState } from 'react'
import BlogFormComp from '../../../components/blogform/BlogFormComp'
import { useParams } from 'react-router'
import { callShowProuct } from '../../../utils/apis/calls/product';
import { BLOG } from '../../../utils/interfaces/blog';

const EditBlogPage = () => {

const [blog,setBlog] = useState<BLOG | undefined>(undefined)
const {id} = useParams();

const fetchBlog = async () => {
const plainRes = await callShowProuct(id)
if(plainRes.status !== 200){
return;
}
setBlog(JSON.parse(plainRes.data).blog)
}

useEffect(()=>{
fetchBlog();
},[])

return blog ? <BlogFormComp blog={blog} create={false} /> : <div className={'loading w-[80%] h-[100vh] m-auto my-[20px]'}></div>
}

export default EditBlogPage