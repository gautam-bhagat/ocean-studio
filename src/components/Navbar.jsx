import React from 'react'
import logo from '../assests/OCEAN_STUDIO_LOGO.png'

function Navbar() {
    return (
        <nav className='h-20  font-regular w-full bg-transparent flex  justify-center items-center  text-white'>


            <div className='flex bg-gradient-to-b  items-center py-1 pl-2 from-richelectricblue to-oxfordblue shadow-inner shadow-white ' style={{ borderRadius: 50 }}>
                <div  className=" logo mr-1">
                    <img src={logo} className='w-12' alt="react logo" />
                </div>
                <div className="logo-heading mr-20">
                    OCEAN STUDIO
                </div>
                <ul className='flex '>
                    <li className='mr-20 '>
                        Services
                    </li>
                    <li className='mr-20'>
                        Gallery
                    </li>
                </ul>
            </div>
            <div className='ml-10 flex justify-content bg-gradient-to-b  from-richelectricblue to-oxfordblue p-5 shadow-inner shadow-white ' style={{ borderRadius: 50 }}>
              Contact Us
            </div>
           
        </nav>
    )
}

export default Navbar
