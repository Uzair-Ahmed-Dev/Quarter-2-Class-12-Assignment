import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <header className=" bg-[#043873] w-[1920px] h-[92px] flex  justify-around">
    <div className="flex justfiy-center items-center  ">
    <Image
    src="/Logo.png"
    alt="Logo"
    width="191"
    height="34"
    />
    </div>

    <div className="flex  justify-between items-center w-[737.5px] h-[60px] my-5 font-sans">
       
            <ul className="flex justify-around text-white  font-medium text-sm leading-6 w-[549px] h-[23px] ">
                <li><a href="">Products</a></li>
                <li><a href="">Solutions</a></li>
                <li><a href="">Resources</a></li>
                <li><a href="">Pricing</a></li>
               
            </ul>
            <div className="  w-[126px] h-[60px] bg-[#FFE492] py-[16px] px-[40px] rounded-lg  font-medium text-sm leading-6  ">
            <button>Login</button>
        </div>
       
    </div>

</header>
  )
}

export default Header
