import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../assets/img";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
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
    </header>
  );
};

export default Header;
