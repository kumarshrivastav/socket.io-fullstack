import React, { useState } from "react";
import { login } from "../../http";
import { setAuth } from "../store/authSlice";
import {useDispatch} from "react-redux"

const Login = ({onNext}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch()
  const submit = async () => {
    if(!email || !password){
        return window.alert('please provied all fields')
    }
    try {
        const {data}=await login({email,password})
        dispatch(setAuth({user:data,isAuth:true}))
        console.log(data)
        onNext()
    } catch (error) {
        console.log(error)
    }finally{
        return
    }

  };
  return (
    <div>
      <h2>Welcome to Login Page</h2>
      <div>
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
        <button onClick={submit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
