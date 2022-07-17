import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../assets/img";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import {FaCrown} from 'react-icons/fa'
const Header = () => {
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
          <NavLink to={"/musics"}  className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }>Musics</NavLink>
        </li>
        <li className="mx-5 text-lg">
          <NavLink to={"/premium"}  className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }>Premium</NavLink>
        </li>
        <li className="mx-5 text-lg">
          <NavLink to={"/contact"}  className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }>Contact Us</NavLink>
        </li>
      </ul>
      <div className="relative flex items-center gap-2 ml-auto cursor-pointer">
      <img src='' alt='' className="w-12 min-w-[44px] object-cover rounded-full shadow-lg"/>
      <div className="flex flex-col">
        <p className="text-lg font-semibold text-textColor hover:text-headingColor ">UserName</p>
        <p className="flex items-center gap-2 font-normal text-gray-400 text-x5">Premium Member.<FaCrown className="-ml-1 text-sm text-yellow-500" /></p>
      </div>
      </div>
    </header>
  );
};

export default Header;
