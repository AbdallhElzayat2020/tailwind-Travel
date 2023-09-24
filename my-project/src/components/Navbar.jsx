import React, { useState } from "react";
import { FaBars, } from "react-icons/fa";
import {
  BsChatSquareDots,
  BsInstagram,
  BsTwitter,
  BsGoogle,
  BsFacebook,
} from "react-icons/bs";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 bg-gray-700 text-white">
      <ul className="hidden sm:flex px-4">
        <li>
          <a
            className="text-white hover:underline transition-all duration-[0.4s]"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="text-white hover:underline transition-all duration-[0.4s]"
            href="#gallery"
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            className="text-white hover:underline transition-all duration-[0.4s]"
            href="#deals"
          >
            Deals
          </a>
        </li>
        <li>
          <a
            className="text-white hover:underline transition-all duration-[0.4s]"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className=" flex justify-between ">
        <BsFacebook className="mx-4" />
        <BsTwitter className="mx-4" />
        <BsGoogle className="mx-4" />
        <BsInstagram className="mx-4" />
      </div>
      {/* home burger  icon */}
      <div onClick={handleNav} className="sm:hidden flex z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      {/* mobile menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? `overflow-y-hidden md:hidden ease-in duration-300 absolute left-0 h-screen bg-black/90 px-4 py-7 flex flex-col  w-full top-0  text-gray-300`
            : `absolute top-0 h-screen left-[-100%] ease-in duration-[0.5s]`
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className=" text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className=" text-2xl py-8">
            <a href="#gallery">Gallery</a>
          </li>
          <li className=" text-2xl py-8">
            <a href="#deals">Deals</a>
          </li>
          <li className=" text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
