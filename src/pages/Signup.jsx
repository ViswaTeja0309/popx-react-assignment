import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/Signup.css"


const Signup = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        name: "",
        phone: "",
        email: "",
        password: ""

    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        });

    };

    const handleSignup = (e) => {

        e.preventDefault();

        localStorage.setItem(
            "user",
            JSON.stringify(formData)
        );

        navigate("/profile");

    };



    return (

        <div className="signup-container">


            <h1>
                Create your PopX account
            </h1>


            <form onSubmit={handleSignup}>


                <div className="input-box">

                    <label>
                        Full Name
                    </label>

                    <input

                        type="text"

                        name="name"

                        placeholder="Enter your name"

                        value={formData.name}

                        onChange={handleChange}

                    />

                </div>


                <div className="input-box">

                    <label>
                        Phone Number
                    </label>

                    <input

                        type="tel"

                        name="phone"

                        placeholder="Enter your phone number"

                        value={formData.phone}

                        onChange={handleChange}

                    />

                </div>

                <div className="input-box">

                    <label>
                        Email Address
                    </label>

                    <input

                        type="email"

                        name="email"

                        placeholder="Enter your email"

                        value={formData.email}

                        onChange={handleChange}

                    />

                </div>


                <div className="input-box">

                    <label>
                        Password
                    </label>

                    <input

                        type="password"

                        name="password"

                        placeholder="Enter your password"

                        value={formData.password}

                        onChange={handleChange}

                    />

                </div>


                <div className="input-box">

                    <label>
                        Company name
                    </label>

                    <input

                        type="text"

                        name="companyName"

                        placeholder="Enter your company name"

                        value={formData.companyName}

                        onChange={handleChange}

                    />

                </div>


                <div className="radio-box">

                  <h4>Are you an Agency?</h4>
                   
                  <div className="boxes">

                  <input 
                  
                  className="yes-box" 
                  type="radio" 
                  value="yes" 
                  name="Agency"  
                  onChange={handleChange} 
                  
                  /> Yes

                  <input 

                  className="no-box" 
                  type="radio" 
                  value="no" 
                  name="Agency"   
                  onChange={handleChange} 
                  
                  /> No

                  </div>

                </div>




                <button className="submit-btn" type="submit">

                    Create Account

                </button>


            </form>


        </div>

    );

};


export default Signup;