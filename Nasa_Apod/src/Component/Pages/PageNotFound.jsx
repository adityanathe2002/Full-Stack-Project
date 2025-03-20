import React from 'react'
import pageNotFound from '../../assets/image/pagenotfound.png'
import satellite from '../../assets/image/satellite.png'

const PageNotFound = () => {
    return (
        <div 
        style={{
            backgroundImage:`url(${"https://img.freepik.com/free-photo/panoramic-view-sunset-night_23-2148933764.jpg?t=st=1742401836~exp=1742405436~hmac=1c4900d20d8ef33f6bbb8182f494f92c8d7922a91f1f5756798cb0477bca7dd6&w=1380"})`,
            backgroundRepeat:"no-repeat",
            
        }}
        className='w-full h-screen bg-cover flex items-center justify-center bg-black'>
            {/* main div */}
            <div className='w-[70%] h-[70%] flex items-center justify-center relative'>
                {/* earth image */}
                <img src={pageNotFound} alt='Page Not Found' className='w-56 h-56 md:w-80 md:h-80 relative ' />
                <div className='absolute w-56 h-56 rounded-full bg-black opacity-50' />
                <h1 className='absolute text-lg md:text-2xl text-white font-serif font-semibold' data-aos='zoom-in'>Page Not Found</h1>
                {/* earth Orbit */}
                <div className=' w-[85%] h-[70%]  md:w-[45%] md:h-[100%] absolute rounded-full md:p-5 animate-orbit'>
                    <img src={satellite} alt="satellite" className='w-20 h-20  md:w-24 md:h-24  animate-orbit' />
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
