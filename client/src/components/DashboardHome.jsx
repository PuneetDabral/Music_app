import React, { useEffect } from 'react'
import { getAllUsers } from '../api'
import { actionType } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'
export const DashboardCard =({icon,name,count})=>{
return (
  <div className='w-40 h-auto gap-3 p-4 bg-blue-400 rounded-lg shadow-md'>
  
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
        // dispatch({
        //   type: actionType.SET_ALL_USERS,
        //   allUsers: data.data,
        // });
        console.log("userdata"+data)
      });
    }
  },[])

  return (
    <div className='flex flex-wrap items-center w-full p-6 justify-evenly'>
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
    </div>
  )
}

export default DashboardHome 