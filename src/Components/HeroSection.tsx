import React from 'react'

const HeroSection = () => {
  return (
    <section className="flex justify-center items-center w-[1920px] bg-[#043873]  ">
        <div className="w-[656px] h-[361px]  text-white">
            <h2 className="w-[656px] h-[154px] font-sans font-[700] text-[64px] ">Get More Done With Whitepace</h2>
            <p className="w-[656px] h-[60px] font-sans font-small text-[18px] leading-7 my-10 ">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasts </p>
            <button className=" w-[189px] h-[63px] rounded-md p- bg-[#2F9CF9] font-mono  ">Try Whitepace free → </button>
        </div>
        <div className="w-[824px] h-[549px] bg-[#C4DEFD]  my-[140px] "> 
            
        </div>
    </section>
  )
}

export default HeroSection
