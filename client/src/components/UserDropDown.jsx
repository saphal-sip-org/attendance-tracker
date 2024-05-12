import React from 'react'
import MenuItem from './common/menuItem'
import { CgProfile } from "react-icons/cg";
import { IoLogOutSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";


const UserDropDown = () => {
  return (
    <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
        <ul className='py-2 text-sm text-gray-950'>
            <MenuItem iconName={CgProfile} title = "Profile" />
            <MenuItem iconName={IoMdSettings} title="Setting" />
            <MenuItem iconName={IoLogOutSharp} title="Log Out" />
        </ul>
    </div>
  )
}

export default UserDropDown