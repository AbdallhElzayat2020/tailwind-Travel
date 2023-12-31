import React from "react";
import img_2 from "../../public/images/1.jpg";
import img_3 from "../../public/images/2.jpg";
import img_4 from "../../public/images/3.jpg";
const Activities = () => {
  return (
    <div className=" max-w-[1140px] m-auto w-full md:flex mt-[-75px] ">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold ">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src={img_3}
          alt="ActivitiesImg"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold ">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src={img_2}
          alt="ActivitiesImg"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold ">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src={img_4}
          alt="ActivitiesImg"
        />
      </div>
    </div>
  );
};

export default Activities;
