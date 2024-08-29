import React from 'react'
import BlogCtn from '../../components/blog/BlogCtn'
import { blogs } from '../../utils/data'
import { useLocation, useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'

const FIlteredPage = () => {

let {category} = useParams<string>();
const [searchParams, setSearchParams] = useSearchParams();
const status = searchParams.get("status")

  return (
    <div className="flex flex-col gap-[20px] mt-[20px] px-[20px]">
    <p className="main-f fontcl text-[20px] mt-[30px]">{`${!status || status == 'any' ? '' : status} ${category} games`}</p>
    <BlogCtn blogs={blogs} />
    </div>
  )
}

export default FIlteredPage