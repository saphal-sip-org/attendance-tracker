import React from 'react';
import { FaBars, FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import UserDropDown from '../UserDropDown';

const Navbar = ({ sidebarToogle, setSidebarToogle }) => {
    return (
        <nav className='bg-gray-800 px-4 py-3 flex justify-between'>

            <div className='flex items-center text-xl'>
                <FaBars className='text-white me-4 cursor-pointer' onClick={() => setSidebarToogle(!sidebarToogle)} />
                <span className='text-white font-semibold'>Menu</span>
            </div>
            <div className='flex items-center gap-x-5'>
                <div className='relative md:w-56'>
                    <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
                        <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch /></button>Search
                    </span>
                    <input type="text" className='w-full px-4 py-1 pl-12 rounded-lg shadow outline-none hidden md:block' />
                </div>

                <div className='text-white'><FaBell className='w-6 h-6 cursor-pointer' /></div>

                <div className='relative'>
                    <button className='text-white group'>
                        <FaUserCircle className='w-6 h-6 mt-1' />
                        <UserDropDown />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;