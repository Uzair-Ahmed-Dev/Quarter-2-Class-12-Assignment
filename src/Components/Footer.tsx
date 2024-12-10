import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[#043873] my-10 w-[1920px] h-[461px]   ">
    <section className='flex pt-[140px] pr-[220px] pb-[32px] pl-[220px] h-full gap-[200px]'>
    <div className=" w-[295px] h-[169px] ">
        < Image
        src="/Logo.png"
        alt="Logo"
        width="191"
        height="34"
        />
        <p className=" w-[240px] h-[120px] font-sans font-small text-sm my-2 leading-6 text-white ">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
        </div> 

        <div className=" w-[295px] h-[169px]  ">
        
        <p className=" w-[91px] h-[22px] font-sans font-[700] text-sm  leading-[5px] text-white ">Product</p>
        <p className="w-[33px] h-[20px] font-sans font-[400] text-sm  my-2 text-white ">Overview</p>
        <p className="w-[128px] h-[20px] font-sans font-[400] text-sm my-2 text-white ">Pricing</p>
        <p className=" w-[130px] h-[20px] font-sans font-[400] text-sm   text-white ">Customer stories</p>
        </div>

        <div className=" w-[295px] h-[169px]  ">
        
        <p className=" w-[91px] h-[22px] font-sans font-[700] text-sm  leading-[5px] text-white ">Resources</p>
        <p className="w-[33px] h-[20px] font-sans font-[400] text-sm  my-2 text-white ">Blog</p>
        <p className="w-[128px] h-[20px] font-sans font-[400] text-sm my-2 text-white ">Guides & tutorials</p>
        <p className=" w-[130px] h-[20px] font-sans font-[400] text-sm   text-white ">Help center</p>
        </div>

        <div className=" w-[295px] h-[169px]  ">
        
        <p className=" w-[91px] h-[22px] font-sans font-[700] text-sm  leading-[5px] text-white ">Company</p>
        <p className="w-[66px] h-[20px] font-sans font-[400] text-sm  my-2 text-white ">About us</p>
        <p className="w-[128px] h-[20px] font-sans font-[400] text-sm my-2 text-white ">Careers</p>
        <p className=" w-[130px] h-[20px] font-sans font-[400] text-sm   text-white ">Media kit</p>
        </div>

    </section>
   </footer>
  )
}

export default Footer
