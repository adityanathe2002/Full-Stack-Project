import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import chandrayaan from '../../assets/image/chandrayaan3.png';
import chandrayaanLand from '../../assets/image/landedyaan.png';
import moon from '../../assets/image/moon.jpg';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [landed, setLanded] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ x: '50vw', y: '50vh' });

  useEffect(() => {
    // Adjust animation position based on screen size
    const updateTargetPosition = () => {
      if (window.innerWidth < 640) {
        // Mobile (sm)
        setTargetPosition({ x: '40vw', y: '60vh' });
      } else if (window.innerWidth < 1024) {
        // Tablet (md)
        setTargetPosition({ x: '45vw', y: '55vh' });
      } else {
        // Desktop (lg)
        setTargetPosition({ x: '50vw', y: '50vh' });
      }
    };

    updateTargetPosition();
    window.addEventListener('resize', updateTargetPosition);
    return () => window.removeEventListener('resize', updateTargetPosition);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { id: 1, title: "🔭 NASA's Astronomy Picture of the Day", description: "View and explore NASA's Astronomy Picture of the Day (APOD) with detailed descriptions." },
    { id: 2, title: "🚀 Mars Rover Images", description: "Browse images taken by Mars Rovers by selecting a rover, camera, and date." },
    { id: 3, title: "🔐 Secure Authentication", description: "Secure user authentication with JWT and OAuth2 for safe access." },
    { id: 4, title: "📊 Admin Control Panel", description: "Admins can manage APOD entries and moderate content via a dedicated panel." },
    { id: 5, title: "📖 Swagger API Documentation", description: "Developers can explore APIs interactively using Swagger UI." },
    { id: 6, title: "📱 Responsive UI", description: "Seamlessly accessible on mobile, tablet, and desktop using Bootstrap and Thymeleaf." },
  ];
  const testimonials = [
    { id: 1, name: "Aryan Sharma", feedback: "This app makes space exploration so much fun! The APOD feature is my favorite.", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Sanya Mehta", feedback: "The Mars Rover images are stunning! Love the smooth user experience.", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3, name: "Rohan Verma", feedback: "I love the security features and API documentation. A must-use for space lovers!", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  ];
  

  return (
    <div className="w-full bg-gray-700 ">
      {/* Background Image */}
      <div className="relative w-full h-screen">
        <img src={moon} className="absolute w-full h-full object-cover" />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />

        {/* Chandrayaan Animation */}
        <motion.img
          src={landed ? chandrayaanLand : chandrayaan}
          alt="Chandrayaan"
          initial={{ x: '-20vw', y: '-80vh', opacity: 0 }} // Start from top-left
          animate={{ x: targetPosition.x, y: targetPosition.y, opacity: 1 }} // Responsive landing position
          transition={{ duration: 8, ease: 'easeOut' }} // Smooth movement
          onAnimationComplete={() => setLanded(true)} // check landing animation 
          style={{ transform: `translateY(-${scrollY * (window.innerWidth < 640 ? 0.3 : 0.8)}px)` }} // Less movement on mobile
          className="absolute w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-40 lg:w-72 lg:h-48"
        />
      </div>

      <div className="min-h-screen bg-gray-800 text-white px-6 py-12">
        <div className="container mx-auto text-center">

          {/* Page Heading */}
          <h1 className="text-4xl font-bold text-[#539ABF] mb-6">About Our NASA API Project</h1>

          {/* Introduction */}
          <p className="text-lg text-gray-300 mb-10">
            Our application brings space exploration closer to everyone by integrating NASA's APIs.
            Users can explore breathtaking astronomy pictures, browse Mars rover images, and access secure user authentication.
          </p>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.id} className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <h2 className="text-xl font-semibold text-[#539ABF] mb-4">{feature.title}</h2>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#539ABF] mb-6">What Our Users Say</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl text-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-[#539ABF]" />
                <h3 className="text-xl font-semibold text-[#539ABF]">{testimonial.name}</h3>
                <p className="text-gray-400 italic mt-2">"{testimonial.feedback}"</p>
              </div>
            ))}
          </div>
        </div>

          {/* Footer */}
          <div className="mt-12 text-gray-500">
            <p>🌌 "Exploring the Universe, One API at a Time" 🚀</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
