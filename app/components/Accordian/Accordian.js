'use client';

import { useState } from 'react';
import Image from 'next/image';
import Arrow from '../../icons/arrow.png';

function Accordian({
  title,
  children,
  size = 'small',
  isNested = false,
  isOpen = false,
}) {
  const [isActive, setIsActive] = useState(isOpen);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  const textSize = size === 'small' ? 'text-xs' : 'text-sm';

  return (
    <div
      className={`w-full ${
        !isNested ? 'border-b border-slate-200 p-4' : 'p-1'
      }`}
    >
      <div
        className={`flex items-center justify-between py-2 cursor-pointer`}
        onClick={handleClick}
      >
        <h3 className={textSize}>{title}</h3>
        <span className={`${isActive ? 'transform rotate-180' : ''}`}>
          <Image src={Arrow} width={20} height={20} alt="Arrow" />
        </span>
      </div>
      {isActive && children}
    </div>
  );
}

export default Accordian;
