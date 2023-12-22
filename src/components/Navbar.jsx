import React from 'react'

function Navbar() {
    return (
        <nav className='h-20  w-full bg-black  px-20 flex  justify-between items-center  text-white'>
            
            <div className="nav-left  flex items-center cursor-pointer" >
                <div className="logo w-14 h-14 mr-2">

                </div>
                <h1 className='text-2xl'>OCEAN STUDIO</h1>
            </div>
           
            <div className="nav-right items-center ">
               <ul className='flex items-center cursor-pointer'>
                <li className='mr-5'>About</li>
                <li className='mr-5'>Features</li>
                <li className='mr-5'>Pricing</li>
                <li className='mr-5 p-2 bg-medianpersianblue rounded'>Contact Us</li>
               </ul>
            </div>
        </nav>
    )
}

export default Navbar
