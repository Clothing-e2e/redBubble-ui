'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../icons/navbar.png';
import Cart from '../../icons/shop.png';
import Profile from '../../icons/profile.png';
import Sidebar from '../Sidebar/Sidebar';
import Logo from '../../icons/logo.png';
import Link from 'next/link';
import useStore from '@/app/store/store';

export default function Header() {
  const [ showSidebar, setShowSidebar ] = useState(false);
  const showCart = useStore((state) => state.showCart);
  const cartItems = useStore((state) => state.cart);
  const isCartEmpty = cartItems.length === 0;

    return (
      <>
        <div className="flex flex-row w-[100vw] px-4 md:px-8 lg:px-20 py-4 justify-between sticky top-0 bg-white items-center z-100">
            <div className='cursor-pointer' onClick={() => setShowSidebar(true)}>
              <Image src={Navbar} alt="Navigation button" width={20} height={20} />
            </div>
            <div>
            <Link href="/"><Image src={Logo} alt="App Logo" className="h-[40px] w-[55px] sm:h-[60px] sm:w-[82px]" /></Link>
            </div>
            <div className='flex'>
              <div className='mr-5 cursor-pointer relative' onClick={showCart}>
                <Image src={Cart} alt="Cart button" width={20} height={20} />
                {!isCartEmpty && <div className='w-[18px] h-[18px] absolute bg-red-400 rounded-full -bottom-2.5 -right-2.5 text-xs text-white flex items-center justify-center font-sans'>{cartItems.length}</div>}
              </div>
              {/* <div><Image src={Profile} alt="User button" width={20} height={20} /></div> */}
            </div>
        </div>
        <Sidebar isOpen={showSidebar} close={() => setShowSidebar(false)} />
      </>
    )
}