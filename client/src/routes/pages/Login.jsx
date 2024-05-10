import React from 'react';
import { useEffect, useMemo, useState } from "react";
import { NavLink } from 'react-router-dom';

import Button from "../../components/common/Button";
import Input from "../../components/common/Input"
import LoginPic from "../../images/loginp.svg"



function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  

  return (

    <div className="w-screen min-h-screen animate-float flex items-center justify-center gap-32 bg-gray-100 overflow-y-hidden">
      <img width={400} className='hidden md:block w-48 h-auto lg:block lg:w-80 lg:h-80' src={LoginPic} alt="LogIn Image" />
      <form className="flex flex-col justify-between h-auto w-96 px-4 py-8 relative bg-white rounded-xl gap-8 shadow-lg md:w-72  lg:w-80 xl:w-96">

        <div className='
        flex flex-col gap-2'>
          <h1 className='
            font-bold text-xl
            text-slate-900 text-center
            '>Welcome Back!</h1>
          <div className='border-b-2
            border-gray-300'></div>

        </div>
        <Input inputchangeHandler={e => setUsername(e.target.value)} inputValue={username} label={"Username"} />
        <div className='flex flex-col gap-1'>
          <Input inputchangeHandler={e => setPassword(e.target.value)} inputValue={password} label={"Password"} />
          <span className='
            text-bg-btn-primary
            ml-1
            '>forget Password?</span>

        </div>
        <div className='w-full flex justify-center items-center'>
          <Button label={"Login"} className='
          w-full' />
        </div>
        <div className='
          lg:flex lg:flex-row sm:flex-row  md:flex-col gap-0 sm:gap-2 md:gap-0'>
          <span className='
            text-gray-500'>Don't have an account yet?</span>
          <NavLink className='
            text-bg-btn-primary' to={"/register"}>Register now</NavLink>

        </div>

      </form>

    </div>
  )
}

export default Login;
