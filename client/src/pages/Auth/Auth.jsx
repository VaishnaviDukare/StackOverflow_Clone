import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import icon from "../../assets/icon.png";
import About from "./About";
import { signup,login } from '../../actions/auth';
import "./Auth.css";
const Auth = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [isSignUp, setSignup] = useState(false);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleswitch = () => {
    setSignup(!isSignUp);
    setName("");
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (e)=>{
      e.preventDefault();
      if(!email && !password){
        alert("Enter the Email and Password");
      }
      if(isSignUp){
        if(!name){
          alert("Enter the name to continue");
        }
        dispatch(signup({name,email,password},navigate));
      }else{
          dispatch(login({email,password},navigate));
      }

  };
  return (
    <section className="auth-section">
    {isSignUp && <About/>}
      <div className="auth-container-2">
        {!isSignUp && (
          <img src={icon} alt="stack-Overflow" className="login-logo"></img>
        )}
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" name="name" id="name" onChange={(e) =>{setName(e.target.value)}}></input>
            </label>
          )}

          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" onChange={(e) =>{setEmail(e.target.value)}}></input>
          </label>
          <label htmlFor="password">
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <h4>Password</h4>
              {!isSignUp && <p style={{color:"#007ac6" ,fontSize:"13px"}}>Forgot Password?</p>}
            </div>
            <input type="password" name="password" id="password" onChange={(e) =>{setPassword(e.target.value)}}></input>
            {isSignUp && (
              <p style={{color:"#666767",fontSize:"13px"}}>
                Password must contain the eight <br></br>characters,including
                atleast 1 number <br /> and 1 letter.{" "}
              </p>
            )}
          </label>
          {isSignUp && (
            <label htmlFor="check">
              <input type="checkbox" id="check"></input>
              <p style={{fontSize:"13px"}}>
                opt-in to receive occassional, <br />
                product updates ,user research invitations,
                <br />
                company announcement and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignUp ? "Sign Up" : "Log in"}
          </button>
          {isSignUp && <p style={{color:"#666767",fontSize:"13px"}}>By clicking "Sign Up",you agree to our<br/>
          <span style={{color:"#007ac6"}} > terms of service </span>,
          <span style={{color:"#007ac6"}}>privacy policy </span>and 
          <span style={{color:"#007ac6"}}>cookie policy.</span></p>}
        </form>
        <p>
          {isSignUp ? "Already have an account ? " : "Don't have an account ?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleswitch}
          >
            {isSignUp ? "Log in" : "Sign Up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
