import { createSlice } from "@reduxjs/toolkit"
import { User } from "../../utils/interfaces/user";

interface InitialState extends User {
token? : string,
user : User
}

const initialState : InitialState  = {
token : undefined,
user : {}
}

export const userSlice = createSlice({
name : "user",
initialState,
reducers : {
storeUser : (state : InitialState,{payload} : {payload : User}) => {
state.user = payload;
},
storeToken : (state : InitialState,{payload} : {payload : string | undefined}) => {
state.token = payload;
}
}
})

export const {storeUser,storeToken} = userSlice.actions
export default userSlice.reducer;