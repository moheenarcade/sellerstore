import React from 'react';
import { CgHomeAlt } from "react-icons/cg";
import { LuHeart } from "react-icons/lu";
import { IoIosCart } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";



const MobileBottomMenu = () => {

    return (

        <div className='mobile-bottom-menu block lg:hidden px-2 md:px-20 fixed bottom-0 z-[99999999999] bg-white shadow-md w-full border-t-[1px] border-t-gray-300'>
            <ul className='flex justify-between font-[400]'>
                <li className='py-2 px-2 flex flex-col items-center text-sm'>
                    <CgHomeAlt className='text-2xl' />
                    Home
                </li>
                <li className='py-2 px-2 flex flex-col items-center text-sm'><AiFillProduct className='text-2xl' />
                    Products</li>
                <li className='py-2 px-2 flex flex-col items-center text-sm'><IoIosCart className='text-2xl' />
                    Cart</li>
                <li className='py-2 px-2 flex flex-col items-center text-sm'><LuHeart className='text-2xl' />
                    Wishlist</li>
            </ul>
        </div>
    )
}

export default MobileBottomMenu;
