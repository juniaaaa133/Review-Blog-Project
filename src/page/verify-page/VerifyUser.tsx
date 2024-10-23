import React, { useEffect, useState } from 'react'
import { callVerifyUser } from '../../utils/apis/calls/user'
import { useNavigate, useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { storeToken, storeUser } from '../../redux/slices/userSlice'

const VerifyUser = () => {

const [error,setError] = useState<boolean | null>(null)
const {token} = useParams();
const redirect = useNavigate();
const dispatch = useDispatch();

const authenticateUser = async () => {
try {
const plainRes = await callVerifyUser(token)
const res = JSON.parse(plainRes.data);
    
if(res.success){
localStorage.setItem("token",res.token)
dispatch(storeToken(res.token))
dispatch(storeUser(res.user))
setError(false);
redirect("/",{replace : true})
}
} catch (error) {
setError(true)
}
}

useEffect(()=>{
authenticateUser();
},[])

  return (
    <div className={'flex w-full h-[100vh] items-center justify-center gap-[20px] '}>
        <h2 className="sys-f fontcl2 text-[32px]">Mobocat</h2>
        <div className="h-[40px] w-[1px] bg-[#575757]"></div>
        <p className={`main-f  text-[15px] ${error ? "text-red-600" : error == null ? "fontcl" : "text-green-600"}`}>
        {
        error == null ? "Verifying user.Please wait." : error ? "Signing up failed." : "Verified.Thanks for waiting on." 
        }
        </p>
    </div>
  )
}

export default VerifyUser