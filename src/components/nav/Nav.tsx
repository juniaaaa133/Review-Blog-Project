import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';
import './index.css'

const Nav = () => {

  const [isOpened,setIsOpened] = useState<boolean>(false);
  const [isOpenedPfp,setIsOpenedPfp] = useState<boolean>(false);
  const [dummyUserAuth,setDummyUserAuth] = useState<boolean>(true);
  const text = "example@gmail.com";

  return (
 <>
    <div className={`sticky z-[7] top-0 flex justify-between items-center w-full h-fit py-[10px] px-[40px] bg-white shadow-md`}>
      <div className="flex items-center justify-between gap-[15px]">
        <p onClick={()=>setIsOpened(true)} className="MD:hidden text-[20px] bcu"><FiMenu/></p>
        <h2 className='fontcl2 text-[20px] sys-f'>Mobocat</h2>
  <div className="flex ml-[30px] items-center gap-[20px]">
  <NavLink to={'/'} className={`md:hidden fontcl2H text-[15px] main-f`} >Home</NavLink>
        <NavLink to={'/'} className={`md:hidden fontcl2H text-[15px] main-f`} >Category</NavLink>
        <NavLink to={'/'} className={`md:hidden fontcl2H text-[15px] main-f`} >Home</NavLink>

  </div>
      </div>
      <img onClick={()=>setIsOpenedPfp(!isOpenedPfp)} src={'/static-imgs/user.jpg'} alt="" className="border-[1px] hover:opacity-[.6] bcu trans border-blue-300 pic w-[30px] h-[30px] rounded-full" />
    </div>

    <div className={`${isOpenedPfp ? 'flex' : 'hidden'} shadow-lg fixed z-[8] flex-col gap-[20px] right-[40px] top-[50px] w-[250px] h-fit p-[20px] bg-white`}>
      <h2 className="main-f fontcl3 text-[15px]">Profile Setting</h2>
   {
    dummyUserAuth ?
    <div className="flex gap-[10px]">
      <img src="https://i.pinimg.com/736x/a0/4d/4e/a04d4ee826a4e4096841ebf18f0d5e7a.jpg" alt="" className="rounded-full w-[50px] h-[50px] pic" />
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
      <div className="flex flex-col gap-[10px]">
  <NavLink to={'/'} className={`md:hidden fontcl2H text-[15px] main-f`} >Home</NavLink>
        <NavLink to={'/'} className={`MD:hidden fontcl2H text-[15px] main-f`} >Category</NavLink>
        <NavLink to={'/'} className={`MD:hidden fontcl2H text-[15px] main-f`} >Home</NavLink>
      </div>
    </div>
 </>
  )
}

export default Nav