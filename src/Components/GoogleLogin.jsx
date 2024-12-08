import React from "react";
import { GoogleLogin, googleLogout, useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import { googleAuth } from "../services/api.js";
import { useAuth } from "../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { LuLogOut } from "react-icons/lu";

export default (props) => {
  const { user, setupUser, setAccessToken } = useAuth();
  const allowedEmails = ["ipecacmsigweb@gmail.com"];

  const responseGoogle = async (authResult) => {
    try {
      if (authResult.code) {
        console.log("Auth Code:", authResult.code);
        const result = await googleAuth(authResult.code);
        console.log("Google Auth Response:", result);

        if (result.status === 403) {
          alert("Only SIG WEB email is allowed to Sign In!");
          googleLogout();
        } else if (result.status === 200) {
          const userData = result.data.data;
          setAccessToken(userData.accessToken);
          setupUser(userData.user);
          console.log("User setup successful:", userData.user);
        }
      } else {
        console.error("Auth Result Error:", authResult);
        throw new Error(authResult);
      }
    } catch (e) {
      console.error("Error in responseGoogle:", e.response || e.message);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
    scope: "openid email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
  });
  const handlegoogleLogout = () => {
    googleLogout();
    setupUser(null)
    setAccessToken(null)
  }


  return (
    <>
      {user == null ? <button
        className="bg-gray-100 hover:bg-gray-200 flex justify-center items-center gap-4 w-full p-2 py-4 border-2 border-gray-200 rounded-lg"
        onClick={googleLogin}
      >
        <FcGoogle /> Sign in with Google
      </button> :
        <button
          className="bg-red-400 hover:bg-red-600 text-white flex justify-center items-center gap-4 w-full p-2 py-4 border-2 border-red-600 rounded-lg"
          onClick={handlegoogleLogout}
        >
          <LuLogOut /> LogOut
        </button>
      }
    </>
  );
};
