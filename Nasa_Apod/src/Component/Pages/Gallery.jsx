import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [selectedOption, setSelectedOption] = useState('RoverCamera');
  const [selectedRovers, setSelectedRovers] = useState([]);
  const [selectedCameras, setSelectedCameras] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [photos, setPhotos] = useState([]);
  const [showFilters, setShowFilters] = useState(true); // Toggle filters

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
      fetchAPOD();
    }
  }, [selectedRovers, selectedCameras, selectedDate, selectedOption]);

  const fetchRoverPhotos = async () => {
    const roverQuery = selectedRovers.join('&rover=');
    const cameraQuery = selectedCameras.join('&camera=');
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverQuery}/photos?earth_date=${selectedDate}&camera=${cameraQuery}&api_key=YOUR_API_KEY`
    );
    const data = await response.json();
    setPhotos(data.photos || []);
  };

  const fetchAPOD = async () => {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?date=${selectedDate}&api_key=YOUR_API_KEY`
    );
    const data = await response.json();
    setPhotos([data]);
  };

  const handleRoverChange = (rover) => {
    setSelectedRovers(selectedRovers.includes(rover)
      ? selectedRovers.filter((r) => r !== rover)
      : [...selectedRovers, rover]
    );
  };

  const handleCameraChange = (camera) => {
    setSelectedCameras(selectedCameras.includes(camera)
      ? selectedCameras.filter((cam) => cam !== camera)
      : [...selectedCameras, camera]
    );
  };

  return (
    <div className='w-full h-auto p-4'>
      {/* Filter Toggle Button */}
      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-md mb-4 md:hidden'
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>

      <div className='flex flex-col md:flex-row gap-4'>
        {/* Filter Section */}
        <div className={`w-full md:w-1/4 p-4 shadow-xl ${showFilters ? 'block' : 'hidden'} md:block`}>
          <div className='flex flex-col mb-4 border-b pb-4'>
            <label className='text-xl font-medium'>Select Option</label>
            <div className='flex flex-col gap-2 mt-2'>
              <label className='flex items-center gap-2 font-medium text-gray-700'>
                <input
                  type='checkbox'
                  checked={selectedOption === 'RoverCamera'}
                  onChange={() => setSelectedOption('RoverCamera')}
                />
                Rover Camera
              </label>
              <label className='flex items-center gap-2 font-medium text-gray-700'>
                <input
                  type='checkbox'
                  checked={selectedOption === 'APOD'}
                  onChange={() => setSelectedOption('APOD')}
                />
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
                    <input
                      type='checkbox'
                      checked={selectedRovers.includes(rover)}
                      onChange={() => handleRoverChange(rover)}
                    />
                    {rover}
                  </label>
                ))}
              </div>

              <div className='flex flex-col mb-4 border-b pb-4'>
                <label className='text-xl font-medium'>Select Camera</label>
                {selectedRovers.map((rover) =>
                  cameras[rover].map((camera) => (
                    <label key={camera} className='flex items-center gap-2 font-medium text-gray-700'>
                      <input
                        type='checkbox'
                        checked={selectedCameras.includes(camera)}
                        onChange={() => handleCameraChange(camera)}
                      />
                      {camera}
                    </label>
                  ))
                )}
              </div>
            </>
          )}

          <div className='flex flex-col mb-4'>
            <label className='text-xl font-medium '>Select Date</label>
            <input
              type='date'
              value={selectedDate}
              className='border p-2 rounded-md text-gray-700 font-medium'
              onChange={(e) => setSelectedDate(e.target.value)}
              
            />
          </div>
        </div>

        {/* Content Section */}
        <div className='w-full md:w-3/4 p-4'>
          {photos.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {photos.map((photo) => (
                <div key={photo.id} className='shadow-md rounded-lg overflow-hidden'>
                  <img src={photo.img_src} alt={photo.id} className='w-full h-auto' />
                </div>
              ))}
            </div>
          ) : (
            <p className='text-center text-gray-600'>No photos available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
