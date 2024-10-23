import axios from "axios-typescript"
import { AxiosRequestConfig } from "axios-typescript/dist/types/types"

const refreshToken = () => {
let tokenStorage = localStorage.getItem("token")
if(tokenStorage !== null && tokenStorage !== undefined){
return tokenStorage
}
}

export const Fetch = axios.create({
baseURL: `${import.meta.env.VITE_API}/api`,
})

Fetch.interceptors.request.use((config : AxiosRequestConfig) => {
if(refreshToken() !== null && refreshToken() !== undefined){
    config.headers.Authorization = `Bearer ${refreshToken()}`
    console.log(config.headers.Authorization)
}
return config
},
err => {
Promise.reject(err)
})