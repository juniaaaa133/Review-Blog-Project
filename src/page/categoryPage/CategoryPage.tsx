import React from 'react'
import './index.css'
import CategoryCtn from '../../components/category/CategoryCtn'

const CategoryPage = () => {
  return (
    <div className="mt-[20px] px-[20px]">
        <p className="main-f fontcl text-[20px] my-[20px]">Categories</p>
        <CategoryCtn />
    </div>
  )
}

export default CategoryPage