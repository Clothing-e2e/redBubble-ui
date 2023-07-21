'use client';

import { useState } from 'react';
import Image from 'next/image';
import Hamburger from '../../icons/Hamburger.png';
import Cart from '../../icons/Cart.png';
import User from '../../icons/User.png';
import Sidebar from '../Sidebar/Sidebar';
import Logo from '../../icons/L O G O.png';

export default function Header() {
  const [ showSidebar, setShowSidebar ] = useState(false);
    return (
      <>
        <div className="flex flex-row w-[100vw] p-10 pl-20 pr-20 justify-between sticky top-0 bg-white">
            <div className='cursor-pointer' onClick={() => setShowSidebar(true)}>
              <Image src={Hamburger} alt="Navigation button" />
            </div>
            <div>
            <Image src={Logo} alt="App Logo" />
            </div>
            <div className='flex'>
              <div className='pr-5'><Image src={Cart} alt="Cart button" /></div>
              <Image src={User} alt="User button" />
            </div>
        </div>
        <div className='p-10 pt-0 pb-0'><hr /></div>
        <Sidebar isOpen={showSidebar} close={() => setShowSidebar(false)} />
      </>
    )
}