import React from "react";
import hero from "../../public/images/3.jpg";
const Hero = () => {
  return (
    <div className="overflow-hidden">
      <img src={hero} alt="landImg" className="w-full h-screen object-cover " />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] md:w-full md:-[50%] max-w-[600px] md:h-full flex-col text-white bg-black md:bg-transparent w-fit h-[250px]  sm:text-white p-4">
          <h1 className=" text-[30px] font-bold">Find Your special Trip</h1>
          <h2 className="font-semibold text-[25px] italic ">With Weekaway</h2>
          <p className="font-semibold ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt,
            nisi magni sint doloribus architecto, quasi est repellendus deleniti
            repudiandae, dolores perspiciatis nihil vero? Porro sequi soluta
            explicabo, commodi aut eligendi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
