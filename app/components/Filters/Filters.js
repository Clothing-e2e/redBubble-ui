'use client';

import { useState } from 'react';
import Close from '../../icons/Close.png';
import Image from 'next/image';
import Accordian from '../Accordian/Accordian';

export default function Filter() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className="border border-[#a39f9f] px-4 py-1 rounded-full text-sm" onClick={() => setIsOpen((value) => !value)}>FILTERS</button>
            <div className={`fixed inset-y-0 right-0 z-50 w-full sm:w-1/2 lg:w-1/4 bg-white shadow-lg transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
                <div className='flex cursor-pointer justify-end p-6' onClick={() => setIsOpen(false)}>
                    <Image src={Close} alt='Close Sidebar button' width={12} height={12} />
                </div>
                <div className='p-3'>
                    <Accordian items={[
                        {
                        title: 'PRODUCT TYPE',
                        content: 'This is the content of Item 1.',
                        },
                        {
                        title: 'COLORS',
                        content: 'This is the content of Item 2.',
                        },
                        {
                        title: 'SIZE',
                        content: 'This is the content of Item 3.',
                        },
                        {
                            title: 'PRICE',
                            content: 'This is the content of Item 3.',
                            },
                            {
                                title: 'FITTINGS',
                                content: 'This is the content of Item 3.',
                                },
                    ]} />
                </div>
                <div className='absolute bottom-0 right-0 flex w-[100%] text-center'>
                    <div className='w-[50%] py-4 text-sm border-r bg-slate-50 hover:bg-slate-200 cursor-pointer'>CLEAR</div>
                    <div className='w-[50%] py-4 text-sm bg-slate-50 hover:bg-slate-200 cursor-pointer'>APPLY</div>
                </div>
            </div>
        </>
    );
}