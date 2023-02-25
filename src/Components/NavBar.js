import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto text-white '>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='hidden md:flex '>
            <li className='p-4'>Home</li> 
            <li className='p-4'>company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div className='block md:hidden'>
            {
                toggleMenu
                ? <AiOutlineClose size={20} onClick={() => setToggleMenu(false)} />
                : <AiOutlineMenu size={20}  onClick={() => setToggleMenu(true)} />
            }
            {
                toggleMenu && 
                (
                    <div className='fixed left-0 top-0 w-60% h-full border-r border-r-grey-900 bg-[#000300]'>
                        <h1 className='w-full text-3xl font-bold p-4 text-[#00df9a]'>REACT.</h1>
                        <ul className='pt-10 p-4 uppercase' >
                            <li className='p-4 border-b border-grey-600'>Home</li> 
                            <li className='p-4 border-b border-grey-600'>company</li>
                            <li className='p-4 border-b border-grey-600'>Resources</li>
                            <li className='p-4 border-b border-grey-600'>About</li>
                            <li className='p-4'>Contact</li>
                        </ul>   
                    </div>
                )
            }
        </div>
        
    </div>
  )
}

export default NavBar