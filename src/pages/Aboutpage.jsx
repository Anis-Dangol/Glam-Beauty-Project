import React from 'react'
import aboutImgRight from "../assets/about/about-right.png";    
import aboutImgLeft from "../assets/about/about-left.png";

const Aboutpage = () => {
    return (
        <section className="flex flex-col gap-20  py-10">
            <div className="flex items-center gap-4 px-27">
                <div className='flex-1 space-y-4'>
                    <h2 className="font-bold text-[40px] text-[#5B4636]">
                    About Us
                    </h2>
                    <p className="font-normal text-[20px] leading-[1.7] text-[#5B4636]">
                    Rare Beauty is breaking down unrealistic standards of perfection.
                    <br></br>
                    This is makeup made to feel good in, without hiding what makes you
                    unique because Rare Beauty is not about being someone else, but
                    being who you are.
                    </p>
                </div>

                <div className='flex-1'>
                <img 
                src={aboutImgRight} 
                alt="makeup products" 
                className='w-full rounded-[64px]'/>

                </div>
            </div>

            <div className='flex items-center gap-4 px-27'>

                <div className='flex-1 px-2'>
                    <img 
                    src={aboutImgLeft} 
                    alt="makeup products" 
                    className='w-full rounded-[64px]'/>
                </div>

                <div className='flex-1 space-y-4'>
                    <h2 className="font-bold text-[40px] text-[#5B4636]">
                    Our Mission
                    </h2>
                    <p className="font-normal text-[20px] leading-[1.7] text-[#5B4636]">
                    We are on a mission to help everyone celebrate their individuality by redefining what beautiful means. 
                    <br></br>
                    We want to promote self-acceptance and give people the tools they need to feel less alone in the world.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Aboutpage
