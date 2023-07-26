'use client';

import { useState } from "react";
import Image from "next/image";
import Arrow from '../../icons/arrow.png';

function Accordian({ title, children }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <div className="w-full border-b border-slate-200 p-4">
            <div className="flex items-center justify-between py-2 cursor-pointer" onClick={handleClick}>
                <h3 className="text-xs">{title}</h3>
                <span className={`${isActive ? 'transform rotate-180' : ''}`}>
                    <Image src={Arrow} width={20} height={20} />
                </span>
            </div>
            {isActive && children}
        </div>
    )
}

export default Accordian;