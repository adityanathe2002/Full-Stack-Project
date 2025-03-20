import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApodData } from "../Redux/nasaSlice";
import Loader from "../Loader";
import { MdHdrOn } from "react-icons/md";
import { MdHdrOff } from "react-icons/md";


const Apod = () => {
  const dispatch = useDispatch();
  const { apod, status, error } = useSelector((state) => state.nasa);
  const [showHd, setShowHd] = useState(false); // State to toggle image URL

  useEffect(() => {
    dispatch(fetchApodData()); // Fetch data on component mount
  }, [dispatch]);

  if (status === "loading") return <> <Loader /> </>;
  if (status === "failed") return <p className="h-[70vh] text-red-400 flex items-center justify-center">Error: {error}</p>;

  return (
    <div className=" text-gray-900">
      {apod && (
        <div className="flex flex-col w-full h-auto items-center gap-5 pb-10">
          <h2 className="text-xl md:text-3xl font-bold mt-5">{apod.title}</h2>
          <div className="flex w-full justify-end md:pr-10">
            <button
              onClick={() => setShowHd(!showHd)}
              className="   font-bold rounded-full "
            >
              {showHd ? <MdHdrOff size={30} /> :<MdHdrOn size={30}/>}
            </button>
          </div>
          <img
            src={showHd ? apod.hdurl : apod.url}
            alt={apod.title}
            className="w-[70%] h-[70vh] rounded-xl shadow-lg  "
          />
          <p className=" pt-10 md:p-15 text-justify font-medium font-serif shadow-2xl w-[80%]">
            {apod.explanation}
          </p>
          <div className="flex w-full pl-15">
            <p className="text-gray-900 text-start">Date: {apod.date}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apod;
