import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'APOD', to: '/apod' },
    { label: 'Mars Rovers', to: '/marsrover' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'About', to: '/about' },
  ];

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="  container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}

        <Link to="/" className="text-2xl font-bold tracking-wide text-[#539ABF] cursor-pointer flex items-center ">
          {/* <img src={logo} alt="" className="w-[10%] h-[10%] md:w-[5%] md:h-[5%]" /> */}
          CosmoView
        </Link>

        {/* Desktop Menu */}
        <div className=" hidden md:flex space-x-8">
          <ul className="flex items-center gap-6 text-white">
            {navLinks.map((data,i) => (
              <li key={i}>
                <NavLink
                  className={({ isActive }) => {
                    let checkIsActive = isActive ? "linkIsActive" : "linkIsInActive";
                    return checkIsActive;
                  }}
                  to={data.to}
                >
                  {data.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* Sign In Button */}
        <div className=" hidden md:block  gap-2 ">
          <div className="flex items-center gap-3">
            <Link to='/contactus'>
              <button to="" className="px-2 py-2 bg-white rounded-full transition cursor-pointer">
                <Phone color="black" size={15} />
              </button>
            </Link>
            <Link to='/signin'>
              <button to="" className="px-2 py-2 bg-white rounded-full  transition cursor-pointer">
                <FaUser color="black" />
              </button>
            </Link>
          </div>

        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white py-4">
          <Link to="/" className="block px-6 py-2 hover:bg-blue-500">Home</Link>
          <Link to="/apod" className="block px-6 py-2 hover:bg-blue-500">APOD</Link>
          <Link to="/marsrover" className="block px-6 py-2 hover:bg-blue-500">Mars Rovers</Link>
          <Link to="/gallery" className="block px-6 py-2 hover:bg-blue-500">Gallery</Link>
          <Link to="/about" className="block px-6 py-2 hover:bg-blue-500">About</Link>
          <Link to="/contactus" className="block px-6 py-2 hover:bg-blue-500">Contact Us</Link>
          <Link to='/signin'>
            <button to="/signin" className="block px-6 py-2 ml-5 rounded-xl bg-blue-500 text-center hover:bg-blue-600">
              Sign In
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
