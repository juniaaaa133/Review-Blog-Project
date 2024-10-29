import React, { useEffect, useState } from 'react'
import './index.css'
import { IoCopyOutline } from "react-icons/io5";
import { PiDownloadSimple } from "react-icons/pi";
import { Link, Params, useLocation, useNavigate, useParams } from 'react-router-dom';
import { BLOG } from '../../utils/interfaces/blog';
import { callDeleteProduct, callShowProuct } from '../../utils/apis/calls/product';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const BlogDetail = () => {

const [copyText,setCopyText] = useState<string>("Copy")
const {id} : Params<string> = useParams<string>();
const [blog,setBlog] = useState<BLOG | undefined>();
const {role} = useSelector((state : RootState) => state.reducer.user.user)
const token = localStorage.getItem("token")
const redirect = useNavigate();

const fetchBlogs = async () => {
const res  = await callShowProuct(id);
if(res.status !== 200){
return;
}
setBlog(JSON.parse(res.data).blog)
}

useEffect(()=>{
fetchBlogs();
},[id])

const copyClipboard = () => {
navigator.clipboard.writeText(window.location.href)
setCopyText("Copied.")
}

const deleteBlog = async () => {
redirect('/')
window.location.reload();
const plainRes = await callDeleteProduct(id)
if(plainRes.status !== 200){
return;
}

}
  return (
!blog ?
<div className={'loading w-[80%] h-[100vh] mx-auto rounded-[20px] m-[20px]'}></div>
:
<div className={'lg:w-[500px] md:w-[90%] w-[700px] mx-auto mt-[20px] flex flex-col gap-[60px]'}>
{
role == "admin" && token && 
<div className="w-full flex flex-warp items-center justify-start gap-[10px]">
<Link to={`/admin/blog/${id}`} className='w-[120px] trans font-[600] btn2 main-f text-[15px] text-center'>Edit Post</Link>
<button onClick={deleteBlog} className='w-[120px] trans font-[600] btn-warn main-f text-[15px]'>Delete Post</button>

</div>
}
  <div className="flex items-center md:gap-[15px] gap-[20px] ">
      <img src={blog.icon} alt="" className=" md:w-[45px] md:h-[45px] w-[60px] h-[60px] rounded-[5px] pic" />
      
      <div className=" w-full flex flex-col">
      <div className="flex justify-between ">
      <p className="fontcl main-f md:text-[18px] text-[23px] font-[600]">{blog.title}</p>
         <div onClick={copyClipboard} className={'flex main-f fontcl gap-[4px] bcu items-center'}>
          <p className="md:text-[10px] text-[13px]">{copyText}</p>
          <div className="md:text-[14px] text-[16px]">
          <IoCopyOutline />
          </div>
         </div>
      </div>
      <div className="flex fontcl3 main-f md:text-[14px] text-[15px] gap-[12px]">
     {
      blog.categories.map((category,index) => <p key={index}>{category.name}</p> )
     }    
    </div>
         
      </div>
  </div>
  <div className="flex flex-col gap-[20px] w-full">
  <pre className="twrap fontcl main-f text-[18px]">{blog.intro} </pre>
  <img src={blog.backdrop} alt="" className="pic  w-full h-[auto] rounded-[10px]" />
  <pre className="fontcl twrap main-f text-[18px]">{blog.overview} </pre>
  </div>
  <div className="flex flex-col w-full gap-[60px]">
    <div className="flex w-full justify-between sm:flex-col gap-[30px] min:items-center">
    <div className="flex gap-[15px]">
    <img src={blog.icon} alt="" className="w-[50px] h-[50px] rounded-[5px] pic" />
    <div className="flex flex-col gap-[1px]">
    <p className="fontcl main-f md:text-[16px] text-[18px] font-[600]">{blog.title}</p>
    <div className="flex fontcl3 main-f text-[13px] gap-[12px]">
    {
      blog.categories.map((category,index) => <p key={index}>{category.name}</p> )
     }  
         </div> 
        </div>
    </div>
    <div className="btn1 sm:w-full w-fit bcu trans">
    <Link to={`${blog.gameUrl}`} target='_blank' className="flex w-full justify-center main-f py-[3px] items-center gap-[5px]">
      <div className="  main-f text-[20px]">
        <PiDownloadSimple />
      </div>
      <p className="text-[15px]">Go to download</p>
    </Link >
    </div>
    </div>
    <div className="md:hidden flex w-full justify-between items-center">
      <div className=" flex main-f flex-col items-center justify-center">
      <div className="flex items-center text-[16px] font-[600] main-f ftoncl gap-[5px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3">
<path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
</svg>
          <div>{blog.rating}</div>
      </div>
      <p className="fontcl3 text-[12px]">Rating</p>
      </div>

      <div className="w-[.5px] h-[45px] bg-[#d2d2d2]"></div>
      <div className=" flex main-f flex-col items-center justify-center">
      <h2 className="fontcl text-[16px] font-[600]">{
      blog.isOnline === "true" ? "Online" 
      : blog.isOnline === "false" ? "Offline"
      : "Hybird"
      }</h2>
      <p className="fontcl3 text-[12px]">Mode</p>
      </div>
<div className="w-[.5px] h-[45px] sm:hidden bg-[#d2d2d2]"></div>
      <div className=" flex main-f flex-col items-center justify-center">
      <h2 className="fontcl text-[16px] font-[600]">{blog.size}</h2>
      <p className="fontcl3 text-[12px]">Size</p>
      </div>

      <div className="w-[.5px] h-[45px] bg-[#d2d2d2]"></div>
      <div className=" flex main-f flex-col items-center justify-center">
      <h2 className="fontcl text-[16px] font-[600]">{blog.releasedDate}</h2>
      <p className="fontcl3 text-[12px]">Released on</p>
      </div>
    </div>
{
//mb
}
    <div className="MD:hidden flex gap-[20px] w-full flex-wrap justify-between items-center">
      <div className="prt bg-red-0 flex justify-evenly items-center w-full">
      <div className=" flex main-f flex-col items-center justify-center">
      <div className="flex items-center text-[16px] font-[600] main-f ftoncl gap-[5px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3">
<path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
</svg>
          <div>{blog.rating}</div>
      </div>
      <p className="fontcl3 text-[12px]">Rating</p>
      </div>

      <div className="w-[.5px] h-[45px] bg-[#d2d2d2]"></div>
      <div className=" flex main-f flex-col items-center justify-center">
      <h2 className="fontcl text-[16px] font-[600]">{
      blog.isOnline === "true" ? "Online" 
      : blog.isOnline === "false" ? "Offline"
          : "Hybird"
    }</h2>
      <p className="fontcl3 text-[12px]">Mode</p>
      </div>
      </div>
      <div className="prt bg-red-0 flex justify-evenly items-center w-full">
      <div className=" flex main-f flex-col items-center justify-center">
      <h2 className="fontcl text-[16px] font-[600]">{blog.size}</h2>
      <p className="fontcl3 text-[12px]">Size</p>
      </div>

      <div className="w-[.5px] h-[45px] bg-[#d2d2d2]"></div>
      <div className=" flex main-f flex-col items-center justify-center">
      <h2 className="fontcl text-[16px] font-[600]">{blog.releasedDate}</h2>
      <p className="fontcl3 text-[12px]">Released on</p>
      </div>
      </div>
     
      
      
    </div>
  </div>
</div>
  )
}

