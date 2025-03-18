import { Link } from "react-router-dom";
import hero from '../../assets/image/hero.jpg'
import astruant from '../../assets/image/astronaut.png'
import rocket from '../../assets/image/rocket.png'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroSection = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <div
            className="relative w-full h-[70vh] lg:h-screen bg-cover bg-center flex  items-end justify-center animate-rotateBg " 
            style={{
                 backgroundImage: `url(${hero})`,
                 
            }}
        >
            {/* Overlay */}
            <div
                className="absolute w-64 h-40 md:w-56 md:h-56 bg-contain bg-no-repeat bg-center opacity-90 animate-float animate-rotate"
                style={{
                    backgroundImage: `url(${astruant})`,
                    rotate: "",
                   top: window.innerWidth >= 1024 ? "30%" : "20%",
                    left: "0%",
                    transform: "translate(-50%, -50%)", // Center the astronaut
                }}
            ></div>

            {/* Content */}
            <div data-aos="zoom-up" className="relative z-10 text-center text-white px-6 max-w-3xl lg:mb-50 mb-10 ">
                <h1 className="text-lg md:text-6xl font-bold uppercase" data-aos="fade-up">
                    Explore the Universe with NASA
                </h1>
                <p className="mt-4 text-sm md:text-xl font-medium text-gray-100  lg:text-gray-400" data-aos="fade-up" data-aos-delay="300">
                    Discover breathtaking images from Mars Rovers and deep space missions.
                </p>

                {/* Buttons */}
                <div className="lg:mt-6 mt-3 flex flex-row md:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="500">
                    <p
                        to="/rovers"
                        className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 transition shadow-lg cursor-pointer"
                    >
                        Explore Mars Rovers
                    </p>
                    <p
                        to="/gallery"
                        className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 transition shadow-lg cursor-pointer"
                    >
                        View Gallery
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
