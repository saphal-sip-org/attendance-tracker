import React from 'react';
import { useEffect, useMemo, useState } from "react";


import RegisterDrawing from "../../images/login.svg"



function Register() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  


  
  
  

  return (
    <div className="w-screen h-screen flex  items-center justify-center bg-gray-100 gap-32">
      <img width={400} className='me-10 animate-float' src={RegisterDrawing} alt="" srcset="" />
      <form className="flex flex-col justify-between h-[50%] w-96 p-5 relative bg-white rounded-xl shadow-lg">
        <div className="absolute left-0 top-0 w-full h-full z-10 backdrop-blur-sm rounded-xl transition-all flex justify-center items-center">
          <div className="mt-4 border-t-2 pt-4">
            
          </div>
        </div>

      </form>

    </div>
  )
}

export default Register;
