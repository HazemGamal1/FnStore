import React from 'react'
import img from '../../public/hero-img.jpg'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='w-full'>
      <div className='mt-20 flex p-4 h-42 justify-between md:items-center'>
        <div>
            <h1 className='text-5xl block md:text-6xl lg:text-8xl'>Modern furniture for <br />minimalist lovers</h1>
            <p className='text-lg lg:text-2xl'>Experience the ultimate relaxation with our collection of <br />serene and tranquil 
                spa-inspired designs.
            </p>
            <div className='flex gap-6 mt-8 items-center'>
                <div className='px-4 py-3 bg-[#d3e880] rounded-md cursor-pointer font-semibold'>
                    <p className=''>Shop Now</p>
                </div>
                <div className='underline'>
                    Show reel
                </div>
            </div>
        </div>
        {/* image section */}
        <div className='hidden rounded-t-full overflow-hidden md:block'>
            <div className='relative'>
             <Image src={img} alt="furniture" width={400} height={400}/>
             <h1 className='absolute bottom-[18px] text-white mx-8'>Furnitrue </h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
