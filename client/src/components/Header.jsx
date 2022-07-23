import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { Logo } from "../assets/img";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import { FaCrown } from "react-icons/fa";
import { useStateValue } from "../context/StateProvider";
import { app } from "../config/firebase.config";
import { getAuth } from "firebase/auth";
import { motion } from 'framer-motion'

const Header = () => {
  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const logout = () => {
    //admin function to check app is created or not 
    const firebaseAuth = getAuth(app);
    // it gives the sign out method 
    firebaseAuth
      .signOut()
      .then(() => {
        window.localStorage.setItem("auth", "false");
      })
      .catch((e) => console.log(e));
    Navigate("/login", { replace: true });
  };



  return (
    <header className="flex items-center w-full p-4 md:py-2 md:px-6">
      <NavLink to={"/"}>
        <img src={Logo} alt="logo" className="w-16" />
      </NavLink>
      <ul className="flex items-center justify-center ml-7">
        <li className="mx-5 text-lg">
          <NavLink
            to={"/home"}
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
          >
            Home
          </NavLink>
        </li>
        <li className="mx-5 text-lg">
          <NavLink
            to={"/musics"}
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
          >
            Musics
          </NavLink>
        </li>
        <li className="mx-5 text-lg">
          <NavLink
            to={"/premium"}
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
          >
            Premium
          </NavLink>
        </li>
        <li className="mx-5 text-lg">
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div
        onMouseEnter={() => setIsMenu(true)}
        onMouseLeave={() => setIsMenu(false)}
        className="relative flex items-center gap-2 ml-auto cursor-pointer">
        <img
          src={user?.user?.imageURL}
          alt=""
          className="w-12 h-12 min-w-[44px] object-cover rounded-full shadow-lg"
          referrerPolicy="no-referrer"
        />
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-textColor hover:text-headingColor ">
            {user?.user.name}
          </p>
          <p className="flex items-center gap-2 font-normal text-gray-400 text-x5">
            Premium Member.
            <FaCrown className="-ml-1 text-sm text-yellow-500" />
          </p>
        </div>

        {isMenu && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute right-0 z-10 flex flex-col gap-4 p-4 rounded-lg shadow-lg top-12 w-275 bg-card backdrop-blur-sm">
            <NavLink to={"/userProfile"}>
              <p className="text-base transition-all duration-150 ease-in-out text-textColor hover:font-semibold">
                Profile
              </p>
            </NavLink>
            <p className="text-base transition-all duration-150 ease-in-out text-textColor hover:font-semibold">
              My Favourites
            </p>
            <hr />
                       
            {user?.user.role === "admin" && (
              <>
                <NavLink to={"/dashboard/home"}>
                  <p className="text-base transition-all duration-150 ease-in-out text-textColor hover:font-semibold">
                    Dashboard
                  </p>
                </NavLink>
                <hr />
              </>
            )}

            <p className="text-base transition-all duration-150 ease-in-out text-textColor hover:font-semibold"
              onClick={logout}>
              Sign out
            </p>
          </motion.div>
        )}

      </div>
    </header>
  );
};

export default Header;
