import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import profilePic from "../../assets/images/Avatar.jpg"
import { avatar} from '../../http'
import {useDispatch} from "react-redux"
import { setAvatar } from '../store/authSlice'
import {useSelector} from "react-redux"
const Avatar = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [image,setImage]=useState(profilePic)
    const {avatar:avatarFromState,user}=useSelector((state)=>state.authSlice)
    const avatarCss={
        height:'50px',
        width:'50px',
        borderRadius:'50%',
        overflow:'hidden'
    }
    const handleAvatar=async (e)=>{
        let file=e.target.files[0]
        console.log(file)
        let reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend=async function (){
            // const {data}=await avatarchange({avatarchange:reader.result})
            // console.log(data)
            dispatch(setAvatar({avatar:reader.result}))
            setImage(reader.result)
        }
        
        // dispatch(setAvatar())
    }  
    const handleNext=async ()=>{
        if(!avatarFromState){ 
            return alert('please upload your profile photo')
        }
        try {
            const {data}= await avatar({avatarFromState})
            console.log(data)
            dispatch(setAvatar({avatar:data}))
            return navigate("/profile")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
    <img style={avatarCss} src={user?.avatar ? user?.avatar : avatarFromState ? avatarFromState:image} alt=''/>
    <label htmlFor='avatar' style={{cursor:'pointer'}}>Choose your photo</label>
    <input style={{display:'none'}} type='file' id='avatar' name='avatar' onChange={handleAvatar}/><br/>
    <button onClick={handleNext}>Next</button>
    </>
  )
}
export default Avatar