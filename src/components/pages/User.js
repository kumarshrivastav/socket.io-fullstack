import {useState} from "react"
import AfterRegister from "../step/AfterRegister"
import Register from "../step/Register"
const steps={
    1:Register,
    2:AfterRegister
}
const User=()=>{
    const [step,setStep]=useState(1)
    const Step=steps[step]
    function onNext(){
        setStep(step+1)
    }
    return(
        <>
        <Step onNext={onNext}/>
        </>
    )
}
export default User;
