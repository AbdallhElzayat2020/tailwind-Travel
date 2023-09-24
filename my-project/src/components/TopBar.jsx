import React from "react";
import {
  AiFillClockCircle,
  AiFillPhone,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";
const TopBar = () => {
  return (
    <div className="flex bg-slate-200 items-center justify-between px-4 py-2">
      <div className="flex items-center ">
        <BsChatSquareDots
          size={30}
          className="mr-2 text-[var(--primary-dark)]"
        />
        <h1 className="text-xl font-bold text-gray-700">WEEKAWAY</h1>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex items-center px-6  ">
          <AiFillClockCircle
            size={20}
            className=" mr-2 text-[var(--primary-dark)]"
          />
          <p className=" text-sm text-gray-700">9 AM - 5PM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className=" mr-2 text-[var(--primary-dark)]" />
          <p className=" text-sm text-gray-700">+201212484233</p>
        </div>
        <button className="btn">Get Free Quote</button>
      </div>
    </div>
  );
};

export default TopBar;
