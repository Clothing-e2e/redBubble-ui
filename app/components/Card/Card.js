'use client';

import Shirt from '../../icons/tshirt.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Card() {
    return (
        <div className="w-[276px] h-[423px] flex flex-col gap-2 text-center">
            <Link href="/product"><Image src={Shirt} width={276} height={322} /></Link>
            <p className='text-sm'>Description</p>
            <p className='text-xs'>Rs. 1200</p>
            <div className='flex justify-center gap-2'>
                <div className='rounded-full w-[35px] h-[35px] flex justify-center items-center cursor-pointer' style={{ border: '0.5px solid black'}}>S</div>
                <div className='rounded-full w-[35px] h-[35px] flex justify-center items-center cursor-pointer' style={{ border: '0.5px solid black'}}>M</div>
                <div className='rounded-full w-[35px] h-[35px] flex justify-center items-center cursor-pointer' style={{ border: '0.5px solid black'}}>L</div>
                <div className='rounded-full w-[35px] h-[35px] flex justify-center items-center cursor-pointer' style={{ border: '0.5px solid black'}}>XL</div>
            </div>
        </div>
    )
}