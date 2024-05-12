import React, { useState } from "react";

const Input = ({
    label,
    inputchangeHandler,
    inputValue,
    type,
}) => {

    return (
        <>
            <div className="flex flex-col mt-4 relative">
                <input type={`${type? "text" : "password"}`} className="bg-gray-100 
                    outline-none
                    text-gray-900 
                    border border-gray-200
                    text-lg rounded-lg p-2.5  
                    peer" required />

                <span 
                    className={` absolute
                            text-gray-500 
                            transition-all 
                            flex
                            peer-focus:-translate-y-7
                            peer-placeholder-shown:-translate-y-0
                            ml-2.5
                            mt-4
                            pointer-events-none
                            peer-[:not(:placeholder-shown)]:text-sm
                            `}>
                                {label}
                </span>
            </div>
        </>
    );
}

export default Input;