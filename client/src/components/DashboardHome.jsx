import { FaUsers } from "react-icons/fa";
import React, { useEffect } from 'react'
import { getAllAlbums, getAllSongs, getAllUsers } from '../api'
import { actionType } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'
import { getAllArtists } from './../api/index';
import { GiLoveSong, GiMusicalNotes } from "react-icons/gi";
import { RiUserStarFill } from "react-icons/ri";
import { bgColors } from "../utils/styles";

export const DashboardCard =({icon,name,count})=>{
  const bg_color = bgColors[parseInt(Math.random() * bgColors.length)];
return (
  <div style={{ background: `${bg_color}` }} 
  className='w-40 h-auto gap-3 p-4 bg-blue-400 rounded-lg shadow-md'>
  
    {icon}
    <p className='text-xl font-semibold text-textColor'>{name}</p>
    <p className='text-xl text-textColor'>{count}</p>
  
  </div>
)
}


const DashboardHome = () => {
  const [{allUsers, allSongs, allArtists, allAlbums},dispatch] = useStateValue()

  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        // console.log(data)
        dispatch({
          type: actionType.SET_ALL_USERS,
          allUsers: data.data,
        });
        
      });
    }


    if (!allArtists) {
      getAllArtists().then((data) => {
        // console.log(data)
        dispatch({
          type: actionType.SET_ALL_ARTISTS,
          allArtists: data.artist,
        });
        
      });
    }

    if (!allAlbums) {
      getAllAlbums().then((data) => {
        // console.log(data.album)
        dispatch({ type: actionType.SET_ALL_ALBUMNS,
          
          allAlbums: data.album
       });
      });
    }

    if (!allSongs) {
      getAllSongs().then((data) => {
        // console.log(data)
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.data,
        });
        
      });
    }



  },[])

  


  
  

  return (
    <div className='flex flex-wrap items-center w-full p-6 justify-evenly'>
      <DashboardCard icon={<FaUsers  className='text-3xl text-textColor '/>} name={"Users"} count={allUsers?.length > 0 ? allUsers?.length : 0}/>
      <DashboardCard icon={<GiLoveSong className="text-3xl text-textColor" />} name={"Songs"} count={allSongs?.length > 0 ? allSongs?.length : 0}/>
      <DashboardCard icon={<RiUserStarFill className="text-3xl text-textColor" />} name={"Artist"} count={allArtists?.length > 0 ? allArtists?.length : 0} />
      <DashboardCard icon={<GiMusicalNotes className="text-3xl text-textColor" />} name={"Album"} count={allAlbums?.length > 0 ? allAlbums?.length : 0}/>
      
    </div>
  )
}

export default DashboardHome 