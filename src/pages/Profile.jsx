import React from "react";
import profile from "../assets/profile_image.jpg";
import "../styles/Profile.css";
import { FaCamera } from "react-icons/fa";


const Profile = () => {


    const user = JSON.parse(
        localStorage.getItem("user")
    );



    return (

        <div className="profile-container">


            <div className="profile-header">

                Account Settings

            </div>




            <div className="profile-details">


                <div className="image-wrapper">

                    <img

                       className="profile-image"

                        src={profile}

                        alt="profile"

                    />


                        <div className="camera-icon">

                            <FaCamera />

                        </div>

                    </div>




              <div className="user-info">


                  <h3>
                      {user?.name || "Marry Doe"}
                  </h3>


                  <p>
                      {user?.email || "marrydoe@gmail.com"}
                  </p>


              </div>


        </div>


            <div className="profile-text">


                Your profile information helps us personalize your experience.
                You can update your details and manage your account settings anytime.


            </div>




        </div>

    );

};


export default Profile;