'use client';

import { useState } from "react";
import Image from "next/image";
import Arrow from '../../icons/arrow.png';

export default function Accordian({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
    return (
        <div className="w-full">
            {items.map((item, index) => (
                <div
                key={index}
                className="border-b border-slate-200 p-4 cursor-pointer"
                onClick={() => handleClick(index)}
                >
                <div className="flex items-center justify-between py-2">
                    <h3 className="text-xs">{item.title}</h3>
                    <span className={`${activeIndex === index ? 'transform rotate-180' : ''}`}>
                        <Image src={Arrow} width={20} height={20} />
                    </span>
                </div>
                {activeIndex === index && <p className="mt-2">{item.content}</p>}
                </div>
            ))}
        </div>
    )
}