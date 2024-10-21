import React, { useEffect, useState } from 'react'
import './index.css'
import CategoryCtn from '../../components/category/CategoryCtn'
import FilterCtn from '../../components/filter/FilterCtn'
import { callFetchCategories } from '../../utils/apis/calls/category'
import { CATEGORY } from '../../utils/interfaces/category'

const CategoryPage = () => {  

let [status,setStatus] = useState<string | null>(null);
let [categories,setCategories] = useState<CATEGORY[] | null>(null)

const fetchCategories = async () => {
const res = await callFetchCategories();
if(res.status !== 200){
return;
}
const categories = JSON.parse(res.data)
setCategories(categories);
}

useEffect(()=>{
fetchCategories();
},[])

  return (
    categories ? 
    <div className="mt-[20px] px-[20px] flex flex-col gap-[20px]">
        <p className="main-f fontcl text-[20px] mt-[30px]">Filter status</p>
        <FilterCtn setStatus={setStatus} />
        <p className="main-f fontcl text-[20px] my-[30px]">Categories</p>
        <CategoryCtn status={status} categories={categories}/>
    </div>
    :
    <div className="">LOADING...</div>
  )
}

export default CategoryPage