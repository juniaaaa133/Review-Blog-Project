import React, { ChangeEvent, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink, redirect } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { TbSearchOff } from "react-icons/tb";
import { IoShieldCheckmark } from "react-icons/io5";
import './index.css'
import { BLOG } from '../../utils/interfaces/blog';
import { callSearchProuct } from '../../utils/apis/calls/product';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { storeToken, storeUser } from '../../redux/slices/userSlice';

const Nav = () => {

  const [isOpened,setIsOpened] = useState<boolean>(false);
  const [isOpenedPfp,setIsOpenedPfp] = useState<boolean>(false);
  const [dummyUserAuth,setDummyUserAuth] = useState<boolean>(false);
  const [isOpenedSearchBar,setIsOpenedSearchBar] = useState<boolean>(false);
  const {
    role,
    username,
    email,
    pfp,
    _id
  } = useSelector((state : RootState) => state.reducer.user.user);
  let dispatch = useDispatch();

  let [blogs,setBlogs] = useState<BLOG[]>([]);

  const searchBlog = async (e : ChangeEvent<HTMLInputElement>) => {
  if(e.currentTarget.value.trim() == "" ){
  setBlogs([]);
  return;
  }
  const res = await callSearchProuct(e.currentTarget.value)
  const modifiedBlogs : BLOG[] = JSON.parse(res.data).blogs;

  if(res.status !== 200 || modifiedBlogs.length == 0){
  setBlogs([]);
  return;
  }
  setBlogs(modifiedBlogs)
  }

  const logout = () => {
  dispatch(storeToken(undefined));
  dispatch(storeUser({}))
  localStorage.removeItem("token")
  setIsOpened(false)
  redirect("/")
  }
  return (
 <>
    <div className={`sticky z-[7] top-0 flex justify-between items-center w-full h-[55px] py-[10px] px-[40px] bg-white shadow-md`}>
      <div className="flex items-center justify-between gap-[15px]">
        <p onClick={()=>setIsOpened(true)} className="MD:hidden text-[20px] bcu"><FiMenu/></p>
        <Link to="/" className='fontcl2 sm:text-[17px] text-[20px] sys-f'>Mobocat</Link>
  <div className="flex ml-[30px] items-center gap-[20px]">
  <NavLink to={'/'} className={`md:hidden fontcl2H text-[15px] main-f`} >Home</NavLink>
        <NavLink to={'/categories'} className={`md:hidden fontcl2H text-[15px] main-f`} >Category</NavLink>
{
role == "admin" && <NavLink to={'/admin/users'} className={`md:hidden fontcl2H text-[15px] main-f`} > Users</NavLink>
}
{
  localStorage.getItem("token") && role &&
  <NavLink to={'/'} onClick={logout} className={`md:hidden fontcl2H text-[15px] main-f`} >Logout</NavLink>
}

  </div>

      </div>
      <div className="flex items-center gap-[20px]">
    <div 
    onClick={()=>setIsOpenedSearchBar(!isOpenedSearchBar)}
    className="text-[20px] fontcl bcu">
      {
        isOpenedSearchBar ?
        <TbSearchOff />
        :
        <CiSearch /> 
      }
    </div>
    {
      role == 'admin' ?
      <div onClick={()=>setIsOpenedPfp(!isOpenedPfp)} className="relative w-fit h-fit">
              <img  src={pfp ? `${import.meta.env.VITE_API}/api/${pfp}` : '/static-imgs/user.jpg'} alt="" className="border-[1px] hover:opacity-[.6] bcu trans border-blue-300 pic w-[30px] h-[30px] rounded-full" />
      <div className="absolute bottom-[-5px] right-[-4px] w-fit h-fit text-[14px] fontcl4 rotate-[0deg]">
        < IoShieldCheckmark />
      </div>
      </div>
      :
      <img onClick={()=>setIsOpenedPfp(!isOpenedPfp)} src={pfp ? `${import.meta.env.VITE_API}/api/${pfp}` : '/static-imgs/user.jpg'} alt="" className="border-[1px] hover:opacity-[.6] bcu trans border-blue-300 pic w-[30px] h-[30px] rounded-full" />
    }
      </div>
    </div>
    <div onClick={()=>setIsOpenedSearchBar(false)} className={`fixed z-[4] w-full h-[100vh] bg-[#2121213d] ${isOpenedSearchBar ? 'top-[55px]' : "hidden"}`}></div>
    <div className={`fixed z-[5] w-full flex trans flex-col items-center h-fit  ${isOpenedSearchBar ? 'top-[55px]' : "top-[-60px]"}`}>
    <div className={`w-full p-[10px] px-[40px] items-center bg-[#ffffff] gap-[15px] flex flex-col`}>
      <div className="flex  items-center w-[500px] md:w-[50%] sm:w-[80%] gap-[15px]">
      <input onChange={(e)=>searchBlog(e)} type="text" placeholder={'Search'} className="text-[15px] fontcl main-f inp" />
      <div className="text-[12px] bcu">
        <RxCross1 />
      </div>
      </div>
    </div>
        <div className={`shadow-md w-[500px] md:-[50%] sm:w-[80%] bg-[#fffcfc] flex flex-col gap-[8px] h-fit ${!isOpenedSearchBar || blogs.length == 0 && "hidden"}`}>
        {
        blogs.map(({title,_id},index) => (
        <Link key={index} to={`/${_id}`} onClick={()=>{
          setBlogs([])
          setIsOpenedSearchBar(false)
        }} className={'trans w-full srh-res bcu text-[15px] fontcl3 main-f px-[20px] py-[5px] hover:bg-[#e8e8e8]'}>{title}</Link>
        ))
      }

    </div>
    </div>

    <div className={`${isOpenedPfp ? 'flex' : 'hidden'} shadow-lg fixed z-[8] flex-col gap-[20px] right-[40px] top-[50px] w-[270px] h-fit p-[20px] bg-white`}>
      <h2 className="main-f fontcl3 text-[15px]">Profile Setting</h2>
   {
    role ?
    <div className="flex gap-[10px]">
      {
        role == 'admin' ?
        <div onClick={()=>setIsOpenedPfp(!isOpenedPfp)} className="relative w-fit h-fit">
<img src={pfp ? `${import.meta.env.VITE_API}/api/${pfp}` : '/static-imgs/user.jpg'} alt="" className="rounded-full border-blue-400 border-[1px] w-[50px] h-[50px] pic" />
<div className="absolute bottom-[-4px] right-[-2px] w-fit h-fit text-[16px] fontcl4 rotate-[0deg]">
  < IoShieldCheckmark />
</div>
</div>
:
<img src={pfp ? `${import.meta.env.VITE_API}/api/${pfp}` : '/static-imgs/user.jpg'} alt="" className="rounded-full w-[50px] h-[50px] pic" />
      }
      <div className="flex flex-col gap-[2px] main-f ">
        <p className="fontcl text-[14px]">{username && username.length > 22 ? username.substring(0,22) + '...' : username}</p>
        <p className="fontcl3 text-[13px]">{email && email.length > 20 ? email.substring(0,20) + '...' : email }</p>
        <Link onClick={()=>setIsOpenedPfp(false)} to={`/account/${email}`} className="btn2 text-[14px] main-f mt-[20px] trans">Manage accuont</Link>
      </div>
    </div>
    :
    <div className="flex flex-col gap-[15px]">
    <Link className='main-f btn1 text-[15px] text-center trans' to='/login'>Login </Link>
      <Link className='main-f btn2 text-[15px] text-center trans' to='/sign-up'>Create new account</Link>
      
    </div>
   }
    </div>

    <div onClick={()=>{
      setIsOpened(false)
      setIsOpenedPfp(false)
    }} className={`${isOpened || isOpenedPfp ? 'block' : 'hidden'} fixed z-[7] top-0 left-0 w-full h-[100vh] bg-[#5656560b]`}></div>
    <div className={`${isOpened ? 'left-0' : 'left-[-100%]'} flex flex-col gap-[20px] px-[20px] pt-[8px] fixed z-[8] top-0 w-[200px] h-[100vh] bg-white shadow-sm trans`}>
    <div className=" flex items-center gap-[15px]">
        <p onClick={()=>setIsOpened(false)} className="text-[20px] bcu"><RxCross1/></p>
        <Link to="/" className='fontcl2 text-[20px] sys-f'>Mobocat</Link>
      </div>
      <div className="flex flex-col gap-[40px] mt-[10px]">
  <NavLink onClick={()=>setIsOpened(false)} to={'/'} className={`MD:hidden fontcl2H text-[15px] main-f`} >Home</NavLink>
        <NavLink onClick={()=>setIsOpened(false)} to={'/categories'} className={`MD:hidden fontcl2H text-[15px] main-f`} >Category</NavLink>
{
  role == "admin" && <NavLink onClick={()=>setIsOpened(false)} to={'/admin/users'} className={`MD:hidden fontcl2H text-[15px] main-f`} > Users</NavLink>
}
{
  localStorage.getItem("token") && role &&
  <NavLink onClick={logout} to={'/'} className={`MD:hidden fontcl2H text-[15px] main-f`} >Logout</NavLink>
}
      </div>
    </div>
 </>
  )
}

export default Nav