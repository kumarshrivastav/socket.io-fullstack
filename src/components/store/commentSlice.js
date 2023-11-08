import {createSlice} from "@reduxjs/toolkit"
const initialSlice={
    username:'',
    comment:''
}

export const commentSlice=createSlice({
    name:'comment',
    initialSlice,
    reducers:{
        setComment:(state,payload)=>{
            state.username=payload.action.username
            state.comment=payload.action.comment
        }
    }
})

export const {setComment}=commentSlice.actions
export default commentSlice.reducers