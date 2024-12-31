import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")



  return (
    <div className='login'>
      <img src={logo}className='login-logo' alt="" />
    <div className="login-form">
      <h1>{signState}</h1>
      <form>
        {signState==="Sign Up" && <input type="text" placeholder='Your name'/>}
        <input type="text" placeholder='Your name' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button class="login" >Sign Up</button>
        <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help?</p>
        </div>
        <div className="form-switch">
          <p>New to Netflix?
            <span>Sign up Now</span></p>
          <p>Already have account? <span>Sign In Now</span></p>
        </div>
      </form>
    </div>
    </div>
  )
}


export default Login