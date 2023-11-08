import {useDispatch} from "react-redux"
import axios from "axios"
import { setAuth, setAvatar } from "../store/authSlice"
import { useEffect, useState } from "react"
export const useLoadingWithRefresh=()=>{
    const [loading,setLoading]=useState(true)
    const dispatch=useDispatch()
    useEffect(()=>{
        (async()=>{
           try {
            const {data}= await axios.get("http://localhost:8000/api/refresh",{withCredentials:true})
            dispatch(setAuth(data))
            // const {data}=await avatar
            dispatch(setAvatar(data))
            setLoading(false)
           } catch (error) {
            console.log(error)
            setLoading(false)
           }
        })()
        //eslint-disable-next-line
    },[])
    return loading;
}