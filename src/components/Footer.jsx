import React from 'react'

function Footer() {
  return (
    <div className='flex justify-between items-center bg-black text-white p-10'>
      <div className='text-3xl'>
      <i class='mr-2 bx bxl-whatsapp' ></i>
      <i class='mr-2 bx bxl-instagram' ></i>
      <i class='mr-2 bx bxl-linkedin' ></i>
      <i class='mr-2 bx bxl-facebook-circle' ></i>
      </div>
      <div>Developed by <b>Gautam Bhagat</b></div>
      <div className='text-end text-sm'>Proudly created in India.<br/> All Right Reserved, All Wrong Reversed.</div>
    </div>
  )
}

export default Footer
