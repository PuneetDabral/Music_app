import React from 'react'
import { useStateValue } from './../context/StateProvider';
import {motion} from 'framer-motion'

const DashboardUsers = () => {

  const [{allUsers},dispatch] =useStateValue();
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">hello</div>
  )
}

export const DashboardUserCard =({data,index}) =>{
  return(
    <motion.div  className='relative flex items-center justify-between w-full py-4 rounded-md cursor-pointer bg-lightOverlay hover:bg-card hover:shadow-md'>
     <div className='w-275 min-w-[160px] flex items-center justify-center'>
      <img src='' alt='' className='' />
     </div>
    </motion.div>
  )
}

export default DashboardUsers