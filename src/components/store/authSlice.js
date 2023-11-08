import {createSlice} from "@reduxjs/toolkit"
const initialState={
    user:null,
    avatar:'',
    isAuth:false
}
export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAuth:(state,action)=>{
            // console.log("Action:",action.payload)
            state.user=action.payload.user
            state.isAuth=action.payload.isAuth
        },
        setAvatar:(state,action)=>{
            state.avatar=action.payload?.avatar
        }
    }
})
export const {setAuth,setAvatar}=authSlice.actions
export default authSlice.reducer