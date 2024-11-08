import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';

const Login = () => {

  const [signState, setSignState] = useState("Sign In")

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?<input type="text" placeholder='Your Name' />:<></>}          
          <input type="password" placeholder='Password' />
          <input type="email" placeholder='Email' />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?<p>New? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now!</span></p>:<p>Already Have An Account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now!</span></p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
