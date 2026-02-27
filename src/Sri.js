import React from "react";
import './Sri.css';
const Sri=()=>{
    return(
   
    <>
    <div className="login-card">
        <div className="logo-icon"></div>
      
        <h2>Sign in with email</h2>
        <p>Make a new doc to bring your words, data,and teams together. For free</p>

        <form action="#">
            <div className="input-group">
                <span className="icon">✉️</span>
                <input type="email" placeholder="Email" required/>
            </div>

            <div class="input-group">
                <span className="icon">🔒</span>
                <input type="password" placeholder="Password" required/>
                <span className="icon-right">👁️</span>
            </div>

            <a href="#" className="forgot-password">Forgot password?</a>

            <button type="submit" class="submit-btn">Get Started</button>
        </form>

        <div classNAme="divider">
            <span>Or sign in with</span>
        </div>

        <div className="social-login">
            <button className="social-btn">G</button>
            <button className="social-btn">f</button>
            <button className="social-btn"></button>
        </div>
    </div>
    </>
    )
}
export default Sri;