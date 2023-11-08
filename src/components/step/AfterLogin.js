import React from 'react'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import { logout } from '../../http'
import {useDispatch} from "react-redux"
import { setAuth, setAvatar } from '../store/authSlice'
const AfterLogin = () => {
const {user}=useSelector((state)=>state.authSlice)
const dispatch=useDispatch()
async function logoutUser(){
  const {data}=await logout()
  dispatch(setAuth(data))
  dispatch(setAvatar(data))
}
  return (
    <>
    {user && <div>
        <h3>Hello {user.name}, you have successfully logged in.</h3>
       <Link to='/' onClick={logoutUser}>Log Out </Link><br/>
       <Link to="/profile">View Profile</Link><br/>
       <Link to="/avatar">To Upload Profile Pic</Link><br/>
       <Link to="/comment">To Go To Comment Section</Link>
      </div> }
    </>
  )
}

export default AfterLogin
