import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h1>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 bg-white p-8 shadow-lg rounded-xl">
        
        {/* Contact Info Section */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-gray-700">Get in Touch</h2>
          <p className="text-gray-600">
            Have any questions? We'd love to hear from you! Contact us via phone, email, or visit us at our location.
          </p>
          
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-600" />
            <p className="text-gray-700 font-medium">+91 98765 43210</p>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            <p className="text-gray-700 font-medium">info@yourwebsite.com</p>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-600" />
            <p className="text-gray-700 font-medium">Pune, Maharashtra, India</p>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-[200px] rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Google Maps"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5108390773335!2d73.84797371489222!3d18.520430687403166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c12a977aa4a1%3A0x5bf9c76e768fe3e3!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1644840318007!5m2!1sen!2sin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Send a Message</h2>
          
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>

            <button className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
