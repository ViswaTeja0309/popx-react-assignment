import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/Login.css"


const Login = () => {


    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");




    const handleLogin = (e) => {

        e.preventDefault();

        const savedUser = JSON.parse (

            localStorage.getItem("user")

        );

        if (!savedUser) {

            setError("No account found. Please signup first");

            return;

        }

        if (

            savedUser.email === email &&
            savedUser.password === password

          ) 
        
          {
            navigate("/profile");
          }

        else {

            setError("Invalid email or password");

        }


    };




    return (

        <div className="login-container">


            <h1> Signin to your PopX account </h1>


            <p>  Enter your credentials to access your PopX account..  </p>



            <form onSubmit={handleLogin}>


                <div className="input-box">


                    <label>
                        Email Address
                    </label>


                    <input

                        type="email"

                        placeholder="Enter your email"

                        value={email}

                        onChange={(e)=>setEmail(e.target.value)}

                    />


                </div>


                <div className="input-box">


                    <label>
                        Password
                    </label>


                    <input

                        type="password"

                        placeholder="Enter your password"

                        value={password}

                        onChange={(e)=>setPassword(e.target.value)}

                    />


                </div>


                {
                    error && 
                    
                    <p className="error">
                        {error}
                    </p>
                }


                <button  className="login-page-btn" type="submit"> Login </button>


            </form>

        </div>

    );

};


export default Login;