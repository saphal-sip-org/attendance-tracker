import React from 'react'
import {FaCog, FaHome} from 'react-icons/fa'
import { BsCalendar4Week } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";


const Sidebar = ({sidebarToogle}) => {
  return (
    <div className={`${sidebarToogle? " hidden " : "block"} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
        <div className='my-2 mb-4'>
            <h1 className=' text-3xl text-white font-bold'>Attendence</h1>
        </div>
        <hr />
        <ul className='mt-3 text-white font-bold'>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href="" className='px-3  flex items-center'>
                    <FaHome className ="inline-block w-6 h-6 mr-2 mt-2"></FaHome>
                    <h5 className=' mt-3'>Dashboard</h5>
                </a>
            </li>
            
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href="" className='px-3  flex items-center'>
                    <PiStudent className ="inline-block w-6 h-6 mr-2 mt-2"></PiStudent>
                    <h5 className=' mt-3'>Students</h5>
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href="" className='px-3  flex items-center'>
                    <FaChalkboardTeacher className ="inline-block w-6 h-6 mr-2 mt-2"></FaChalkboardTeacher>
                    <h5 className=' mt-3'>Teacher</h5>
                </a>
            </li>

            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href="" className='px-3  flex items-center'>
                    <FaCalendarAlt className ="inline-block w-6 h-6 mr-2 mt-2"></FaCalendarAlt>
                    <h5 className=' mt-3'>Class Routine</h5>
                </a>
            </li>

            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href="" className='px-3  flex items-center'>
                    <BsCalendar4Week className ="inline-block w-6 h-6 mr-2 mt-2"></BsCalendar4Week>
                    <h5 className=' mt-3'>Attendence</h5>
                </a>
            </li>

            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href="" className='px-3  flex items-center'>
                    <FaCog className ="inline-block w-6 h-6 mr-2 mt-2"></FaCog>
                    <h5 className=' mt-3'>Setting</h5>
                </a>
            </li>

        </ul>
    </div>
  )
}

export default Sidebar