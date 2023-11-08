import AfterLogin from "../step/AfterLogin";
import Login from "../step/Login";
import React,{useState} from 'react'
import {useSelector} from 'react-redux'
// import Avatar from "./Avatar";
const steps={
    1:Login,
    2:AfterLogin
}
const Auth=()=>{
const {isAuth}=useSelector((state)=>state.authSlice)
console.log('isAuth:',isAuth)
const [step,setStep]=useState(1)
const Step=steps[step]
function onNext(){
    setStep(step+1)
}
return(
    <>
        {isAuth ? <AfterLogin/>:<Step onNext={onNext}/>}
        
    </>
)
}

export default Auth;