import { AxiosPromise, AxiosResponse } from "axios-typescript/dist/types/types";
import { BLOG } from "../../interfaces/blog";
import { Fetch } from "../apiInstance";

export const callFetchProduct = async () :Promise<AxiosResponse<any>> => {
const res  = await Fetch.get<BLOG[]>("/blogs")
return res
}

export const callShowProuct = async (id? : string) :Promise<AxiosResponse<any>> => {
const res  = await Fetch.get<BLOG>(`/blogs/${id}`)
return res
}

export const callFindProuct = async (categoryName? : string , status? : boolean | null) :Promise<AxiosResponse<any>> => {
const res  = await Fetch.get<BLOG>(`/filter-blog?category=${categoryName}&online=${status}`)
return res
}


export const callSearchProuct = async (keyword : string) :Promise<AxiosResponse<any>> => {
const res  = await Fetch.get<BLOG>(`/blog/search?title=${keyword}`)
return res
}

export const callAddProduct = async (payload : FormData) : Promise<AxiosResponse<any>> => {
const res  = await Fetch.post<BLOG>(`/blogs`,payload)
return res
}

export const callEditProduct = async (id : string | undefined,payload : FormData) : Promise<AxiosResponse<any>> => {
const res  = await Fetch.put<BLOG>(`/blogs/${id}`,payload)
return res
}

export const callDeleteProduct = async (id : string | undefined) : Promise<AxiosResponse<any>> => {
const res  = await Fetch.delete<BLOG>(`/blogs/${id}`)
return res
}