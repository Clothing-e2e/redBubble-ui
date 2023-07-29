'use client';

import { useState } from 'react';
import FilterSidebar from '../Sidebar/FilterSidebar';

export default function Filter() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className="border border-[#a39f9f] px-4 py-1 rounded-full text-xs sm:text-sm" onClick={() => setIsOpen((value) => !value)}>FILTERS</button>
            <FilterSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}