import React, { useEffect, useState } from 'react';
import Perseverance from '../../assets/image/Perseverance.jpg';
import Opportunity from '../../assets/image/Opportunity.jpg';
import Spirit from '../../assets/image/spirit.webp';
import Curiosity from '../../assets/image/Curiosity.jpg';
import { FaTimes } from 'react-icons/fa';
import video from '../../assets/image/marsVideo.mp4'

const marsRovers = [
    {
        name: "Perseverance",
        image: Perseverance,
        launchDate: "July 30, 2020",
        landingDate: "February 18, 2021",
        landingSite: "Jezero Crater, Mars",
        missionDuration: "Ongoing (Initially planned for at least 1 Martian year ~687 Earth days)",
        weight: "1,025 kg (2,260 lbs)",
        size: {
            length: "3 meters",
            width: "2.7 meters",
            height: "2.2 meters",
        },
        objectives: [
            "Search for signs of ancient microbial life.",
            "Collect and store rock and soil samples for future return missions.",
            "Study Mars' climate and weather patterns.",
            "Test oxygen production from the Martian atmosphere for future human missions.",
            "Prepare for human exploration by testing new technologies.",
        ],
        keyDiscoveries: [
            "Confirmed that Jezero Crater was once a lake, increasing the chances of past life.",
            "Collected first-ever Martian rock samples for a future return to Earth.",
            "MOXIE experiment successfully produced oxygen from Mars' atmosphere.",
            "Captured high-definition images and sounds of Mars.",
            "Demonstrated the first powered flight on another planet with Ingenuity Helicopter.",
        ],
        scientificInstruments: [
            {
                name: "SuperCam",
                function: "Analyzes rock and soil composition using a laser and camera.",
            },
            {
                name: "PIXL",
                function: "Maps chemical composition of Martian rocks at a microscopic scale.",
            },
            {
                name: "SHERLOC",
                function: "Detects organic compounds and potential biosignatures.",
            },
            {
                name: "MOXIE",
                function: "Demonstrates oxygen production from Mars’ CO2-rich atmosphere.",
            },
            {
                name: "RIMFAX",
                function: "Ground-penetrating radar to study subsurface geology.",
            },
            {
                name: "Ingenuity Helicopter",
                function: "A small drone that achieved the first powered flight on another planet.",
            },
        ],
        status: "Still active, collecting samples and analyzing Mars’ geology and climate.",
    },
    {
        name: "Opportunity",
        image: Opportunity,
        launchDate: "July 7, 2003",
        landingDate: "January 25, 2004",
        landingSite: "Meridiani Planum, Mars",
        missionDuration: "Planned for 90 days, lasted nearly 15 years (Final contact: June 10, 2018)",
        weight: "185 kg (408 lbs)",
        size: {
            length: "1.6 meters",
            width: "2.3 meters",
            height: "1.5 meters",
        },
        objectives: [
            "Search for evidence of past water activity on Mars.",
            "Analyze the composition of Martian soil and rocks.",
            "Study Martian weather patterns and climate history.",
            "Travel long distances to explore different geological formations.",
        ],
        keyDiscoveries: [
            "Confirmed that Meridiani Planum had ancient water activity, possibly suitable for microbial life.",
            "Found hematite, a mineral that typically forms in water.",
            "Discovered signs of ancient hydrothermal systems.",
            "Detected clay minerals, indicating long-term water presence.",
            "Set a record for the longest distance driven on another planet (45.16 km).",
        ],
        scientificInstruments: [
            {
                name: "Panoramic Camera (Pancam)",
                function: "Captured high-resolution color images of Mars.",
            },
            {
                name: "Mini-TES",
                function: "Identified rock-forming minerals.",
            },
            {
                name: "Mössbauer Spectrometer",
                function: "Analyzed iron-bearing minerals.",
            },
            {
                name: "Alpha Particle X-ray Spectrometer (APXS)",
                function: "Determined the elemental composition of rocks and soil.",
            },
            {
                name: "Rock Abrasion Tool (RAT)",
                function: "Ground off rock surfaces for deeper analysis.",
            },
        ],
        status: "Inactive – Last communication received on June 10, 2018, after a massive dust storm.",
    },
    {
        name: "Spirit",
        image: Spirit,
        launchDate: "June 10, 2003",
        landingDate: "January 4, 2004",
        landingSite: "Gusev Crater, Mars",
        missionDuration: "Planned for 90 days, lasted over 6 years (Final contact: March 22, 2010)",
        weight: "185 kg (408 lbs)",
        size: {
            length: "1.6 meters",
            width: "2.3 meters",
            height: "1.5 meters",
        },
        objectives: [
            "Search for past water activity on Mars.",
            "Study Martian soil and rocks to understand the planet’s geology.",
            "Analyze atmospheric conditions and weather patterns.",
            "Explore potential habitable environments.",
        ],
        keyDiscoveries: [
            "Found evidence of ancient hot springs and water-altered minerals, suggesting a wetter past.",
            "Discovered silica deposits, a strong indicator of past water activity.",
            "Identified volcanic rock formations, confirming Mars’ history of volcanic activity.",
            "Captured stunning panoramic images of the Martian landscape.",
            "Got stuck in soft soil in 2009, eventually leading to the end of the mission.",
        ],
        scientificInstruments: [
            {
                name: "Panoramic Camera (Pancam)",
                function: "Took high-resolution color images of the Martian terrain.",
            },
            {
                name: "Mini-TES",
                function: "Detected rock-forming minerals from a distance.",
            },
            {
                name: "Mössbauer Spectrometer",
                function: "Identified iron-bearing minerals.",
            },
            {
                name: "Alpha Particle X-ray Spectrometer (APXS)",
                function: "Measured the elemental composition of rocks and soil.",
            },
            {
                name: "Rock Abrasion Tool (RAT)",
                function: "Drilled into rock surfaces for in-depth analysis.",
            },
        ],
        status: "Inactive – Lost communication on March 22, 2010, after getting stuck in Martian soil.",
    },
    {
        name: "Curiosity",
        image: Curiosity,
        launchDate: "November 26, 2011",
        landingDate: "August 6, 2012",
        landingSite: "Gale Crater, Mars",
        missionDuration: "Ongoing (Originally planned for 2 years)",
        weight: "899 kg (1,982 lbs)",
        size: {
            length: "3 meters",
            width: "2.7 meters",
            height: "2.2 meters",
        },
        objectives: [
            "Determine if Mars could have supported microbial life.",
            "Study Mars’ climate and geology.",
            "Assess past and present water activity.",
            "Measure radiation levels for future human missions.",
        ],
        keyDiscoveries: [
            "Evidence of ancient freshwater lakes in Gale Crater.",
            "Detection of organic molecules, essential for life.",
            "Methane fluctuations in Mars’ atmosphere.",
            "Radiation measurements crucial for human exploration.",
            "Study of Martian weather and atmospheric conditions.",
        ],
        scientificInstruments: [
            {
                name: "ChemCam",
                function: "Uses a laser to analyze rock compositions.",
            },
            {
                name: "MAHLI",
                function: "Takes high-resolution close-up images of rocks and soil.",
            },
            {
                name: "SAM",
                function: "Analyzes gases and organic compounds in Martian soil.",
            },
            {
                name: "RAD",
                function: "Measures radiation exposure levels on Mars.",
            },
            {
                name: "MastCam",
                function: "Captures high-definition color images and videos.",
            },
        ],
        status: "Still active and exploring Mount Sharp in Gale Crater.",
    }
];

