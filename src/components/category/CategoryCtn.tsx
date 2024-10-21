import React from 'react'
import './index.css'
import Category from './Category'
import { CATEGORY } from '../../utils/interfaces/category'

const CategoryCtn = ({
  categories,
  status
} : {
  categories : CATEGORY[],
  status : string | null
}) => {
  return (
    <div className='ct-ctn w-full'>
        {
    categories.map((data,index) =><Category
     key={index}
     name={data.name}
     status={status}
     />)
        }
    </div>
  )
}

export default CategoryCtn