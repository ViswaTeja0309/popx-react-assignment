import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/Landing.css'

const Landing = () => {

  const navigate = useNavigate();

  return (

    <>
       
       <div className ="landing-page-content">
           

          <div className ="landing-page-heading">
            <h1>Welcome to PopX</h1>
            <p>Create an account or log in to access <br></br>your profile and explore all features.</p>
          </div>

          <div className="create-account-btn">
            <button onClick={()=>navigate("/signup")} className ="create-btn">Create Account</button>
            <button onClick={()=>navigate("/login")} className ="login-btn">Already Registered? Login</button>
          </div>


       </div>
    
    </>
  )
}

export default Landing