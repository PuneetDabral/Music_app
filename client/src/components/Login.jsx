import React from "react";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 flex items-center justify-center p-4 bg-darkOverlay">
        <div className="flex flex-col items-center justify-center w-full p-4 rounded-md shadow-2xl md:w-375 bg-light-Overlay backdrop-blur-md">
          <div className="flex items-center justify-center gap-2 px-4 py-2 transition-all duration-100 ease-in-out rounded-md cursor-pointer bg-cardOverlay hover:bg-card hover:shadow-md">
          <FcGoogle className="text-xl" />
            Sign in with Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
