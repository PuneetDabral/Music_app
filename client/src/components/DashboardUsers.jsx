import React from 'react'
import { useStateValue } from './../context/StateProvider';
import {motion} from 'framer-motion'

const DashboardUsers = () => {

  const [{ allUsers }, dispatch] = useStateValue();
  return (

    <div className="flex flex-col items-center justify-center w-full p-4">
    {/* tabular data form */}
    <div className='relative w-full py-12 min-h[400px] overflow-x-scroll my-4 flex flex-col items-center justify-start p-4 border border-gray-300 rounded-md gap-3'>
      {/* total count */}
      <div className='absolute top-4 left-4'>
        <p className='text-xl font-bold'>
          Count :<span className="text-sm font-bold text-textColor">{allUsers?.length}</span>
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
        </div>
    </div>
    
    </div>
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