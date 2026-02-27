import React from 'react';
import './Login.css';
const Login=()=>{
    return(
        <>
        <center>
            <div className='login-card'>
           <h1>Sign in with email</h1>
           <p>Make a database with json and document with this login</p>
           <form>
                
             ✉︎<input type="email"placeholder='enter your email'/><br></br>
            🔒<input type="password" placeholder='enter your password'/><br></br>
            <a href='#'className="forget">Forget password?</a>
            <div><button>Login</button></div>
            
             
           </form>
    
           </div>
           </center>
        </>
    )
}
export default Login