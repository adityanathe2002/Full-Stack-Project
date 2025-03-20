
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApodData } from '../Redux/nasaSlice';
import { MdHdrOn } from "react-icons/md";
import { MdHdrOff } from "react-icons/md";

const Gallery = () => {
  const dispatch = useDispatch();
  const { apod, status, error } = useSelector((state) => state.nasa);
  const [selectedOption, setSelectedOption] = useState('RoverCamera');
  const [selectedRovers, setSelectedRovers] = useState([]);
  const [selectedCameras, setSelectedCameras] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [photos, setPhotos] = useState([]);
  const [showHd, setShowHd] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  const rovers = ['Curiosity', 'Opportunity', 'Spirit'];
  const cameras = {
    Curiosity: ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'],
    Opportunity: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
    Spirit: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
  };

  useEffect(() => {
    if (selectedOption === 'RoverCamera' && selectedRovers.length > 0 && selectedCameras.length > 0) {
      fetchRoverPhotos();
    } else if (selectedOption === 'APOD' && selectedDate) {
      dispatch(fetchApodData(selectedDate));
    }
  }, [selectedRovers, selectedCameras, selectedDate, selectedOption, dispatch]);

  const fetchRoverPhotos = async () => {
    const roverQuery = selectedRovers.join('&rover=');
    const cameraQuery = selectedCameras.join('&camera=');
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverQuery}/photos?earth_date=${selectedDate}&camera=${cameraQuery}&api_key=YOUR_API_KEY`
    );
    const data = await response.json();
    setPhotos(data.photos || []);
  };

  return (
    <div className='w-full h-auto p-4'>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md mb-4 md:hidden' onClick={() => setShowFilters(!showFilters)}>
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>

      <div className='flex flex-col md:flex-row gap-4'>
        <div className={`w-full md:w-1/4 p-4 shadow-xl ${showFilters ? 'block' : 'hidden'} md:block`}>
          <div className='flex flex-col mb-4 border-b pb-4'>
            <label className='text-xl font-medium'>Select Option</label>
            <div className='flex flex-col gap-2 mt-2'>
              <label className='flex items-center gap-2 font-medium text-gray-700'>
                <input type='radio' checked={selectedOption === 'RoverCamera'} onChange={() => setSelectedOption('RoverCamera')} />
                Rover Camera
              </label>
              <label className='flex items-center gap-2 font-medium text-gray-700'>
                <input type='radio' checked={selectedOption === 'APOD'} onChange={() => setSelectedOption('APOD')} />
                APOD
              </label>
            </div>
          </div>

          {selectedOption === 'RoverCamera' && (
            <>
              <div className='flex flex-col mb-4 border-b pb-4'>
                <label className='text-xl font-medium'>Select Rover</label>
                {rovers.map((rover) => (
                  <label key={rover} className='flex items-center gap-2 font-medium text-gray-700'>
                    <input type='checkbox' checked={selectedRovers.includes(rover)} onChange={() => setSelectedRovers(selectedRovers.includes(rover) ? selectedRovers.filter((r) => r !== rover) : [...selectedRovers, rover])} />
                    {rover}
                  </label>
                ))}
              </div>

              <div className='flex flex-col mb-4 border-b pb-4'>
                <label className='text-xl font-medium'>Select Camera</label>
                {selectedRovers.map((rover) =>
                  cameras[rover].map((camera) => (
                    <label key={camera} className='flex items-center gap-2 font-medium text-gray-700'>
                      <input type='checkbox' checked={selectedCameras.includes(camera)} onChange={() => setSelectedCameras(selectedCameras.includes(camera) ? selectedCameras.filter((cam) => cam !== camera) : [...selectedCameras, camera])} />
                      {camera}
                    </label>
                  ))
                )}
              </div>
            </>
          )}

          <div className='flex flex-col mb-4'>
            <label className='text-xl font-medium '>Select Date</label>
            <input type='date' value={selectedDate} max={new Date().toISOString().split("T")[0]} className='border p-2 rounded-md text-gray-700 font-medium' onChange={(e) => setSelectedDate(e.target.value)} />
          </div>
        </div>

        <div className='w-full md:w-3/4 p-4'>
          {selectedOption === 'APOD' && apod ? (
            <div className='flex flex-col items-center gap-5'>
              <h2 className=' md:text-3xl font-bold mt-5'>{apod.title}</h2>
              <div className="flex w-full justify-end md:pr-10">
                <button
                  onClick={() => setShowHd(!showHd)}
                  className=" bg-black text-white font-bold rounded-full "
                >
                  {showHd ? <MdHdrOff size={30} /> : <MdHdrOn size={30} />}
                </button>
              </div>
              <img src={showHd ? apod.hdurl : apod.url} alt={apod.title} className='w-[70%]    rounded-xl shadow-xl' />
              <p className='p-5 text-justify font-medium'>{apod.explanation}</p>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {photos.length > 0 ? (
                photos.map((photo) => (
                  <div key={photo.id} className='shadow-md rounded-lg overflow-hidden '>
                    <img src={photo.img_src} alt={photo.id} className='w-full ' />
                  </div>
                ))
              ) : (
                <p className='text-center text-gray-600'>No photos available</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;