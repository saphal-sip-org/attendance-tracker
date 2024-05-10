import React from 'react';
import { useEffect, useMemo, useState } from "react";
import { Link } from 'react-router-dom';

import Button from "../../components/common/Button";
import Input from "../../components/common/Input"
import RegisterPic from "../../images/login.svg"

function Register() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div className="w-screen min-h-screen animate-float flex flex-row-reverse items-center justify-center bg-gray-100 gap-32 overflow-hidden">
      <img width={400} className='hidden md:block w-48 h-auto lg:block lg:w-80 lg:h-80' src={RegisterPic} alt="" />
      <form className="flex flex-col justify-between h-auto w-96 px-4 py-8 relative bg-white rounded-xl gap-6 shadow-lg">
        <div className='
        flex flex-col gap-2'>
          <h1 className='
            font-bold text-xl
            text-slate-900 text-center
            '>Register Now</h1>
          <div className='border-b-2
            border-gray-300'></div>
        </div>
        <Input inputchangeHandler={e => setUserName(e.target.value)} inputValue={userName} type={true} label={"UserName"} />
        <div className='flex flex-col gap-1'>
          <Input inputchangeHandler={e => setPassword(e.target.value)} inputValue={password} type={false} label={"Password"} />
          <span className='flex items-center gap-1 mt-3'>
            <input aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 " required="" />
            <span className='
            md:text-[13px] lg:text-[16px]'>I accept the Terms and Conditions</span>
          </span>
        </div>
        <div className='
        w-full
        flex justify-center
        '>
          <Button label={"Register"} className='
          w-full' />
        </div>
        <div className='gap-1 
         md:flex md:flex-col lg:flex lg:flex-row'>
          <span className='
            text-gray-500'>Already have an account?</span>
          <Link className='
            text-color-primary' to={"/login"}>Login here</Link>
        </div>
      </form>
    </div>
  )
}
export default Register;