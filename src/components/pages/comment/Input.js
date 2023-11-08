import React, { useState } from 'react'
import { sendcomment } from '../../../http'
import {setComment} from "../../store/commentSlice"
import {useDispatch, useSelector} from "react-redux"
const Input = () => {
  const [comment,setComment]=useState('')
  const dispatch=useDispatch()
  dispatch(setComment({username:user.name,comment:comment}))
  const {user}=useSelector((state)=>state.authSlice)
  // const socket=socketInit()
  async function handleBtnClick(){
    try {
      const {data}=await sendcomment({username:user.name,comment:comment,userId:user._id})
      console.log(data)
    } catch (error) {
      console.log(error)
    }finally{
      setComment('')
    }
  }
  return (
    <div className='container'>
    <label id='textarea'>Write your comment here!</label><br/>
    <textarea htmlFor='textarea' name='textarea' value={comment} onChange={(e)=>setComment(e.target.value)} placeholder='enter your comment here!' rows={3} cols={60}></textarea><br/>
    <button className='btn btn-primary' onClick={handleBtnClick}>Post Comment</button>
    </div>
  )
}

export default Input