import React from 'react'

function Navbar() {
    return (
        <nav className='h-20  font-regular w-full bg-transparent flex  justify-center items-center  text-white'>


            <div className='flex pr-10 bg-gradient-to-b  from-richelectricblue to-oxfordblue p-5 shadow-inner shadow-white ' style={{ borderRadius: 50 }}>
                <div className="logo mr-20">
                    kj
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
            {/* <div className="nav-left  flex items-center cursor-pointer" >
                <div className="logo w-14 h-14 mr-2">

                </div>
                <h1 className='text-2xl font-bold'>OCEAN STUDIO</h1>
            </div>
           
            <div className="nav-right items-center ">
               <ul className='flex items-center cursor-pointer'>
                <li className='mr-5'>About</li>
                <li className='mr-5'>Features</li>
                <li className='mr-5'>Pricing</li>
                <li className='mr-5 p-2 bg-medianpersianblue rounded'>Contact Us</li>
               </ul>
            </div> */}
        </nav>
    )
}

export default Navbar
