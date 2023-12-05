import React from "react";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
const LoginSignup = (props) =>{
    
    let page = props.login==="login"?<Login/>:<Signup/>;
    return(
        <>
        {
          page
        }  
        </>
    )
}

export default LoginSignup;