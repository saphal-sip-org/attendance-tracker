import React from 'react';
import { useEffect, useMemo, useState } from "react";
import { Link } from 'react-router-dom';

import Button from "../../components/common/Button";
import Input from "../../components/common/Input"
import LoginPic from "../../images/loginp.svg"



function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");








  return (
    <div className="w-screen h-screen animate-float flex  items-center justify-center bg-gray-100 gap-32">
      <img width={400} className='hidden md:block w-[200px] h-[200px] lg:block lg:w-[300px] lg:h-[300px]' src={LoginPic} alt="" />
      <form className="flex flex-col justify-between h-[50%] w-96 p-5 relative bg-white rounded-xl shadow-lg md:w-72">

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
        <div className='
        w-full
        border'>

          <Button label={"Login"} className='' />
        </div>
        <div className='
          flex gap-1'>
          <span className='
            text-gray-500'>Don't have an account yet?</span>
          <Link className='
            text-bg-btn-primary' to={"/register"}>Register now</Link>

        </div>


        {/* </div> */}

      </form>

    </div>
  )
}

export default Login;
