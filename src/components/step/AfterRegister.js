import React from 'react'
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
const AfterRegister = () => {
  const {user}=useSelector((state)=>state.userSlice)
  console.log("USER:",user)
  return (
    <>
      {user && <div>
        <h3>Hello {user.name}, you have successfully registered.</h3>
        <p>You can now <Link to='/login'>Log In</Link></p>
      </div> }
    </>
  )
}

export default AfterRegister