export default BlogDetail

{/* <div className="flex w-full flex-wrap justify-between items-center">
            <div className="flex w-[50%]  items-center justify-between">
            <div className="w-[49%] flex main-f flex-col items-center justify-center">
            <div className="flex items-center text-[16px] font-[600] main-f ftoncl gap-[5px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3">
  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
</svg>
                <div>3.7</div>
            </div>
            <p className="fontcl3 text-[12px]">Rating</p>
            </div>

            <div className="w-[.5px] h-[45px] bg-[#d2d2d2]"></div>
            <div className="w-[49%] flex main-f flex-col items-center justify-center">
            <h2 className="fontcl text-[16px] font-[600]">Offline</h2>
            <p className="fontcl3 text-[12px]">Status</p>
            </div>
            </div>
    <div className="flex w-[50%]  items-center justify-between">
    <div className="w-[.5px] h-[45px] sm:hidden bg-[#d2d2d2]"></div>
            <div className="w-[49%] flex main-f flex-col items-center justify-center">
            <h2 className="fontcl text-[16px] font-[600]">155mb</h2>
            <p className="fontcl3 text-[12px]">Rating</p>
            </div>

            <div className="w-[.5px] h-[45px] bg-[#d2d2d2]"></div>
            <div className="w-[49%] flex main-f flex-col items-center justify-center">
            <h2 className="fontcl text-[16px] font-[600]">30 May,2020</h2>
            <p className="fontcl3 text-[12px]">Released on</p>
            </div>
    </div>
            
          </div> */}