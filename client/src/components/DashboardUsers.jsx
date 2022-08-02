import React from "react";
import { useStateValue } from "./../context/StateProvider";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { changingUserRole, getAllUsers ,removeUser } from "../api";
import { actionType } from "../context/reducer";
import moment from "moment";
import { useState } from "react";

import { MdDelete } from "react-icons/md";

export const DashboardUserCard = ({ data, index }) => {
  // console.log(data,index)
  // console.log(data.email_verfied)
  const [{ user, allUsers }, dispatch] = useStateValue();
  const [isUserRoleUpdated, setIsUserRoleUpdated] = useState(false);
  const createdAt = moment(new Date(data.createdAt)).format("MMMM Do YYYY");

  const updateUserRole = (userId, role) => {
    // console.log(userId, role)
    setIsUserRoleUpdated(false);
    changingUserRole(userId, role).then((res) => {
      if (res) {
        getAllUsers().then((data) => {
          dispatch({
            type: actionType.SET_ALL_USERS,
            allUsers: data.data,
          });
        });
      }
    });
  };

  const deleteUser =(userId)=>{
    // console.log(userId)
    removeUser(userId).then((res) => {
      if (res) {
        getAllUsers().then((data) => {
          dispatch({
            type: actionType.SET_ALL_USERS,
            allUsers: data.data,
          });
        });
      }
    });
  }

  return (
    <motion.div
      key={index}
      className="relative flex items-center justify-between w-full py-4 rounded-md cursor-pointer bg-lightOverlay hover:bg-card hover:shadow-md"
    >
     {data._id !== user?.user._id && (
      <motion.div
        whileTap={{ scale: 0.75 }}
        className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-md left-4"
        onClick={()=>deleteUser(data._id)}
      >
        <MdDelete className="text-xl text-red-400 hover:text-red-500" />
      </motion.div>
     )}

      <div className="w-275 min-w-[160px] flex items-center justify-center">
        <img
          src={data.imageURL}
          referrerPolicy="no-referrer"
          alt=""
          className="w-10 h-10 object-cover rounded-md min-w-[40px] shadow-md"
        />
      </div>

      <p className="text-base text-textColor w-275 min-w-[16opx] text-center  ">
        {data.name}
      </p>
      <p className="text-base text-textColor w-275 min-w-[16opx] text-center  ">
        {data.email}
      </p>
      <p className="text-base text-textColor w-275 min-w-[16opx] text-center  ">
        {data.email_verfied ? "True" : "False"}
      </p>
      <p className="text-base text-textColor w-275 min-w-[16opx] text-center  ">
        {createdAt}
      </p>
      <div className="w-275 min-w-[160px] text-center flex items-center justify-center gap-6 relative">
        <p className="text-base text-center text-textColor ">{data.role}</p>
        {data._id !== user?.user._id && (
          <motion.p
            whileTap={{ scale: 0.75 }}
            className="text-[10px] font-semibold text-textColor px-1 bg-purple-200 rounded-sm
        hover:shadow-md"
            onClick={() => setIsUserRoleUpdated(true)}
          >
            {data.role === "admin" ? "menber" : "admin"}
          </motion.p>
        )}
        {isUserRoleUpdated && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute z-10 flex flex-col items-start gap-4 p-4 bg-white rounded-md shadow-xl top-6 right-4"
          >
            <p className="text-sm text-textColor">
              Are you sure , do you want to mark the user as
              <span>{data.role === "admin" ? " member" : " admin"} ?</span>
            </p>

            <div className="flex items-center gap-4">
              <motion.button
                whileTap={{ scale: 0.75 }}
                className="px-4 py-1 text-sm text-black bg-blue-200 border-none rounded-md outline-none hover:shadow-md"
                onClick={() =>
                  updateUserRole(
                    data._id,
                    data.role === "admin" ? "member" : "admin"
                  )
                }
              >
                Yes
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.75 }}
                className="px-4 py-1 text-sm text-black bg-red-200 border-none rounded-md outline-none hover:shadow-md"
                onClick={() => setIsUserRoleUpdated(false)}
              >
                No
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const DashboardUsers = () => {
  const [{ allUsers }, dispatch] = useStateValue();
  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch({
          type: actionType.SET_ALL_USERS,
          allUsers: data.data,
        });
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      {/* tabular data form */}
      <div className="relative w-full py-12 min-h[400px] overflow-x-scroll my-4 flex flex-col items-center justify-start p-4 border border-gray-300 rounded-md gap-3">
        {/* total count */}
        <div className="absolute top-4 left-4">
          <p className="text-sm font-bold">
            Count :
            <span className="text-sm font-bold text-textColor">
              {allUsers?.length}
            </span>
          </p>
        </div>

        <div className="w-full min-w-[750px] flex items-center justify-between">
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Image</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Name</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Email</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Verified</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Created</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Role</p>{" "}
          {/* table body role */}
        </div>
        {allUsers &&
          allUsers?.map((data, i) => (
            <DashboardUserCard data={data} index={i} />
          ))}
      </div>
    </div>
  );
};

export default DashboardUsers;
