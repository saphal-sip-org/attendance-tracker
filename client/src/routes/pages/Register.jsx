import React from 'react';
import { useEffect, useMemo, useState } from "react";


import RegisterDrawing from "../../images/login.svg"



function Register() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div className="w-screen h-screen flex animate-float items-center justify-center bg-gray-100 gap-32">
      <img width={400} className='' src={RegisterDrawing} alt="" srcset="" />
      <form className="flex flex-col justify-between h-[55%] w-96 p-5 relative bg-white rounded-xl shadow-lg">
        <div className="absolute left-0 top-0 w-full h-full z-10 backdrop-blur-sm rounded-xl transition-all flex justify-center items-center">
          <div>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Create an account
          </h1>
            <div>
              <label className="block mb-2 text-sm font-medium ">Username</label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium ">Password</label>
              <input placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
            </div>
            {/* <div>
              <label className="block mb-2 text-sm font-medium">Confirm password</label>
              <input placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
            </div> */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input  aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
              </div>
              <div className="ml-3 text-sm">
                <label className=" ">I accept the <a className="font-medium " href="#">Terms and Conditions</a></label>
              </div>
            </div>
            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
            <p className="text-sm font-light ">
              Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register;
