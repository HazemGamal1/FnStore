import React from 'react'
import {CgProfile} from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Header = () => {
  return (
    <div className='w-full  z-50 bg-white border-b-2 border-black'>
        <div className='p-6 flex justify-between items-center'>
        <div>
        <h1 className='font-bold text-lg'>Woddy</h1>
        </div>
        <div className='flex gap-12 items-center '>
            <ul className='gap-8 hidden md:flex'>
                <li>Shop</li>
                <li>Browse</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ul>
            <div className='flex gap-4 items-center'>
            <div className='rounded-full'>
                <CgProfile className="text-[30px]"/>
            </div>
            <div className='bg-[#d3e880] rounded-full p-1'>
                <AiOutlineShoppingCart className="text-[25px]"/>
            </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Header
