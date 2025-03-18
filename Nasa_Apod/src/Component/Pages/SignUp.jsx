import React, { useState } from 'react';
import img from '../../assets/image/signin.avif';
import signup from '../../assets/image/signup3.jpg';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Phone, User } from 'lucide-react';
import { MdEmail } from 'react-icons/md';
import { LuLockKeyhole } from "react-icons/lu";


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='w-full h-screen flex items-center justify-center px-4'>
            <div className='w-full max-w-[90%] h-auto md:h-[90vh] flex flex-col md:flex-row relative shadow-lg rounded-3xl'>

                {/* Background Image Section (Hidden on small screens) */}
                <div
                    className='hidden md:block md:w-[50%] h-[40vh] md:h-full rounded-t-3xl md:rounded-l-3xl md:rounded-none'
                    style={{
                        backgroundImage: `url(${signup})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                ></div>

                {/* Form Section */}
                <div className='w-full md:w-[50%] h-full bg-white rounded-b-3xl md:rounded-r-3xl flex flex-col items-center justify-center p-6'>

                    <div className='w-full text-center mb-4'>
                        <h1 className='font-bold text-2xl md:text-3xl text-black'>Sign Up</h1>
                        <h2 className='font-semibold text-lg md:text-xl text-gray-700'>Welcome Aboard!</h2>
                        <p className='text-sm text-gray-500'>"One Small Click for You, One Giant Leap for Discovery!"</p>
                    </div>

                    <form className='w-full flex flex-col gap-4 items-center'>

                        <div className="relative w-full md:w-[70%]">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                            <input
                                type="text"
                                placeholder="Username"
                                className="border text-black px-10 border-gray-400 h-[7vh] w-full rounded-lg focus:outline-none focus:border-black"
                            />
                        </div>

                        <div className='relative w-full md:w-[70%]'>
                            <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                            <input
                                type="email"
                                placeholder='Email'
                                className='border text-black px-10 border-gray-400 h-[7vh] w-full rounded-lg focus:outline-none focus:border-black'
                            />
                        </div>

                        <div className='relative w-full md:w-[70%]'>
                            <Phone className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 ' size={20}/>
                        <input
                            type="text"
                            placeholder='Phone Number'
                            className='border text-black px-10 border-gray-400 h-[7vh] w-full rounded-lg focus:outline-none focus:border-black'
                        />
                        </div>

                        <div className='relative w-full md:w-[70%]'>
                            <LuLockKeyhole className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 ' size={20}/>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder='Password'
                                className='border text-black px-10 border-gray-400 h-[7vh] w-full rounded-lg focus:outline-none focus:border-black pr-10'
                            />
                            <span
                                className='absolute top-1/2 right-4 transform -translate-y-1/2 text-black cursor-pointer'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                            </span>
                        </div>


                        <button className='px-3 py-2 rounded-lg text-white bg-black font-medium w-full md:w-[70%] hover:bg-gray-900 transition cursor-pointer'>Sign Up</button>

                        <p className='text-black text-sm md:text-base'>Already have an account? <Link to='/signin' className='text-blue-600'>Sign In</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default SignUp;
