import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Header from './Header'
import {IoHome} from 'react-icons/io5'
import { isActiveStyles, isNotActiveStyles } from './../utils/styles';
import DashboardHome from './DashboardHome';
import DashboardUsers from './DashboardUsers';
import DashboardSongs from './DashboardSongs';
import DashboardArtist from './DashboardArtist';
import DashboardAlbums from './DashboardAlbums';

const Dashboard = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto bg-primary'>
      <Header />

      <div className='w-[60%] my-2  p-4 flex flex-center justify-evenly'>
    <NavLink to={"/dashboard/home"} className={({isActive})=> isActive? isActiveStyles : isNotActiveStyles} ><IoHome className='text-2xl text-textColor'/></NavLink>
    <NavLink to={"/dashboard/user"} className={({isActive})=> isActive? isActiveStyles : isNotActiveStyles}>Users</NavLink>
    <NavLink to={"/dashboard/songs"} className={({isActive})=> isActive? isActiveStyles : isNotActiveStyles}>Songs</NavLink>
    <NavLink to={"/dashboard/artist"} className={({isActive})=> isActive? isActiveStyles : isNotActiveStyles}>Artists</NavLink>
    <NavLink to={"/dashboard/albums"} className={({isActive})=> isActive? isActiveStyles : isNotActiveStyles}>Albums</NavLink>
      </div>

      <div className="w-full p-4 my-4">
        <Routes>
      <Route path='/home' element={<DashboardHome />} />
      <Route path='/user' element={<DashboardUsers />} />
      <Route path='/songs' element={<DashboardSongs />} />
      <Route path='/artist' element={<DashboardArtist />} />
      <Route path='/albums' element={<DashboardAlbums />} />
      <Route path='/newSomg' element={<DashboardHome />} />
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard