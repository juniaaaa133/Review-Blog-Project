import React from 'react'
import './index.css'
import CategoryCtn from '../../components/category/CategoryCtn'
import FilterCtn from '../../components/filter/FilterCtn'

const CategoryPage = () => {
  return (
    <div className="mt-[20px] px-[20px] flex flex-col gap-[20px]">
        <p className="main-f fontcl text-[20px] mt-[30px]">Filter status</p>
        <FilterCtn />
        <p className="main-f fontcl text-[20px] my-[30px]">Categories</p>
        <CategoryCtn />
    </div>
  )
}

export default CategoryPage