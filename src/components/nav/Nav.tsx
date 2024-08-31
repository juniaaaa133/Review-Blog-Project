import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { TbSearchOff } from "react-icons/tb";
import { IoShieldCheckmark } from "react-icons/io5";

import './index.css'

const Nav = () => {

  const [isOpened,setIsOpened] = useState<boolean>(false);
  const [isOpenedPfp,setIsOpenedPfp] = useState<boolean>(false);
  const [dummyUserAuth,setDummyUserAuth] = useState<boolean>(true);
  const [isOpenedSearchBar,setIsOpenedSearchBar] = useState<boolean>(false);
  const text = "example@gmail.com";
  let userStatus = 'admin';

  return (
 <>
    <div className={`sticky z-[7] top-0 flex justify-between items-center w-full h-[55px] py-[10px] px-[40px] bg-white shadow-md`}>
      <div className="flex items-center justify-between gap-[15px]">
        <p onClick={()=>setIsOpened(true)} className="MD:hidden text-[20px] bcu"><FiMenu/></p>
        <h2 className='fontcl2 sm:text-[17px] text-[20px] sys-f'>Mobocat</h2>
  <div className="flex ml-[30px] items-center gap-[20px]">
  <NavLink to={'/'} className={`md:hidden fontcl2H text-[15px] main-f`} >Home</NavLink>
        <NavLink to={'/categories'} className={`md:hidden fontcl2H text-[15px] main-f`} >Category</NavLink>
        <NavLink to={'/admin/products'} className={`md:hidden fontcl2H text-[15px] main-f`} > Products</NavLink>
        <NavLink to={'/admin/users'} className={`md:hidden fontcl2H text-[15px] main-f`} > Users</NavLink>

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
      userStatus == 'admin' ?
      <div onClick={()=>setIsOpenedPfp(!isOpenedPfp)} className="relative w-fit h-fit">
              <img  src={'/static-imgs/user.jpg'} alt="" className="border-[1px] hover:opacity-[.6] bcu trans border-blue-300 pic w-[30px] h-[30px] rounded-full" />
      <div className="absolute bottom-[-5px] right-[-4px] w-fit h-fit text-[14px] fontcl4 rotate-[0deg]">
        < IoShieldCheckmark />
      </div>
      </div>
      :
      <img onClick={()=>setIsOpenedPfp(!isOpenedPfp)} src={'/static-imgs/user.jpg'} alt="" className="border-[1px] hover:opacity-[.6] bcu trans border-blue-300 pic w-[30px] h-[30px] rounded-full" />
    }
      </div>
    </div>
    <div  className={`fixed z-[5] w-full flex trans  flex-col items-center h-fit bg-[#ffffff] p-[10px] ${isOpenedSearchBar ? 'top-[55px]' : "top-[-60px]"}`}>
    <div className={`md:w-[80%] sm:w-[95%] w-[500px] gap-[15px] flex flex-col`}>
      <div className="flex items-center gap-[15px]">
      <input type="text" placeholder={'Search'} className="text-[15px] fontcl main-f inp" />
      <div className="text-[12px] bcu">
        <RxCross1 />
      </div>
      </div>
    <div className="shadow-md w-full bg-[#fffcfc] flex flex-col gap-[8px] h-fit">
      {/* <Link to='/' className={'trans w-full srh-res bcu text-[15px] fontcl3 main-f px-[20px] py-[5px] hover:bg-[#e8e8e8]'}>Smashing Four</Link>
      <Link to='/' className={'trans w-full srh-res bcu text-[15px] fontcl3 main-f px-[20px] py-[5px] hover:bg-[#e8e8e8]'}>Smashing Four</Link>
      <Link to='/' className={'trans w-full srh-res bcu text-[15px] fontcl3 main-f px-[20px] py-[5px] hover:bg-[#e8e8e8]'}>Smashing Four</Link>
      <Link to='/' className={'trans w-full srh-res bcu text-[15px] fontcl3 main-f px-[20px] py-[5px] hover:bg-[#e8e8e8]'}>Smashing Four</Link>
      <Link to='/' className={'trans w-full srh-res bcu text-[15px] fontcl3 main-f px-[20px] py-[5px] hover:bg-[#e8e8e8]'}>Smashing Four</Link> */}

    </div>
    </div>
    </div>

    <div className={`${isOpenedPfp ? 'flex' : 'hidden'} shadow-lg fixed z-[8] flex-col gap-[20px] right-[40px] top-[50px] w-[270px] h-fit p-[20px] bg-white`}>
      <h2 className="main-f fontcl3 text-[15px]">Profile Setting</h2>
   {
    dummyUserAuth ?
    <div className="flex gap-[10px]">
      {
        userStatus == 'admin' ?
        <div onClick={()=>setIsOpenedPfp(!isOpenedPfp)} className="relative w-fit h-fit">
<img src="https://i.pinimg.com/736x/a0/4d/4e/a04d4ee826a4e4096841ebf18f0d5e7a.jpg" alt="" className="rounded-full border-blue-400 border-[1px] w-[50px] h-[50px] pic" />
<div className="absolute bottom-[-4px] right-[-2px] w-fit h-fit text-[16px] fontcl4 rotate-[0deg]">
  < IoShieldCheckmark />
</div>
</div>
:
<img src="https://i.pinimg.com/736x/a0/4d/4e/a04d4ee826a4e4096841ebf18f0d5e7a.jpg" alt="" className="rounded-full w-[50px] h-[50px] pic" />
      }
      <div className="flex flex-col gap-[2px] main-f ">
        <p className="fontcl text-[14px]">Rein Ogga Myo</p>
        <p className="fontcl3 text-[13px]">{text.length > 20 ? text.substring(0,20) + '...' : text }</p>
        <button className="btn2 text-[14px] main-f mt-[20px] trans">Manage accuont</button>
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
        <h2 className='fontcl2 text-[20px] sys-f'>Mobocat</h2>
      </div>
      <div className="flex flex-col gap-[10px] mt-[10px]">
  <NavLink to={'/'} className={`MD:hidden fontcl2H text-[15px] main-f`} >Home</NavLink>
        <NavLink to={'/categories'} className={`MD:hidden fontcl2H text-[15px] main-f`} >Category</NavLink>
        <NavLink to={'/admin/products'} className={`md:hidden fontcl2H text-[15px] main-f`} > Products</NavLink>
        <NavLink to={'/admin/users'} className={`md:hidden fontcl2H text-[15px] main-f`} > Users</NavLink>
      </div>
    </div>
 </>
  )
}

export default Nav