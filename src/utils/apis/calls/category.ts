import { AxiosResponse } from "axios-typescript/dist/types/types"
import { CATEGORY } from "../../interfaces/category"
import { Fetch } from "../apiInstance"

export const callFetchCategories = async () :Promise<AxiosResponse<any>> => {
    const res  = await Fetch.get<CATEGORY[]>("/categories")
    return res
    }