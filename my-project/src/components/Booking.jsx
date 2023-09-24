import React from "react";

const Booking = () => {
    return (
        <div className="max-w-[1140px] m-auto w-full p-4" id="deals">
            <div className="">
                <form action="" className="lg:flex lg:justify-between items-center">
                    <div className="flex flex-col my-2 py-2">
                        <label>Destination </label>
                        <select name="" className="lg:w-[300px] md:w-full border rounded p-2" id="">
                            <option value="">Grade Antiqua</option>
                            <option value="">Key West</option>
                            <option value="">Maldives</option>
                            <option value="">Cozumel</option>
                        </select>
                    </div>
                    <div className="flex w-full">
                        <div className=" flex flex-col w-full lg:max-[250px] my-2 p-2">
                            <label htmlFor="">Check-In</label>
                            <input className=" border rounded-md p-2" type="date" />
                        </div>
                        <div className=" flex flex-col w-full lg:max-[250px] my-2 p-2">
                            <label htmlFor="">Check-Out</label>
                            <input className=" border rounded-md p-2" type="date" />
                        </div>
                    </div>
                    <div className="flex flex-col my-2 p-2 w-full">
                        <label htmlFor="">Search</label>
                        <button className="w-full">Rate & Availabilities</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;
