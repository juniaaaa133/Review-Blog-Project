import React from 'react'
import './index.css'
import Category from './Category'
import { categories } from '../../utils/data'

const CategoryCtn = () => {
  return (
    <div className='ct-ctn w-full'>
        {
            categories.map((data,index) =><Category name={data.name}/>)
        }
    </div>
  )
}

export default CategoryCtn