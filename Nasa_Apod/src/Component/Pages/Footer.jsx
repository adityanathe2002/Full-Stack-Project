import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section - Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-blue-400">CosmoView</h2>
          <p className="text-gray-400 mt-2 text-center md:text-left">
            Exploring the Universe, One Click at a Time.
          </p>
        </div>

        {/* Middle Section - Navigation */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="/gallery" className="hover:text-blue-400 transition">Gallery</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex gap-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition text-2xl">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} CosmoView. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
