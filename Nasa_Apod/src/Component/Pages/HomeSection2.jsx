import React from 'react';
import img from '../../assets/image/Kalpana_Chawla.jpg'


const HomeSection2 = () => {
  return (
    <div className="relative w-full h-auto pb-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />

      {/* Content (Optional) */}
      <div className="relative z-10 flex flex-col gap-4 items-center justify-center h-full text-white  pt-10">
        <h1 className='text-2xl md:text-3xl font-medium font-serif'>Tribute To Kalpana Chawla</h1>
        <div>
          <img src={img} alt="" className='w-56 h-56 rounded-3xl' />
        </div>
        <h1 className='font-medium'> 17 March 1962 - 1 February 2003</h1>
        <h1 className='pl-10 pr-10 text-justify'>Kalpana Chawla was an Indian American astronaut and aerospace engineer who was the first woman of Indian origin
          to fly to space. Chawla expressed an interest in aerospace engineering from an early age and took engineering
          classes at Dayal Singh College and Punjab Engineering College in India She first flew on Space Shuttle Columbia
          in 1997 as a mission specialist and robotic arm operator aboard STS-87. Her role in the flight caused some
          controversy due to the failed deployment of the Shuttle-Pointed Autonomous Research Tool for Astronomy ("Spartan") module.[2]
          Chawla's second flight was in 2003 on STS-107, the final flight of Columbia. She was one of the seven crew members
          who died in the Space Shuttle Columbia disaster when the spacecraft disintegrated during its reentry into the Earth's
          atmosphere on February 1, 2003.
        </h1>
      </div>

    </div>
  );
};

export default HomeSection2;
