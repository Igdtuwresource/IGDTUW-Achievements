import React, { useEffect } from "react";
import "./signin.css";
// import { GoogleButton } from "react-google-button";
// import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  //   const { googleSignIn, user } = UserAuth();
  //   const navigate = useNavigate();

  //   const handleGoogleSignIn = async () => {
  //     try {
  //       await googleSignIn();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     if (user?.displayName) {
  //       navigate("/achievements");
  //     }
  //   }, [user]);

  return (
    <div className="box">
      <main className="mainContainer">
        <p className="welcomeText"> Login </p>
        <p className="text"> TO THE HALL OF FAME </p>

        <div>{/* <GoogleButton onClick={handleGoogleSignIn} />  */}</div>
      </main>
    </div>
  );
};

export default Signin;
