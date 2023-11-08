import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <p>New User ? <Link to='/register'>SignUp!</Link></p>
      <p>Already Registered ? <Link to='/login'>SignIn!</Link></p>
    </div>
  )
}

export default Home
