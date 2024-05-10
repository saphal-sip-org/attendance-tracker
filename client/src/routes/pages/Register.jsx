import React from 'react';
import { useEffect, useMemo, useState } from "react";
import { Link } from 'react-router-dom';

import Button from "../../components/common/Button";
import Input from "../../components/common/Input"
import RegisterPic from "../../images/login.svg"

function Register() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div className="w-screen h-screen animate-float flex  items-center justify-center bg-gray-100 gap-32">
      <img width={400} className='hidden lg:block w-[300px] h-[300px]' src={RegisterPic} alt="" />
      <form className="flex flex-col justify-between h-[50%] w-96 p-5 relative bg-white rounded-xl shadow-lg">
        <div className='
        flex flex-col gap-2'>
          <h1 className='
            font-bold text-xl
            text-slate-900 text-center
            '>Register Now</h1>
          <div className='border-b-2
            border-gray-300'></div>
        </div>
        <Input inputchangeHandler={e => setUsername(e.target.value)} inputValue={username} label={"Username"} />
        <div className='flex flex-col gap-1'>
          <Input inputchangeHandler={e => setPassword(e.target.value)} inputValue={password} label={"Password"} />
          <span className='flex items-center gap-1 mt-3'>
            <input aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 " required="" />
            <span>I accept the Terms and Conditions</span>
          </span>
        </div>
        <div className='
        w-full
        border'>
          <Button label={"Login"} className='' />
        </div>
        <div className='
          flex gap-1'>
          <span className='
            text-gray-500'>Already have an account?</span>
          <Link className='
            text-bg-btn-primary' to={"/login"}>Login here</Link>
        </div>
      </form>
    </div>
  )
}
export default Register;