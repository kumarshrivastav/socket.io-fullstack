import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import { logout } from '../../http'
import { setAuth, setAvatar } from '../store/authSlice'
const Profile = () => {
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>state.authSlice)
  async function userLogout(){
    const {data}=await logout()
    dispatch(setAuth(data))
    dispatch(setAvatar(data))
  }
  return (
    <>
      <h2>Welcome To Home Page</h2>
      <h5>Name:{user.name}</h5>
      <h5>Email:{user.email}</h5>
      <h5>Id:{user._id}</h5>
      <Link to="/" onClick={userLogout} >Logout</Link>
    </>
  )
}

export default Profile
