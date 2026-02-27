import React from "react";
import "./Samplelogin";
import './Samplelogin.css';
const Samplelogin=()=>{
  return(
    <>
      <div className="Login-card">
      <h1>Login with email</h1>
      <form className="set"> 
            ✉︎<input type="email"placeholder='enter your email'/><br></br><br></br>
            🔒<input type="password" placeholder='enter your password'/><br></br>
            <a href='#'className="forget">Forget password?</a><br></br><br></br>
            <div><button>Login</button></div>
           </form>
           </div>
    </>
  )
}

export default Samplelogin;