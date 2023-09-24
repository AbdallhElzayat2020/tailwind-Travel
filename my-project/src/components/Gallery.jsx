import React from 'react'
import img_1 from "../../public/images/1.jpg"
const Gallery = () => {
    return (
        <div className='max-w-[1140px] m-auto w-full px-4 py-16' id='gallery'>
            <h2 className='text-center text-gray-700 px-4 font-bold'>Gallery</h2>
            <div className=" grid sm:grid-cols-5 gap-4">
                <div className="sm:col-span-3 col-span-2 row-span-2">
                    <img className='w-full h-full object-cover' src={img_1} alt="img_gallery" />
                </div>
                <div className="">
                    <img className='w-full h-full object-cover' src={img_1} alt="img_gallery" />
                </div>
                <div className="">
                    <img className='w-full h-full object-cover' src={img_1} alt="img_gallery" />
                </div>
                <div className="">
                    <img className='w-full h-full object-cover' src={img_1} alt="img_gallery" />
                </div>
                <div className="">
                    <img className='w-full h-full object-cover' src={img_1} alt="img_gallery" />
                </div>
            </div>
        </div>
    )
}

export default Gallery