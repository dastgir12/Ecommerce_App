import React from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import jwt_decode from "jwt-decode";
import {client} from "../client";
const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    const decode = jwt_decode(response.credential);
    console.log(decode);
    const { name, sub, picture } = decode;
    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };
    client
      .createIfNotExists(doc)
      .then(() => {
        localStorage.setItem("user", JSON.stringify(decode));
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          muted
          loop
          controls={false}
          autoPlay
          className=" w-full h-full object-cover"
        />
        <div className=" absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className=" p-5">
            <img src={logo} alt="logo" width="130px" />
          </div>

          <div className=" shadow-2xl">
            <GoogleLogin
              // clientId='REACT_APP_GOOGLE_API_TOKEN'
              render={(renderProps) => (
                <button
                  type="button"
                  className=" bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className=" mr-4" /> Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
