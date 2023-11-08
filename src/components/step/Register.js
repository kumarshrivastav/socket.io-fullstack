import React,{useState} from 'react'
import { register } from '../../http'
import {useDispatch} from "react-redux"
import { setUser } from '../store/userSlice'
const Register = ({onNext}) => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()
    const submit=async()=>{
        if(!name || !email || !password){
            return window.alert('please enter all fields')
        }
        try {
            const {data}=await register({name,email,password})
            dispatch(setUser(data))
            onNext()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
      <h2>Welcomet To Register Page</h2>
      <div>
      <label htmlFor="name">Name</label>
        <br />
        <input
          type="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="enter your name"
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email"
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter your password"
        />
        <br />
        <button onClick={submit}>Register</button>
      </div>
    </div>
  )
}

export default Register
