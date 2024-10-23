import { AxiosResponse } from "axios-typescript/dist/types/types"
import { Fetch } from "../apiInstance"
import { User } from "../../interfaces/user"

export const callLogin = async (payload : User) :Promise<AxiosResponse<any>> => {try {
const res  = await Fetch.post(`/login`,payload)
return res
} catch (error) {
throw new Error("Failed")
}  
}
        
export const callRegister = async (payload : User) :Promise<AxiosResponse<any>> => {try {
const res  = await Fetch.post(`/register`,payload)
return res
} catch (error) {
throw new Error("Failed")
}  
}

export const callVerifyUser = async (token : string | undefined) :Promise<AxiosResponse<any>> => {
try {
const res  = await Fetch.get(`/confirm-register/${token}`)
return res
} catch (error) {
throw new Error("Failed")
}  
}
    
export const callUser = async (id : string | undefined) :Promise<AxiosResponse<any>> => {
try {
const res  = await Fetch.get(`/users/${id}`)
return res
} catch (error) {
throw new Error("Failed")
} 
}

export const callUpdateUser = async (email : string | undefined,payload : FormData) :Promise<AxiosResponse<any>> => {
try {
const res  = await Fetch.put(`/users/${email}`,payload)
return res
} catch (error) {
throw new Error("Failed")
} 
}
    

export const callDeleteUser = async (email : string | undefined) :Promise<AxiosResponse<any>> => {
try {
const res  = await Fetch.delete(`/users/${email}`)
return res
} catch (error) {
throw new Error("Failed")
} 
}


export const callFetchUsers = async () :Promise<AxiosResponse<any>> => {
try {
const res  = await Fetch.get(`/users`)
return res
} catch (error) {
throw new Error("Failed")
} 
}