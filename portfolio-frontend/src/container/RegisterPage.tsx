import React from "react";
import { Register } from "../admin/Register";
import { GiSnake } from "react-icons/gi";
import { RegisterPageProps } from "../type/global";

export const RegisterPage = ({isLoginPage}: RegisterPageProps) => {
  return (
    <div className="relative w-full h-screen grid place-items-center primary-bg-color overflow-auto" style={{backgroundImage: `linear-gradient(rgba(2, 6, 23, 1), rgba(0, 0, 0, 0.8)),url('/background.jpg')`, backgroundSize: 'cover'}}>
      <div className="p-20 w-[350px] text-sm sm:w-[500px] border-2 rounded-md shadow-lg shadow-white hover:shadow-yellow-700">
        <Register isLoginPage={isLoginPage}/>
      </div>
        <div className='absolute  top-10 left-10'>
            <GiSnake className='text-yellow-500 text-[50px] sm:text-[100px]'/>
        </div>
    </div>

  );
};
