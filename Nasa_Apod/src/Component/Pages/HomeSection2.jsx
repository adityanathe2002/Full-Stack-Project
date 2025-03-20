import React from 'react';
import img from '../../assets/image/Kalpana_Chawla.jpg'
import queen from '../../assets/image/sunita-williams.jpg'


const HomeSection2 = () => {
    return (
        <div className="relative w-full h-auto pb-10">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100" />

            {/* Content (Optional) */}
            <div className="relative flex flex-col items-center justify-center h-screen bg-black overflow-hidden">
                {/* Animated Stars Background */}
                <div className="absolute inset-0">
                    <div className="absolute w-1 h-1 bg-white rounded-full animate-ping top-12 left-1/4 opacity-70"></div>
                    <div className="absolute w-1.5 h-1.5 bg-white rounded-full animate-ping top-1/3 right-1/3 opacity-70"></div>
                    <div className="absolute w-2 h-2 bg-white rounded-full animate-ping bottom-20 left-1/2 opacity-70"></div>
                </div>

                {/* Tribute Card */}
                <div className="relative z-10 flex flex-col items-center text-white  bg-opacity-30 p-6 md:p-10 rounded-2xl shadow-xl border border-gray-700 w-[90%] md:w-[60%]">
                    {/* Image with Astronaut Glow */}
                    <div className="relative">
                        <img
                            src={img}
                            alt="Kalpana Chawla"
                            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-blue-400 shadow-lg shadow-blue-500/50"
                        />
                        {/* Glow Effect */}
                        <div className="absolute inset-0 w-full h-full rounded-full bg-blue-500 opacity-20 blur-xl"></div>
                    </div>

                    {/* Name & Tribute Text */}
                    <h1 className="mt-4 text-2xl md:text-4xl font-bold text-blue-400">
                        Tribute To Kalpana Chawla
                    </h1>
                    <p className="text-center text-sm md:text-base text-gray-300 max-w-md mt-2">
                        Kalpana Chawla, the first Indian-origin woman in space, inspired millions with her courage and dedication.
                        As a mission specialist on the **Columbia Space Shuttle (STS-107)**, she played a key role in scientific research.
                    </p>

                    {/* Achievement Cards */}
                    <div className="mt-6 grid grid-cols-2 gap-4 md:flex md:gap-6">
                        <div className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-600">
                            <h3 className="text-sm md:text-base font-semibold text-yellow-400">
                                First Space Mission
                            </h3>
                            <p className="text-white text-lg font-bold">1997</p>
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-600">
                            <h3 className="text-sm md:text-base font-semibold text-green-400">
                                Total Time in Space
                            </h3>
                            <p className="text-white text-lg font-bold">30 Days</p>
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-600">
                            <h3 className="text-sm md:text-base font-semibold text-red-400">
                                Last Mission
                            </h3>
                            <p className="text-white text-lg font-bold">STS-107 (2003)</p>
                        </div>
                    </div>

                    {/* Inspirational Quote */}
                    <p className="mt-6 italic text-gray-400 text-sm md:text-base max-w-lg text-center">
                        "The path from dreams to success does exist. May you have the vision to find it, the courage to get on to it,
                        and the perseverance to follow it." - **Kalpana Chawla**
                    </p>
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-center h-screen bg-black overflow-hidden">
                {/* Animated Stars Background */}
                <div className="absolute inset-0 bg-black">
                    <div className="absolute w-1 h-1 bg-white rounded-full animate-ping top-10 left-1/4 opacity-70"></div>
                    <div className="absolute w-1 h-1 bg-white rounded-full animate-ping top-1/3 right-1/3 opacity-70"></div>
                    <div className="absolute w-2 h-2 bg-white rounded-full animate-ping bottom-20 left-1/2 opacity-70"></div>
                </div>

                {/* Profile Card */}
                <div className="relative z-10 flex flex-col items-center text-white  bg-opacity-30 p-6 md:p-10 rounded-2xl shadow-xl border border-gray-700 w-[90%] md:w-[60%]">
                    {/* Image with Glowing Border */}
                    <div className="relative">
                        <img
                            src={queen}
                            alt="Sunita Williams"
                            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-purple-500 shadow-lg shadow-purple-500/50"
                        />
                        {/* Glow Effect */}
                        <div className="absolute inset-0 w-full h-full rounded-full bg-purple-500 opacity-20 blur-xl"></div>
                    </div>

                    {/* Name & Title */}
                    <h1 className="mt-4 text-2xl md:text-4xl font-bold text-purple-400">
                        Space Queen Sunita Williams
                    </h1>
                    <p className="text-center text-sm md:text-base text-gray-300 max-w-md mt-2">
                        Sunita Williams is an American astronaut and U.S. Navy officer. She
                        has spent **322 days in space**, completed **7 spacewalks**, and
                        contributed to **International Space Station (ISS) missions**.
                    </p>

                    {/* Fun Fact Cards */}
                    <div className="mt-6 grid grid-cols-2 gap-4 md:flex md:gap-6">
                        <div className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-600">
                            <h3 className="text-sm md:text-base font-semibold text-blue-400">
                                Spacewalks
                            </h3>
                            <p className="text-white text-lg font-bold">7</p>
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-600">
                            <h3 className="text-sm md:text-base font-semibold text-green-400">
                                Time in Space
                            </h3>
                            <p className="text-white text-lg font-bold">322 Days</p>
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-600">
                            <h3 className="text-sm md:text-base font-semibold text-yellow-400">
                                ISS Missions
                            </h3>
                            <p className="text-white text-lg font-bold">Exp 14, 15, 32, 33</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeSection2;
