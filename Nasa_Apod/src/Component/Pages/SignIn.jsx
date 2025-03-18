import React, { useState } from 'react';
import astronaught from '../../assets/image/astranaught2.jpg';
import rectangle from '../../assets/image/Rectangle 12.png';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { User } from 'lucide-react';
import { LuLockKeyhole } from "react-icons/lu";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='w-full h-screen flex items-center justify-center bg-white px-4'>
      <div className='w-full max-w-[90%] h-auto md:h-[90vh] flex flex-col md:flex-row items-center relative shadow-lg rounded-3xl'>

        {/* Background Image Section (Hidden on small screens) */}
        <div
          className='hidden md:block md:w-[60%] h-[40vh] md:h-full rounded-t-3xl md:rounded-l-3xl md:rounded-none'
          style={{
            backgroundImage: `url(${astronaught})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>

        {/* Form Section */}
        <div
          className='w-full md:w-[40%] h-full bg-cover bg-no-repeat bg-center   md:rounded-r-3xl  flex flex-col items-center justify-center p-6 opacity-90'
          style={{
            backgroundImage: `url(${rectangle})`,
          }}
        >

          <h1 className='text-center font-bold text-2xl text-white mb-4'>Sign In</h1>

          {/* Social Login Buttons */}
          <div className='w-full flex flex-col gap-3 items-center mb-4'>
            <button className='flex gap-2 items-center bg-white px-4 py-2 w-full md:w-[70%] rounded-lg justify-center cursor-pointer'>
              <FcGoogle size={20} /> Login with Google
            </button>
            <button className='flex gap-2 items-center bg-white px-4 py-2 w-full md:w-[70%] rounded-lg justify-center cursor-pointer'>
              <FaFacebook color='#1976D3' size={20} /> Login with Facebook
            </button>
          </div>

          {/* Form */}
          <form className='w-full flex flex-col gap-4 items-center'>

            <div className='relative w-full md:w-[70%]'>
              <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' size={20} />
              <input
                type="text"
                placeholder='Username'
                className='border text-white pl-10 pr-4 border-gray-400 h-[7vh] w-full rounded-lg bg-transparent placeholder-white focus:outline-none focus:border-blue-500'
              />
            </div>

            <div className='relative w-full md:w-[70%]'>
              <LuLockKeyhole className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' size={20} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder='Password'
                className='border text-white px-10 pr-10 border-gray-400 h-[7vh] w-full rounded-lg bg-transparent placeholder-white focus:outline-none focus:border-blue-500'
              />
              <span
                className='absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
              </span>
            </div>

            <div className='w-full md:w-[70%] flex items-center justify-between text-white text-sm '>
              <div className='flex gap-2 cursor-pointer'>
                <input type='checkbox' /> <label >Remember me</label>
              </div>
              <p className='cursor-pointer hover:underline'>Forgot password?</p>
            </div>

            <button className='px-3 py-2 rounded-lg text-black bg-white font-medium w-full md:w-[70%] hover:bg-gray-200 transition cursor-pointer'>Sign In</button>

            <p className='text-white text-sm md:text-base'>Don't have an account? <Link to='/signup' className='text-blue-300'>Sign Up</Link></p>
          </form>

        </div>

      </div>
    </div>
  );
}

export default SignIn;
