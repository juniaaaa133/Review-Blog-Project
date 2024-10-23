import React, { PropsWithChildren, ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Outlet, OutletProps, useNavigate } from 'react-router'

const AuthMiddleware = ({children,isMounted} : {
  children? : React.JSX.Element | React.JSX.Element[]
  isMounted : boolean
}) => {

let {role} = useSelector((state : RootState) => state.reducer.user.user)
let token = localStorage.getItem("token");
let redirect = useNavigate();

const setPageGate = () => {
if(!role || !token){
return redirect("/login")
}
}

useEffect(()=>{
setPageGate();
},[])

return isMounted ? <Outlet /> : <>{children}</>
}

export default AuthMiddleware