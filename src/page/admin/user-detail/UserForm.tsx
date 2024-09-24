import './index.css'
import React, { ChangeEvent, useRef, useState } from 'react'
import { User } from '../../../utils/interfaces/user';
import {  NavLink, useParams } from 'react-router-dom';
import { Form, FormProps, Input } from 'antd';

interface OtherProps extends User {
  create : boolean;
  authAccount : string;
}

const UserForm = (props :OtherProps) => {

  const {
    create ,
    authAccount
  } = props;

let [selectedPfp,setSelectedPfp] = useState<string | null>(null)
let pfpInput = useRef<HTMLInputElement | null>(null);
let {id} = useParams<string>();

let showImage = (e : ChangeEvent<HTMLInputElement>) => {
  if(e.currentTarget.files){
    let pfpImg = e.currentTarget.files[0]
    let imageUrl = URL.createObjectURL(pfpImg)
    setSelectedPfp(imageUrl)
    console.log(e.currentTarget.files)
  }
      }
      
let removeShownImage = () => {
      setSelectedPfp(null);
      if( pfpInput.current)
      pfpInput.current.value == null
  }

  const handleSubmit: FormProps<User>['onFinish'] = (values) => {
    console.log('Success:', values);
  };    

  return (
<div className={'flex mt-[20px] flex-col px-[30px] gap-[20px]'}>
      <h2 className="main-f fontcl text-[18px] font-[600]">Customize {authAccount !== id && ' person '} account</h2>
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
        <img src={'/static-imgs/user.jpg'} alt="" className="pic border-[1px] border-[#c6c6c6] rounded-full w-[80px] h-[80px]" />
    }
    <div className="flex main-f text-[15px] items-center gap-[10px]">
        <button onClick={()=>pfpInput.current?.click()} className="btn1 w-[90px] py-[8px] trans">Change</button>
{
  selectedPfp && <button onClick={removeShownImage} className={`btn1 w-[90px] py-[8px] trans`}>Remove</button>
}
    </div>
    </div>
        </div> 
       <Form.Item<User>
      label="Email address"
      name="email"
      className='w-[50%]'
    >
      <div className="flex flex-col gap-[10px]">
      <input disabled={!create} value={props.email} className="w-full inp main-f fontcl text-[15px] h-[41px]"  placeholder={'example@gmail.com'} />
      {
        !create &&
        <p className='text-[13px] fontcl6 main-f'>User email address can't be changed.</p>
      }
      </div>
      </Form.Item>
      
      <Form.Item<User>
      label="Username"
      name="username"
      className='w-[50%]'
    >
      <Input value={props.username} className="w-full inp main-f fontcl text-[15px] h-[41px]"  placeholder={'Username'} />
      </Form.Item>
{
  !create &&
<div className="flex flex-col gap gap-[20px]">
<div className="flex flex-col gap-[5px] w-[50%]">
      <label className='text-[15px] fontcl main-f' htmlFor="role">Admin access</label>
      <input disabled value={'Admin'} className=" inp-re main-f text-[15px] h-[41px]"  type='text' id='role' placeholder="Size in mb or gb" name="role"/>
        </div>
        { props.role == 'admin' ?
          <button className=" trans main-f text-red-600 font-[600] text-[14px] access-txt">{authAccount === id ? "Resign as admin" : "Remove admin access"}</button>
          :
          <button className="trans w-fit main-f btn1 text-[14px]">Promote to admin</button>
        }
       {
        authAccount !== id &&
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
        <h2 className="main-f fontcl text-[16px] font-[600]">{authAccount == id && !create ? "Unpublishing account" : authAccount !== id && !create && "Banning account"}</h2>
        <p className='text-[13px] fontcl6 main-f'>
          {
            authAccount == id && !create ? 
            `This account will be deleted permanently and can't be logined again.`
             : authAccount !== id && !create &&
             `This account will be banned permanently and can't be permitted again.`
          }
        </p>
        </div>
        <button className="btn-warn main-f text-[15px] w-fit">{authAccount == id && !create ? "Delete account" : authAccount !== id && !create && "Ban account"}</button>
        </div>
        </div>
}
<div className="flex items-center gap-[7px] mt-[40px]">
  <button className="btn1 main-f text-[15px] trans ">{create ? "Add" : "Update" }</button>
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