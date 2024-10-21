import './index.css'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { User } from '../../../utils/interfaces/user';
import {  NavLink, useNavigate, useParams } from 'react-router-dom';
import { Form, FormProps, Input } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { callDeleteUser, callUpdateUser, callUser } from '../../../utils/apis/calls/user';
import { useDispatch } from 'react-redux';
import { storeToken, storeUser } from '../../../redux/slices/userSlice';
import ErrorMsg from '../../../components/errorMsg/ErrorMsg';

const UserForm = () => {

const { email,role} = useSelector((state : RootState) => state.reducer.user.user)
const dispatch = useDispatch();
let [message,setMessage] = useState<string | null>(null)
let [selectedPfp,setSelectedPfp] = useState<string | null>(null)
let [pfpFile,setPfpFile] = useState<File | null>(null);
let pfpInput = useRef<HTMLInputElement | null>(null);
let [userAccount,setUserAccount] = useState<User | null>(null)
let [isAdminSetting,setIsAdminSetting] = useState<boolean>(false)
let redirect = useNavigate();
let {id} = useParams<string>(); //as email
let formData = new FormData();

let fetchUserAccount = async () => {
const plainRes = await callUser(id);
const res = JSON.parse(plainRes.data);
if(plainRes.status !== 200){
return;
}
setUserAccount(res.user);
}

useEffect(()=>{
fetchUserAccount();
},[])

let showImage = (e : ChangeEvent<HTMLInputElement>) => {
  if(e.currentTarget.files){
    let pfpImg = e.currentTarget.files[0]
    let imageUrl = URL.createObjectURL(pfpImg)
    setSelectedPfp(imageUrl)
    setPfpFile(pfpImg)
  }
}
      
let removeShownImage = () => {
setSelectedPfp(null);
setPfpFile(null);
if( pfpInput.current)
pfpInput.current.value == null
  }

const handleSubmit: FormProps<User>['onFinish'] = async (values) => {
let plainRes;
values.username && formData.append("username",values.username);

userAccount && userAccount?.role !== "user" ? 
formData.append("role","admin") 
:formData.append("role","user") 

pfpFile && formData.append("pfp",pfpFile);
try {
plainRes = await callUpdateUser(userAccount?.email,formData)
let res = JSON.parse(plainRes.data)
if(plainRes.status !== 200){
return;
}
dispatch(storeUser(res.user));
redirect("/")
} catch (error) {
setMessage("Cannot edit user ")
}
};    

const deleteUser = async () => {
dispatch(storeUser({}))
dispatch(storeToken(undefined));
localStorage.removeItem("token");
redirect("/login")
const plainRes = await callDeleteUser(userAccount?.email)
if(plainRes.status !== 200){
return;
}
}

return (
userAccount == null ?
<div className="loading w-[80%] mx-auto h-[100vh] m-[20px]"></div>
:
<div className={'flex mt-[20px] flex-col px-[30px] gap-[20px]'}>
      <h2 className="main-f fontcl text-[18px] font-[600]">Customize {id !== email && ' person '} account</h2>
      <h2 className="main-f fontcl text-[16px] font-[600]">General</h2>
      <Form 
        className='flex flex-col gap-[10px]'
        layout='vertical'
        name="basic"
        onFinish={handleSubmit}
        autoComplete="off"
        >
        <div className="flex flex-col gap-[5px] w-full">
      <p className='text-[15px] fontcl main-f' >Picture</p>
      <input style={{display: "none"}} onChange={(e)=>showImage(e)} ref={pfpInput} type="file" hidden id='pfp' name='pfp' />
    <div className="flex items-center gap-[25px]">
    {
        selectedPfp ?
        <img src={selectedPfp} alt="" className="pic border-[1px] border-[#c6c6c6] rounded-full w-[80px] h-[80px]" />
        :
        <img src={userAccount.pfp ?  `${import.meta.env.VITE_API}/api/${userAccount.pfp}` : '/static-imgs/user.jpg'} alt="" className="pic border-[1px] border-[#c6c6c6] rounded-full w-[80px] h-[80px]" />
    }
    <div className="flex main-f text-[15px] items-center gap-[10px]">
        <button type={'button'} onClick={()=>pfpInput.current?.click()} className="btn1 w-[90px] py-[8px] trans">Change</button>
{
  selectedPfp && <button onClick={removeShownImage} className={`btn1 w-[90px] py-[8px] trans`}>Remove</button>
}
    </div>
    </div>
        </div> 
       <Form.Item<User>
      label="Email address"
      name="email"
      className='w-[50%] sm:w-[96%] md:w-[90%]'
    >
      <div className="flex flex-col gap-[10px]">
      <input value={userAccount.email} className="w-full inp main-f fontcl text-[15px] h-[41px]"  placeholder={'example@gmail.com'} />
        <p className='text-[13px] fontcl6 main-f'>User email address can't be changed.</p>
      </div>
      </Form.Item>
      
      <Form.Item<User>
      label="Username"
      name="username"
      className='w-[50%] sm:w-[96%] md:w-[90%]'
      initialValue={userAccount.username}
    >
      <Input className="w-full inp main-f fontcl text-[15px] h-[41px]"  placeholder={'Username'} />
      </Form.Item>
<div className="flex flex-col gap gap-[20px]">
{
 role == "admin" &&
 <div className="flex flex-col gap-[5px] w-[50%]">
      <label className='text-[15px] fontcl main-f' htmlFor="role">Admin access</label>
      <input disabled value={userAccount.role == "user" ? "User" : "Admin"} className=" inp-re main-f text-[15px] h-[41px]"  type='text' id='role' placeholder="Size in mb or gb" name="role"/>
        </div>
}
        {/* {role == "admin" && userAccount.role == 'admin' ?
          <button className=" trans main-f text-red-600 font-[600] text-[14px] access-txt">{id === email ? "Resign as admin" : "Remove admin access"}</button>
          :role == "admin" && userAccount.role !== 'admin' &&
          <button className="trans w-fit main-f btn1 text-[14px]">Promote to admin</button>
        } */}
       {
        id !== email &&
        <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[5px] w-[50%]">
        <h2 className="main-f fontcl text-[16px] font-[600]">Account suspension </h2>
        <p className='text-[13px] fontcl6 main-f'>User with objectionable content can be suspened from partial accesses such as commenting for 14 days.</p>
        </div>
        <button className="btn-warn main-f text-[15px] w-fit">Suspend user</button>
        </div>
       }
       <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[5px] w-[50%]">
        <h2 className="main-f fontcl text-[16px] font-[600]">{id == email ? "Unpublishing account" : id !== email && "Banning account"}</h2>
        <p className='text-[13px] fontcl6 main-f'>
          {
            id == email ? 
            `This account will be deleted permanently and can't be logined again.`
             : id !== email &&
             `This account will be banned permanently and can't be permitted again.`
          }
        </p>
        </div>
<button type='button' onClick={deleteUser} className="btn-warn main-f text-[15px] w-fit">{id == email ? "Delete account" : id !== email && "Ban account"}</button>
        </div>
        </div>
{
  message !==null && <ErrorMsg text={message} />
}
<div className="flex items-center gap-[7px] mt-[40px]">
  <button className="btn1 main-f text-[15px] trans ">Add</button>
  <NavLink to={'/admin/users'} className="trans btn2 main-f text-[15px]">Back</NavLink>
</div>
         </Form>
    </div>
  )
}

export default UserForm

{/* <div className="flex flex-col gap-[10px] w-[50%]">
  <p className='text-[13px] text-red-600 main-f'>Deactiving will delete your account permanently.</p>
  <button className="btn-warn main-f text-[15px] w-fit">Deactivate account</button>
</div> */}