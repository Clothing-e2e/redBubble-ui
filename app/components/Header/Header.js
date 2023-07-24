'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../icons/navbar.png';
import Cart from '../../icons/shop.png';
import Profile from '../../icons/profile.png';
import Sidebar from '../Sidebar/Sidebar';
import Logo from '../../icons/logo.png';
import Link from 'next/link';

export default function Header() {
  const [ showSidebar, setShowSidebar ] = useState(false);
    return (
      <>
        <div className="flex flex-row w-[100vw] px-4 md:px-8 lg:px-20 py-4 justify-between sticky top-0 bg-white items-center">
            <div className='cursor-pointer' onClick={() => setShowSidebar(true)}>
              <Image src={Navbar} alt="Navigation button" width={20} height={20} />
            </div>
            <div>
            <Link href="/"><Image src={Logo} alt="App Logo"/></Link>
            </div>
            <div className='flex'>
              <div className='pr-5'><Image src={Cart} alt="Cart button" width={20} height={20} /></div>
              <div><Image src={Profile} alt="User button" width={20} height={20} /></div>
            </div>
        </div>
        <Sidebar isOpen={showSidebar} close={() => setShowSidebar(false)} />
      </>
    )
}