const MarsRover = () => {
    const [selectedRover, setSelectedRover] = useState(null);
    useEffect(() => {
        if (selectedRover) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [selectedRover]);


    return (
        <div className="min-h-screen bg-gray-900 text-white py-12 relative">

            {/* <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="https://videocdn.cdnpk.net/videos/f6f27f68-bd66-5743-8053-4493e8fc53e2/horizontal/previews/clear/small.mp4?token=exp=1742384512~hmac=b49744bc9a1b7eeacf7dcb8089b7cb40223176f661c7ced04c2f72cfa86ca900" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            
            <div className="absolute inset-1 bg-gradient-to-b from-transparent to-black opacity-95 "></div> */}
            <div className="relative container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold text-[#539ABF] mb-6">Mars Rovers</h1>
                <p className="text-lg text-gray-400 mb-10">
                    Explore the legendary Mars rovers that have expanded our understanding of the Red Planet.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {marsRovers.map((rover, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition cursor-pointer"
                            onClick={() => setSelectedRover(rover)}
                        >
                            <img src={rover.image} alt={rover.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h2 className="text-2xl font-semibold text-[#539ABF]">{rover.name}</h2>
                        </div>
                    ))}
                </div>

                {/* Modal for selected rover */}
                {selectedRover && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl w-full relative max-h-[90vh] overflow-y-auto">
                            {/* Close button (cross icon) */}
                            <button
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition duration-300"
                                onClick={() => setSelectedRover(null)}
                            >
                                <FaTimes className="text-2xl" />
                            </button>

                            <h2 className="text-3xl font-bold text-[#539ABF]">{selectedRover.name}</h2>

                            <img
                                src={selectedRover.image}
                                alt={selectedRover.name}
                                className="w-64 h-64 object-cover mx-auto rounded-lg mt-4"
                            />

                            <div className="grid grid-cols-2 gap-4 mt-6 text-left text-gray-300">
                                <p className="text-lg font-medium">Name: <span className="text-gray-400 font-normal">{selectedRover.name}</span></p>
                                <p className="text-lg font-medium">Launch Date: <span className="text-gray-400 font-normal">{selectedRover.launchDate}</span></p>
                                <p className="text-lg font-medium">Landing Date: <span className="text-gray-400 font-normal">{selectedRover.landingDate}</span></p>
                                <p className="text-lg font-medium">Landing Site: <span className="text-gray-400 font-normal">{selectedRover.landingSite}</span></p>
                                <p className="text-lg font-medium">Mission Duration: <span className="text-gray-400 font-normal">{selectedRover.missionDuration}</span></p>
                                <p className="text-lg font-medium">Weight: <span className="text-gray-400 font-normal">{selectedRover.weight}</span></p>
                                <p className="text-lg font-medium">Length: <span className="text-gray-400 font-normal">{selectedRover.size.length}</span></p>
                                <p className="text-lg font-medium">Width: <span className="text-gray-400 font-normal">{selectedRover.size.width}</span></p>
                                <p className="text-lg font-medium">Height: <span className="text-gray-400 font-normal">{selectedRover.size.height}</span></p>
                            </div>

                            <div className="mt-6 text-left">
                                <p className="text-lg font-medium">Objectives:</p>
                                <ul className="list-disc list-inside ml-4">
                                    {selectedRover.objectives.map((val, i) => (
                                        <li key={i} className="text-gray-400">{val}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-6 text-left">
                                <p className="text-lg font-medium">Key Discoveries:</p>
                                <ul className="list-disc list-inside ml-4">
                                    {selectedRover.keyDiscoveries.map((val, i) => (
                                        <li key={i} className="text-gray-400">{val}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-6 text-left">
                                <p className="text-lg font-medium">Scientific Instruments:</p>
                                <div className="grid grid-cols-2 gap-4 mt-3 text-left text-gray-300">
                                    {selectedRover.scientificInstruments.map((val, i) => (
                                        <div key={i}>
                                            <p className="text-lg font-medium">Name: <span className="text-gray-400 font-normal">{val.name}</span></p>
                                            <p className="text-lg font-medium">Function: <span className="text-gray-400 font-normal">{val.function}</span></p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 text-left">
                                <p className="text-lg font-medium">Status: <span className="text-gray-400 font-normal">{selectedRover.status}</span></p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default MarsRover;