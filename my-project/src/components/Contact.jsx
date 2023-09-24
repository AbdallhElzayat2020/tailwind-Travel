import React from 'react'
import contactImg from "../../public/images/3.jpg"
const Contact = () => {
    return (
        <div className='max-w-[1140px] m-auto w-full p-4 py-16' id='contact'>
            <h2 className='text-gray-700 text-center font-bold'>Send SMS Message</h2>
            <p className='text-center text-gray-400 py-2'>We are Standing By!</p>
            <div className="grid md:grid-cols-2">
                <img className='w-full md:h-full object-cover p-2 max-w-[500px] h-[200px]' src={contactImg} alt="contact_img" />
                <form action="">
                    <div className="grid grid-cols-2">
                        <input required className='border m-2 p-2 ' type="text" placeholder='First' />
                        <input required className='border m-2 p-2 ' type="text" placeholder='Last' />
                        <input required className=' border m-2 p-2 ' type="email" placeholder='Email' />
                        <input required className='border m-2 p-2 ' type="tel" placeholder='Phone' />
                        <input required className='border col-span-2 m-2 p-2 ' type="text" placeholder='Address' />
                        <textarea required placeholder='Write Your Message Here' className='resize-none border col-span-2 m-2 p-2' name="" id="" cols="30" rows="10"></textarea>
                        <button className='col-span-2 m-2 p-2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact